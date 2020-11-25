const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')


function calculateTip() {
  const billValue = billInput.value
  const tipValue = tipInput.value
  const tipAmount = billValue * tipValue / 100
  display.innerHTML = tipAmount.toFixed(2)
  return tipAmount
}

function calculateTotal() {
  const billValue = billInput.value
  const tipValue =  calculateTip()
  const billTotal = Number(billInput.value) +
  Number(tipValue)
  total_bill.innerHTML = billTotal
  console.log(billTotal)
  }

billInput.addEventListener('input', calculateTotal)
tipInput.addEventListener('input', calculateTotal)