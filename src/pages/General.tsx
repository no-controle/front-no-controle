import React from 'react';
import { Grid, Header, Icon, Segment, Dropdown } from 'semantic-ui-react'
import './General.css';

const generalCharts = [
  { header: "Receitas" },
  { header: "Despesas" }
]

const groupedCharts = [
  { header: "Fixas" },
  { header: "Variáveis" },
  { header: "Extras" }
]

const dropdownOptions = [
  { key: "2019", text: "2019", value: "2019" },
  { key: "2020", text: "2020", value: "2020" },
  { key: "2021", text: "2021", value: "2021" }
]

const ChartItem = (props: { header: String }) => {
  return <Grid.Column>
    <Header as='h3' attached='top'>
      {props.header}
    </Header>
    <Segment placeholder attached>
      <Header icon>
        <Icon name='chart area' />
        Logo mais terá um gráfico aqui
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
        defaultValue={"2020"}
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