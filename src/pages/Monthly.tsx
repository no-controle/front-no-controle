import React, { useState } from 'react';
import { Dropdown, Grid, Statistic } from 'semantic-ui-react'
import './Monthly.css';
import PieChartSegment from '../components/PieChartSegment';
import { monthly, monthlyPeriods } from '../stubData.js';

const mapPeriods = (periods: string[]) => periods.map((period) => { return { key: period, text: period, value: period } });

const Content = () => {
  const [period, setPeriod] = useState('09/2020');

  const onPeriodSelect = (_e: any, { value }: any) => setPeriod(value);
  
  const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  return <div className="ui container">

    <div className="periodSelector">
      <Dropdown
        selection
        search
        scrolling
        closeOnBlur
        options={mapPeriods(monthlyPeriods.periods)}
        defaultValue={period}
        onChange={onPeriodSelect}
      />
    </div>

    <Grid>
      <Grid.Row className='generalInfo' textAlign='center' verticalAlign='middle' columns={3}>
        <Grid.Column>
          <div className=''><Statistic label='Receita' value={formatCurrency(monthly(period).monthly.income)} size='small' /></div>
        </Grid.Column>
        <Grid.Column>
          <div className=''><Statistic label='Despesa' value={formatCurrency(monthly(period).monthly.expense)} size='small' /></div>
        </Grid.Column>
        <Grid.Column>
          <div className=''><Statistic label='Saldo' value={formatCurrency(monthly(period).monthly.balance)} size='small' /></div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <PieChartSegment header={'Fixas'} data={monthly(period).monthly.fixed} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Variáveis'} data={monthly(period).monthly.variable} />
        </Grid.Column>
        <Grid.Column>
          <PieChartSegment header={'Extras'} data={monthly(period).monthly.extra} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;