// //Store data in LS
// //1st we setItem('nameofKey', 'value') LS will transform everything to a string

// localStorage.setItem('name', 'mario');
// localStorage.setItem('age', 5);

// // Get/retrieve data from LS
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

// //Update Data

// localStorage.setItem('name', 'luigi');
// localStorage.age = 40; // we can update by using dot.

// name = localStorage.getItem('name');
// console.log(name);

// // Delete data from LS

// localStorage.removeItem('name');
// localStorage.clear(); // we remove everything

// To JSON format
const todos = [
  { text: 'play mariokart', author: 'shaiu' },
  { text: 'buy some milk', author: 'matias' },
  { text: 'kill someone :)', author: 'nacho' },
];
// const todoso = JSON.stringify(todos);

localStorage.setItem('todos', JSON.stringify(todos));

//To array (no json)

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));
