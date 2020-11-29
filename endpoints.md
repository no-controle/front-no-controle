/api/general/periods
{
  "periods": ["2019", "2020", "2021"]
}

/api/general?year=2020
{
  "general": {
    "incomes": [
      {
        "name": "Jan",
        "amount": "3000"
      },
      {
        "name": "Fev",
        "amount": "3200"
      },
      {
        "name": "Mar",
        "amount": "3400"
      },
      {
        "name": "Abr",
        "amount": "3500"
      }
    ],
    "expenses": [
      {
        "name": "Jan",
        "amount": "1550"
      },
      {
        "name": "Fev",
        "amount": "1200"
      },
      {
        "name": "Mar",
        "amount": "1000"
      },
      {
        "name": "Abr",
        "amount": "1000"
      }
    ],
    "fixed": [
      {
        "name": "Jan",
        "amount": "1000"
      },
      {
        "name": "Fev",
        "amount": "1000"
      },
      {
        "name": "Mar",
        "amount": "1000"
      },
      {
        "name": "Abr",
        "amount": "1000"
      }
    ],
    "variable": [
      {
        "name": "Jan",
        "amount": "300"
      },
      {
        "name": "Fev",
        "amount": "500"
      },
      {
        "name": "Mar",
        "amount": "200"
      },
      {
        "name": "Abr",
        "amount": "250"
      }
    ],
    "extra": [
      {
        "name": "Jan",
        "amount": "100"
      },
      {
        "name": "Fev",
        "amount": "400"
      },
      {
        "name": "Mar",
        "amount": "120"
      },
      {
        "name": "Abr",
        "amount": "30"
      }
    ]
  }
}




/api/monthly/periods
{
  "periods": ["09/2020", "10/2020", "11/2020"]
}

/api/monthly/generalInfo?month=09&year=2020
{
  "income": 3000,
  "expense": 1550.50,
  "balance": 1449.50
}

/api/monthly/fixed?month=09&year=2020
{
  "fixed": [
    {
      "name": "aluguel",
      "amount": "500"
    },
    {
      "name": "condominio",
      "amount": "100"
    },
    {
      "name": "internet",
      "amount": "125"
    },
    {
      "name": "telefone",
      "amount": "25.50"
    }
  ]
}

/api/monthly/variable?month=09&year=2020
{
  "variable": [
    {
      "name": "mercado",
      "amount": "400"
    },
    {
      "name": "medico",
      "amount": "100"
    }
  ]
}

/api/monthly/extra?month=09&year=2020
{
  "extra": [
    {
      "name": "consertos",
      "amount": "150"
    },
    {
      "name": "emprestimo",
      "amount": "150"
    }
  ]
}