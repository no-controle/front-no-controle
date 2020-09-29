import React from 'react';
import { Dropdown, Grid, Statistic } from 'semantic-ui-react'
import './Monthly.css';
import PieChartSegment from '../components/PieChartSegment';
import { monthly, monthlyPeriods } from '../stubData.js';

const mapPeriods = (periods: string[]) => periods.map((period) => { return { key: period, text: period, value: period } });

const Content = () => {
  const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return <div className="ui container">

    <div className="periodSelector">
      <Dropdown
        selection
        search
        scrolling
        options={mapPeriods(monthlyPeriods.periods)}
        defaultValue={"09/2020"}
      />
    </div>

    <Grid>
      <Grid.Row className='generalInfo' textAlign='center' verticalAlign='middle' columns={3}>
        <Grid.Column>
          <div className=''><Statistic label='Receita' value={formatCurrency(monthly("09/2020").monthly.income)} size='small' /></div>
        </Grid.Column>
        <Grid.Column>
          <div className=''><Statistic label='Despesa' value={formatCurrency(monthly("09/2020").monthly.expense)} size='small' /></div>
        </Grid.Column>
        <Grid.Column>
          <div className=''><Statistic label='Saldo' value={formatCurrency(monthly("09/2020").monthly.balance)} size='small' /></div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <PieChartSegment header={'Fixas'} data={monthly("09/2020").monthly.fixed} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Variáveis'} data={monthly("09/2020").monthly.variable} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Extras'} data={monthly("09/2020").monthly.extra} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;