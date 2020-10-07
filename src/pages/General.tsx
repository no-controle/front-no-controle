import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react'
import './General.css';
import LineChartSegment from '../components/LineChartSegment';
import DropdownInput from '../components/DropdownInput';

const currentYear = new Date().getFullYear().toString();

const Content = () => {
  const [period, setPeriod] = useState(currentYear);
  const [periodsList, setPeriodsList] = useState({ periods: [] });
  const [generalData, setGeneralData] = useState({ general: { incomes: [], expenses: [], fixed: [], variable: [], extra: [] } });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8089/general/periods'),
      fetch(`http://localhost:8089/general?year=${period}`)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      setPeriodsList(data[0]);
      setGeneralData(data[1]);
    }).catch(function (error) {
      console.log(error);
      setPeriodsList({ periods: [] });
      setGeneralData({ general: { incomes: [], expenses: [], fixed: [], variable: [], extra: [] } });
    });
  }, [period]);

  console.log(generalData);

  return <div className="ui container">

    <div className="periodSelector">
      <DropdownInput options={periodsList.periods} defaultValue={period} onChange={setPeriod} />
    </div>

    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <LineChartSegment header={'Receitas'} data={generalData.general.incomes} width={500} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Despesas'} data={generalData.general.expenses} width={500} height={300} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <LineChartSegment header={'Fixas'} data={generalData.general.fixed} width={300} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Variáveis'} data={generalData.general.variable} width={300} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Extras'} data={generalData.general.extra} width={300} height={300} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;