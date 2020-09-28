import React from 'react';
import { Grid, Header, Icon, Segment, Dropdown } from 'semantic-ui-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './General.css';

const data = [
  { name: "Jan", value: 3000 },
  { name: "Fev", value: 4000 },
  { name: "Mar", value: 4300 },
  { name: "Abr", value: 6000 }];

const generalCharts = [
  // {
  //   header: "Receitas",
  //   data: [
  //     { name: "Jan", value: 3000 },
  //     { name: "Fev", value: 4000 },
  //     { name: "Mar", value: 4300 },
  //     { name: "Abr", value: 6000 }]
  // },
  {
    header: "Despesas",
    data: [{ name: "Jan", value: 4000 }]
  }
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
        selection
        search
        scrolling
        options={dropdownOptions}
        defaultValue={"2020"}
      />
    </div>

    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as='h3' attached='top'>
            {'Receitas'}
          </Header>
          <Segment attached>
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </Segment>
        </Grid.Column>
        {generalCharts.map((chartItem) => { return <ChartItem header={chartItem.header} /> })}
      </Grid.Row>

      <Grid.Row columns={3}>
        {groupedCharts.map((chartItem) => { return <ChartItem header={chartItem.header} /> })}
      </Grid.Row>
    </Grid>
  </div>
}

export default Content;