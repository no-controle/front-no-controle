import React from 'react';
import { Header, Segment } from 'semantic-ui-react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { formatCurrency } from '../util/MonthlyUtil';
import './PieChartSegment.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface ChartItem {
  name: string;
  amount: number;
}

interface PieChartSegmentProps {
  header: string;
  totalAmount: number;
  data: ChartItem[];
}

const PieChartSegment = (props: PieChartSegmentProps) => {
  return <>
    <Header className='header' as='h3' attached='top'>
      <span>{props.header}</span>
      <span>{formatCurrency(props.totalAmount)}</span>
    </Header>
    <Segment attached>
      <PieChart width={300} height={300}>
        <Pie dataKey="amount" data={props.data} fill="#82ca9d" onClick={(a) => {console.log(a.payload.payload);}} label >
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