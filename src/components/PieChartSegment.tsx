import React from 'react';
import { Header, Segment } from 'semantic-ui-react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface ChartItem {
  name: string;
  amount: number;
}

interface PieChartSegmentProps {
  header: string;
  data: ChartItem[];
}

const PieChartSegment = (props: PieChartSegmentProps) => {
  return <>
    <Header as='h3' attached='top'>
      {props.header}
    </Header>
    <Segment attached>
      <PieChart width={300} height={300}>
        <Pie dataKey="amount" data={props.data} fill="#82ca9d" label >
          {
            props.data && props.data.map((_entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Segment>
  </>
}

export default PieChartSegment;