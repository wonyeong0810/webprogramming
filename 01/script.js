const maxLength = 16; // Set a maximum length for the display

function appendDigit(digit) {
    const result = document.getElementById('result');
    if (result.value === '0') {
        result.value = digit;
    } else {
        if (result.value.length < maxLength) { // Limit input length
            result.value += digit;
        }
    }
    updateRadixDisplays(result.value);
}

function appendOperator(operator) {
    const result = document.getElementById('result');
    const lastChar = result.value[result.value.length - 1];
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
        result.value = result.value.slice(0, -1) + operator;
    } else if (result.value.length < maxLength) { // Limit input length
        result.value += operator;
    }
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '0';
    updateRadixDisplays('0');
}

function deleteDigit() {
    const result = document.getElementById('result');
    if (result.value.length > 1) {
        result.value = result.value.slice(0, -1);
    } else {
        result.value = '0';
    }
    updateRadixDisplays(result.value);
}

function toggleSign() {
    const result = document.getElementById('result');
    if (result.value[0] === '-') {
        result.value = result.value.slice(1);
    } else {
        if (result.value.length < maxLength) { // Limit input length
            result.value = '-' + result.value;
        }
    }
    updateRadixDisplays(result.value);
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
        updateRadixDisplays(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function updateRadixDisplays(value) {
    const decValue = parseFloat(value);
    document.getElementById('hex').textContent = decValue.toString(16).toUpperCase();
    document.getElementById('dec').textContent = decValue.toString(10);
    document.getElementById('oct').textContent = decValue.toString(8);
    document.getElementById('bin').textContent = decValue.toString(2);
}


document.addEventListener('keydown', function(event) {
    handleKeyPress(event);
});

function handleKeyPress(event) {
    
    if (event.key === 'c') {
        clearResult();
    }
    else if (event.key === 'Backspace') {
        deleteDigit();
    }
    else if (event.key === 'Enter') {
        calculateResult();
    }
    else if (event.key === '+') {
        appendOperator('+')
    }
    else if (event.key === '-') {
        appendOperator('-')
    }
    else if (event.key === '/') {
        appendOperator('/')
    }
    else if (event.key === '*') {
        appendOperator('*')
    }
    else if (event.key === '1') {
        appendDigit('1')
    }
    else if (event.key === '2') {
        appendDigit('2')
    }
    else if (event.key === '3') {
        appendDigit('3')
    }
    else if (event.key === '4') {
        appendDigit('4')
    }
    else if (event.key === '5') {
        appendDigit('5')
    }
    else if (event.key === '6') {
        appendDigit('6')
    }
    else if (event.key === '7') {
        appendDigit('7')
    }
    else if (event.key === '8') {
        appendDigit('8')
    }
    else if (event.key === '9') {
        appendDigit('9')
    }
    else if (event.key === '0') {
        appendDigit('0')
    }
    else if (event.key === '.') {
        appendDigit('.')
    }
    else if (event.key === '\\') {
        toggleSign()
    }
}

