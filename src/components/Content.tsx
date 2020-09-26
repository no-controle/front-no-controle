import React from 'react';
import { Dropdown, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import './Content.css';

const dropdownOptions = [
  { key: "09/2020", text: "09/2020", value: "09/2020" },
  { key: "10/2020", text: "10/2020", value: "10/2020" },
  { key: "11/2020", text: "11/2020", value: "11/2020" }
]

const generalCharts = [
  { header: "Receitas" },
  { header: "Despesas" }
]

const groupedCharts = [
  { header: "Fixas" },
  { header: "Variáveis" },
  { header: "Extras" }
]

const ChartItem = (props: { header: String }) => {
  return <Grid.Column>
    <Header as='h3' attached='top'>
      {props.header}
    </Header>
    <Segment placeholder attached>
      <Header icon>
        <Icon name='chart pie' />
        It will soon have a chart here
      </Header>
    </Segment>
  </Grid.Column>
}

const Content = () => {
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
      <Grid.Row columns={2}>
        {generalCharts.map((chartItem) => { return <ChartItem header={chartItem.header} /> })}
      </Grid.Row>

      <Grid.Row columns={3}>
      {groupedCharts.map((chartItem) => { return <ChartItem header={chartItem.header} /> })}
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;