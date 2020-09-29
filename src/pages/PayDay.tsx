import React, { useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import DropdownInput from '../components/DropdownInput';
import { monthlyPeriods, payment } from '../stubData.js';

const currentMonth = `${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const PayDay = () => {
  const [period, setPeriod] = useState(currentMonth);

  return <div className="ui container text">

    <div className="periodSelector">
      <DropdownInput options={monthlyPeriods.periods} defaultValue={period} onChange={setPeriod} />
    </div>

    <Table basic='very' size='large' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Valor</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {payment(period).payments.map((expense) =>
          <Table.Row>
            <Table.Cell>{expense.name}</Table.Cell>
            <Table.Cell width='8' textAlign='center'>
              <Button color={expense.paid ? 'green' : 'red'} fluid>{formatCurrency(expense.value)}</Button>
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
  </div>
}

export default PayDay;