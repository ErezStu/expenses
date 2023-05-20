import Chart from "../Chart/Chart";

import "./ExpensesChart.css";

const ExpensesChart = ({ expenses, filteredMonth }) => {
  const chartDataPoints = [
    { label: "ינואר", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "פברואר", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "מרץ", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "אפריל", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "מאי", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "יוני", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "יולי", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "אוגוסט", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "ספטמבר", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "אוקטובר", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "נובמבר", category: { catLabels: [], catValue: 0 }, value: 0 },
    { label: "דצמבר", category: { catLabels: [], catValue: 0 }, value: 0 },
  ];

  for (const expense of expenses) {
    const expenseFormattingDate = new Date(expense.date);
    const expenseMonth = expenseFormattingDate.getMonth();
    chartDataPoints[expenseMonth].value += expense.price;
    chartDataPoints[expenseMonth].category.catLabels.push(expense.category);
  }
  return <Chart filteredMonth={filteredMonth} dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
