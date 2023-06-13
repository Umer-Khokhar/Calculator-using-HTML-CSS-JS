const calculator = document.querySelector('.calculator')
const output = document.querySelector('.output')

calculator.addEventListener('click', (e) => {
    let allTarget = e.target
    let value = allTarget.value

    if (allTarget.tagName === "INPUT") {
      if (value === "AC") {
        output.value = ""
      } else if (value === "DE") {
        output.value = output.value.slice(0, -1)
      } else if (value === "=") {
        output.value = eval(output.value)
      } else if (value === "÷") {
        output.value += '/'
      } else {
        output.value += value
      }
    }
})

window.addEventListener('load', e => {
  output.value = ""
})