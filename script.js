// function sumar(){
//     let suma=0;
//     let contador=0;
//     let numer1=Number(document.getElementById(`pal1`).value);
//     let numer2=Number(document.getElementById(`pal2`).value);
    
//     let resultado= numer1+numer2;
//        document.getElementById('resultado').textContent = 'la suma es: ' + resultado;
//   }
// function multiplicar(){
//     let suma=0;
//     let contador=0;
//     let numer1=document.getElementById(`pal1`).value;
//     let numer2=document.getElementById(`pal2`).value;
    
//     let resultadomul= numer1*numer2;
//        document.getElementById('resultado').textContent = 'la multiplicacion es: ' + resultadomul;
//   }
// function resta(){
//     let suma=0;
//     let contador=0;
//     let numer1=Number(document.getElementById(`pal1`).value);
//     let numer2=Number(document.getElementById(`pal2`).value);
    
//     let resultado= numer1-numer2;
//        document.getElementById('resultado').textContent = 'la suma es: ' + resultado;
//   }
// function division(){
//     let suma=0;
//     let contador=0;
//     let numer1=document.getElementById(`pal1`).value;
//     let numer2=document.getElementById(`pal2`).value;
    
//     let resultadomul= numer1/numer2;
//        document.getElementById('resultado').textContent = 'la multiplicacion es: ' + resultadomul;
//   }
let displayValue = '0';
let firstOperand = null;
let operator = null;
let awaitingNextNumber = false;

const display = document.getElementById('display');

function clearDisplay() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  awaitingNextNumber = false;
  updateDisplay();
}

function appendNumber(number) {
  if (awaitingNextNumber) {
    displayValue = number;
    awaitingNextNumber = false;
  } else {
    displayValue = displayValue === '0' ? number : displayValue + number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null && !awaitingNextNumber) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  operator = op;
  awaitingNextNumber = true;
}

function calculate() {
  const secondOperand = parseFloat(displayValue);
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  displayValue = result.toString();
  operator = null;
  awaitingNextNumber = true;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = displayValue;
}
