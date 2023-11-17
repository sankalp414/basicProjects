const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator button');
// calculator
let currentInput = '';
let currentOperator = '';
let currentResult = null;
//for each function
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.hasAttribute('data-number')) {
            currentInput += value;
            display.value = currentInput;

        } else if (button.hasAttribute('data-operator')) {
            if (value === '=') {
                if (currentOperator && currentInput !== '') {
                    currentResult = operate(currentResult, parseFloat(currentInput), currentOperator);
                    display.value = currentResult;
                    currentInput = '';
                    currentOperator = '';
                }
            } else if (value === 'C') {
                currentInput = '';
                currentOperator = '';
                currentResult = null;
                display.value = '';
            } else {
                if (currentOperator && currentInput !== '') {
                    currentResult = operate(currentResult, parseFloat(currentInput), currentOperator);
                    display.value = currentResult;
                    currentInput = '';
                }
                currentOperator = value;
            }
        }
    });
});

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
