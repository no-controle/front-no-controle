import React from 'react';
import { Grid, Dropdown } from 'semantic-ui-react'
import './General.css';
import LineChartSegment from '../components/LineChartSegment';
import { general, generalPeriods } from '../stubData.js';

const mapPeriods = (periods: string[]) => periods.map((period) => { return { key: period, text: period, value: period } });

const Content = () => {
  return <div className="ui container">

    <div className="periodSelector">
      <Dropdown
        selection
        search
        scrolling
        options={mapPeriods(generalPeriods.periods)}
        defaultValue={"2020"}
      />
    </div>

    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <LineChartSegment header={'Receitas'} data={general("2020").general.incomes} width={500} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Despesas'} data={general("2020").general.expenses} width={500} height={300} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <LineChartSegment header={'Fixas'} data={general("2020").general.fixed} width={300} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Variáveis'} data={general("2020").general.variable} width={300} height={300} />
        </Grid.Column>
        <Grid.Column>
          <LineChartSegment header={'Extras'} data={general("2020").general.extra} width={300} height={300} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;