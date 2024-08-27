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
