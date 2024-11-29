// Функция возведения в степень
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function calculatePow() {
    const x = parseInt(document.getElementById('powX').value);
    const n = parseInt(document.getElementById('powN').value);
    if (n < 0) {
        document.getElementById('powResult').textContent = "Степень должна быть натуральным числом.";
    } else {
        document.getElementById('powResult').textContent = `Результат: ${pow(x, n)}`;
    }  
}

// Функция для нахождения НОД
function gcd(a, b) {
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

function calculateGCD() {
    const a = parseInt(document.getElementById('gcdA').value);
    const b = parseInt(document.getElementById('gcdB').value);
    document.getElementById('gcdResult').textContent = `НОД: ${gcd(a, b)}`;
}

// Функция для нахождения наименьшей цифры
function minDigit(x) {
    let min = 9;
    while (x > 0) {
        let digit = x % 10;
        if (digit < min) {
            min = digit;
        }
        x = Math.floor(x / 10);
    }
    return min;
}

function findMinDigit() {
    const x = parseInt(document.getElementById('minDigitX').value);
    document.getElementById('minDigitResult').textContent = `Наименьшая цифра: ${minDigit(x)}`;
}

// Функция для склонения слова "запись"
function pluralizeRecords() {
    const n = parseInt(document.getElementById('recordsN').value);
    let recordWord;
    let recordWord2;
    
    if (n % 10 === 1 && n % 100 !== 11) {
        recordWord = "была найдена";
        recordWord2 = "запись";
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {
        recordWord = "были найдены";
        recordWord2 = "записи";
    } else {
        recordWord = "были найдены";
        recordWord2 = "записей";
    }
    
    document.getElementById('pluralResult').textContent = `В результате выполнения запроса ${recordWord} ${n} ${recordWord2}.`;
}

// Функция для нахождения числа Фибоначчи
function fibb(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function findFibonacci() {
    const n = parseInt(document.getElementById('fibN').value);
    if (n > 1000) {
        document.getElementById('fibonacciResult').textContent = "Число должно быть меньше или равно 1000.";
    } else {
        document.getElementById('fibonacciResult').textContent = `Число Фибоначчи: ${fibb(n)}`;
    }
}
