let currentInput = '';
let currentOperation = null;
let firstOperand = null;

function updateDisplay() {
  const display = document.getElementById('output');
  display.textContent = currentInput || '0';
}

function appendCharacter(character) {
  currentInput += character;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendFunction(func) {
  switch (func) {
    case 'sqrt':
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
      break;
    case 'square':
      currentInput = Math.pow(parseFloat(currentInput), 2).toString();
      break;
    case 'sin':
      currentInput = Math.sin(parseFloat(currentInput)).toString();
      break;
    case 'cos':
      currentInput = Math.cos(parseFloat(currentInput)).toString();
      break;
    case 'tan':
      currentInput = Math.tan(parseFloat(currentInput)).toString();
      break;
    default:
      break;
  }
  updateDisplay();
}

function setOperation(operation) {
  if (currentOperation !== null) {
    calculateResult();
  } else {
    firstOperand = parseFloat(currentInput);
    currentInput = '';
    currentOperation = operation;
  }
}

function clearScreen() {
  currentInput = '';
  currentOperation = null;
  firstOperand = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function calculateResult() {
  if (currentOperation === null || currentInput === '') {
    return;
  }

  const secondOperand = parseFloat(currentInput);
  let result;

  switch (currentOperation) {
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
      if (secondOperand === 0) {
        alert("Cannot divide by zero!");
        clearScreen();
        return;
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  firstOperand = null;
  updateDisplay();
}
