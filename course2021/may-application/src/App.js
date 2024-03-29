import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 12) },
    { id: "e2", title: "New TV", amount: 2123.12, date: new Date(2021, 3, 13) },
    { id: "e3", title: "🚘 Insurance", amount: 123.12, date: new Date(2021, 4, 14) },
    { id: "e4", title: "New desk (wooden)", amount: 162, date: new Date(2021, 5, 15) },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
