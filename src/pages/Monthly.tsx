import React from 'react';
import { Dropdown, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react'
import './Monthly.css';

const dropdownOptions = [
  { key: "09/2020", text: "09/2020", value: "09/2020" },
  { key: "10/2020", text: "10/2020", value: "10/2020" },
  { key: "11/2020", text: "11/2020", value: "11/2020" }
]

const groupedCharts = [
  { header: "Fixas" },
  { header: "Variáveis" },
  { header: "Extras" }
]

const monthGeneralInfo = {
  income: 3000,
  expense: 1550.50,
  balance: 1449.50
}

const ChartItem = (props: { header: String }) => {
  return <Grid.Column>
    <Header as='h3' attached='top'>
      {props.header}
    </Header>
    <Segment placeholder attached>
      <Header icon>
        <Icon name='chart pie' />
        Logo mais terá um gráfico aqui
      </Header>
    </Segment>
  </Grid.Column>
}

const Content = () => {
  const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  
  return <div className="ui container">

    <div className="periodSelector">
      <Dropdown
        placeholder='Select a period'
        selection
        search
        scrolling
        options={dropdownOptions}
        defaultValue={"09/2020"}
      />
    </div>

    <Grid>
      <Grid.Row className='generalInfo' textAlign='center' verticalAlign='middle' columns={3}>
        <Grid.Column>
          <div className=''><Statistic label='Receita' value={formatCurrency(monthGeneralInfo.income)} size='small'/></div>
        </Grid.Column>
        <Grid.Column>
          <div className=''><Statistic label='Despesa' value={formatCurrency(monthGeneralInfo.expense)} size='small'/></div>
        </Grid.Column>
        <Grid.Column>
          <div className=''><Statistic label='Saldo' value={formatCurrency(monthGeneralInfo.balance)} size='small'/></div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        {groupedCharts.map((chartItem) => { return <ChartItem header={chartItem.header} /> })}
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;