export function mapMonthlyData(data) {
  console.log(data);
  if (data.message === "Not exist for the period informed") {
    return data;
  }

  return {
    income: data.income, 
    expenses: data.expenses, 
    balance: data.balance,
    fixed: data.fixed, 
    variable: data.variable, 
    extra: data.extra,
    fixedByCategory: data["fixed-by-category"].map((item) => mapTitleToName(item)),
    variableByCategory: data["variable-by-category"].map((item) => mapTitleToName(item)),
    extraByCategory: data["extra-by-category"].map((item) => mapTitleToName(item))
  };
}

function mapTitleToName(item) {
  return { name: item.title, amount: item.amount }
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}