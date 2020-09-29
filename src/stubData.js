export const generalPeriods = {
  periods: ["2019", "2020", "2021"]
}

export const general = (year) => {
  if (year === "2019") {
    return {
      general: {
        incomes: [
          {
            name: "Jan",
            amount: 3000
          },
          {
            name: "Fev",
            amount: 3200
          },
          {
            name: "Mar",
            amount: 3400
          },
          {
            name: "Abr",
            amount: 3500
          }
        ],
        expenses: [
          {
            name: "Jan",
            amount: 1550
          },
          {
            name: "Fev",
            amount: 1200
          },
          {
            name: "Mar",
            amount: 1000
          },
          {
            name: "Abr",
            amount: 1000
          }
        ],
        fixed: [
          {
            name: "Jan",
            amount: 1000
          },
          {
            name: "Fev",
            amount: 1000
          },
          {
            name: "Mar",
            amount: 1000
          },
          {
            name: "Abr",
            amount: 1000
          }
        ],
        variable: [
          {
            name: "Jan",
            amount: 300
          },
          {
            name: "Fev",
            amount: 500
          },
          {
            name: "Mar",
            amount: 200
          },
          {
            name: "Abr",
            amount: 250
          }
        ],
        extra: [
          {
            name: "Jan",
            amount: 100
          },
          {
            name: "Fev",
            amount: 400
          },
          {
            name: "Mar",
            amount: 120
          },
          {
            name: "Abr",
            amount: 30
          }
        ]
      }
    }
  } else if (year === "2020") {
    return {
      general: {
        incomes: [
          {
            name: "Jan",
            amount: 5000
          },
          {
            name: "Fev",
            amount: 5200
          },
          {
            name: "Mar",
            amount: 5400
          },
          {
            name: "Abr",
            amount: 5000
          },
          {
            name: "Mai",
            amount: 5500
          },
          {
            name: "Jun",
            amount: 5500
          },
          {
            name: "Jul",
            amount: 5500
          },
          {
            name: "Ago",
            amount: 5500
          },
          {
            name: "Set",
            amount: 5500
          },
          {
            name: "Out",
            amount: 5500
          },
          {
            name: "Nov",
            amount: 5500
          },
          {
            name: "Dez",
            amount: 5500
          }
        ],
        expenses: [
          {
            name: "Jan",
            amount: 2340
          },
          {
            name: "Fev",
            amount: 2560
          },
          {
            name: "Mar",
            amount: 3420
          },
          {
            name: "Abr",
            amount: 1000
          }
        ],
        fixed: [
          {
            name: "Jan",
            amount: 1200
          },
          {
            name: "Fev",
            amount: 1200
          },
          {
            name: "Mar",
            amount: 1200
          },
          {
            name: "Abr",
            amount: 1200
          },
          {
            name: "Mai",
            amount: 1200
          },
          {
            name: "Jun",
            amount: 1200
          },
          {
            name: "Jul",
            amount: 1200
          },
          {
            name: "Ago",
            amount: 1200
          },
          {
            name: "Set",
            amount: 1200
          },
          {
            name: "Out",
            amount: 1200
          },
          {
            name: "Nov",
            amount: 1200
          },
          {
            name: "Dez",
            amount: 1200
          }
        ],
        variable: [
          {
            name: "Jan",
            amount: 500
          },
          {
            name: "Fev",
            amount: 800
          },
          {
            name: "Mar",
            amount: 100
          },
          {
            name: "Abr",
            amount: 50
          }
        ],
        extra: [
          {
            name: "Jan",
            amount: 250
          },
          {
            name: "Fev",
            amount: 700
          },
          {
            name: "Mar",
            amount: 700
          },
          {
            name: "Abr",
            amount: 40
          }
        ]
      }
    }
  }
  return {
    general: {
      incomes: [],
      expenses: [],
      fixed: [],
      variable: [],
      extra: []
    }
  }
}

export const monthlyPeriods = {
  periods: ["9/2020", "10/2020", "11/2020"]
}

export const monthly = (year) => {
  if (year === "9/2020") {
    return {
      monthly: {
        income: 4000,
        expense: 2300,
        balance: 1700,
        fixed: [
          {
            name: "Aluguel",
            amount: 1000
          },
          {
            name: "Internet",
            amount: 100
          },
          {
            name: "Telefone Pri",
            amount: 50
          },
          {
            name: "Telefone Jess",
            amount: 60
          }
        ],
        variable: [
          {
            name: "Alimentação",
            amount: 300
          },
          {
            name: "Farmácia",
            amount: 100
          }
        ],
        extra: [
          {
            name: "Empréstimo",
            amount: 200
          },
          {
            name: "Gymbal",
            amount: 100
          },
          {
            name: "Mãe",
            amount: 300
          }
        ]
      }
    }
  } else if (year === "10/2020") {
    return {
      monthly: {
        income: 4000,
        expense: 1800,
        balance: 2200,
        fixed: [
          {
            name: "Aluguel",
            amount: 1000
          },
          {
            name: "Internet",
            amount: 100
          },
          {
            name: "Telefone Pri",
            amount: 50
          },
          {
            name: "Telefone Jess",
            amount: 60
          }
        ],
        variable: [
          {
            name: "Alimentação",
            amount: 300
          },
          {
            name: "Farmácia",
            amount: 30
          }
        ],
        extra: [
          {
            name: "Gymbal",
            amount: 100
          },
          {
            name: "Mãe",
            amount: 300
          }
        ]
      }
    }
  }
  return {
    monthly: {
      income: 0,
      expense: 0,
      balance: 0,
      fixed: [],
      variable: [],
      extra: []
    }
  }
}