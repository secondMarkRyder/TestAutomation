// Функція додавання
function add(a, b) {
    return a + b;
}

// Функція віднімання
function subtract(a, b) {
    return a - b;
}

// Функція множення
function multiply(a, b) {
    return a * b;
}

// Функція ділення
function divide(a, b) {
    if (b === 0) {
        throw new Error("Ділення на нуль!");
    }
    return a / b;
}

// Експортуємо функції для використання в тестах
module.exports = { add, subtract, multiply, divide };