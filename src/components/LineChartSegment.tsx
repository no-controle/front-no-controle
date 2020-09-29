import React from 'react';
import { Header, Segment } from 'semantic-ui-react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface ChartItem {
  name: string;
  amount: number;
}

interface LineChartSegmentProps {
  header: string;
  data: ChartItem[];
  width: number;
  height: number;
}

const LineChartSegment = (props: LineChartSegmentProps) => {
  return <>
    <Header as='h3' attached='top'>
      {props.header}
    </Header>
    <Segment attached>
      <LineChart width={props.width} height={props.height} data={props.data} >
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Segment>
  </>
}

export default LineChartSegment;