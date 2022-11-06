const TodoData = [
  { id: 1, done: true, text: "Pay all your bills" },
  { id: 2, done: true, text: "Go to ATM and withdraw cash" },
  { id: 3, done: false, text: "Learn new hooks in React.js" },
];

TodoData.sort((a, b) => a.done - b.done);
export default TodoData;
