import React, { useEffect, useState } from 'react';
import { Grid, Statistic } from 'semantic-ui-react'
import './Monthly.css';
import PieChartSegment from '../components/PieChartSegment';
import DropdownInput from '../components/DropdownInput';
import { currentMonth, getMonth, getYear } from '../util/DateUtil';
import { mapMonthlyData, formatCurrency } from '../util/MonthlyUtil';

const Content = () => {
  const [period, setPeriod] = useState(currentMonth);
  const [periodsList, setPeriodsList] = useState({ periods: [] });
  const [monthlyData, setMonthlyData] = useState({ income: 0, expenses: 0, balance: 0, fixed: 0, variable: 0, extra: 0, fixedByCategory: [], variableByCategory: [], extraByCategory: [] });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8890/monthly/periods'),
      fetch(`http://localhost:8890/monthly?month=${getMonth(period)}&year=${getYear(period)}`)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      setPeriodsList(data[0]);
      setMonthlyData(mapMonthlyData(data[1]));
    }).catch(function (error) {
      console.log(error);
      setPeriodsList({ periods: [] });
      setMonthlyData({ income: 0, expenses: 0, balance: 0, fixed: 0, variable: 0, extra: 0, fixedByCategory: [], variableByCategory: [], extraByCategory: [] });
    });
  }, [period]);

  return <div className="ui container">

    <div className="periodSelector">
      <DropdownInput options={periodsList.periods} defaultValue={period} onChange={setPeriod} />
    </div>

    <Grid>
      <Grid.Row className='generalInfo' textAlign='center' verticalAlign='middle' columns={3}>
        <Grid.Column>
          <Statistic label='Receita' value={formatCurrency(monthlyData.income)} size='small' />
        </Grid.Column>
        <Grid.Column>
          <Statistic label='Despesa' value={formatCurrency(monthlyData.expenses)} size='small' />
        </Grid.Column>
        <Grid.Column>
          <Statistic label='Saldo' value={formatCurrency(monthlyData.balance)} size='small' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <PieChartSegment header={'Fixas'} totalAmount={monthlyData.fixed} data={monthlyData.fixedByCategory} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Variáveis'} totalAmount={monthlyData.variable} data={monthlyData.variableByCategory} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Extras'} totalAmount={monthlyData.extra} data={monthlyData.extraByCategory} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;