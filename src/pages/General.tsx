import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react'
import './General.css';
import LineChartSegment from '../components/LineChartSegment';
import { general, generalPeriods } from '../stubData.js';
import DropdownInput from '../components/DropdownInput';

const currentYear = new Date().getFullYear().toString();

const Content = () => {
  const [period, setPeriod] = useState(currentYear);

  return <div className="ui container">

    <div className="periodSelector">
      <DropdownInput options={generalPeriods.periods} defaultValue={period} onChange={setPeriod} />
    </div>

    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <LineChartSegment header={'Receitas'} data={general(period).general.incomes} width={500} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Despesas'} data={general(period).general.expenses} width={500} height={300} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <LineChartSegment header={'Fixas'} data={general(period).general.fixed} width={300} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Variáveis'} data={general(period).general.variable} width={300} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Extras'} data={general(period).general.extra} width={300} height={300} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;