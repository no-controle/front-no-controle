import React, { useEffect, useState } from 'react';
import { Grid, Statistic } from 'semantic-ui-react'
import './Monthly.css';
import PieChartSegment from '../components/PieChartSegment';
import DropdownInput from '../components/DropdownInput';

const currentMonth = `${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

const getMonth = (valor: string) => valor.split("/")[0];
const getYear = (valor: string) => valor.split("/")[1];

const Content = () => {
  const [period, setPeriod] = useState(currentMonth);
  const [periodsList, setPeriodsList] = useState({ periods: [] });
  const [monthlyData, setMonthlyData] = useState({ income: 0, expense: 0, balance: 0, fixed: [], variable: [], extra: [] });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8089/monthly/periods'),
      fetch(`http://localhost:8089/monthly?month=${getMonth(period)}&year=${getYear(period)}`)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      setPeriodsList(data[0]);
      setMonthlyData(data[1]);
    }).catch(function (error) {
      console.log(error);
    });
  }, [period]);

  const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

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
          <Statistic label='Despesa' value={formatCurrency(monthlyData.expense)} size='small' />
        </Grid.Column>
        <Grid.Column>
          <Statistic label='Saldo' value={formatCurrency(monthlyData.balance)} size='small' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <PieChartSegment header={'Fixas'} data={monthlyData.fixed} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Variáveis'} data={monthlyData.variable} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Extras'} data={monthlyData.extra} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;