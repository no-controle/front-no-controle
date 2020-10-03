import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import DropdownInput from '../components/DropdownInput';
import './PayDay.css';

const currentMonth = `${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const getMonth = (valor: string) => valor.split("/")[0];
const getYear = (valor: string) => valor.split("/")[1];

const PayDay = () => {
  const [period, setPeriod] = useState(currentMonth);
  const [periodsList, setPeriodsList] = useState({ periods: [] });
  const [paymentData, setPaymentData] = useState({ payments: [{ name: "", value: 0, paid: false }] });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8089/monthly/periods'),
      fetch(`http://localhost:8089/payments?month=${getMonth(period)}&year=${getYear(period)}`)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      console.log(data);
      setPeriodsList(data[0]);
      setPaymentData(data[1]);
    }).catch(function (error) {
      console.log(error);
    });
  }, [period]);

  return <div className="ui container">

    <div className="periodSelector">
      <DropdownInput options={periodsList.periods} defaultValue={period} onChange={setPeriod} />
    </div>

    <Table basic='very' size='large' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Valor</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {paymentData.payments.map((expense) =>
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