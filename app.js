// app.js

// Select the parent element and the output element
// const calculator = document.querySelector('.calculator');
// const output = document.querySelector('.output');

// // Add event listener to the parent element
// calculator.addEventListener('click', (event) => {
//   const target = event.target;
//   const value = target.value;

//   if (target.tagName === 'INPUT') {
//     if (value === '=') {
//       output.value = eval(output.value);
//     } else if (value === 'AC') {
//       output.value = '';
//     } else if (value === 'DE') {
//       output.value = output.value.slice(0, -1);
//     } else {
//       output.value += value;
//     }
//   }
// });
const calculator = document.querySelector('.calculator')
const output = document.querySelector('.output')
let divide = document.querySelector('divide')

calculator.addEventListener('click', e => {
  let target = e.target;
  let value = target.value;
  if (target.tagName === "INPUT") {
    if (value === "=") {
      output.value = eval(output.value)
    } else if (value === "AC") {
      output.value = ""
    } else if (value === "DE") {
      output.value = output.value.slice(0, -1)
    } else if (value === "÷") {
      output.value += "/";
    } else {
      output.value += value
    }
  }
})
window.addEventListener('load', e => {
  output.value = ''
})