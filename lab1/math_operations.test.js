// math_operations.test.js

const { add, subtract, multiply, divide } = require('./math_operations');

test('додає два числа', () => {
    expect(add(1, 2)).toBe(3);
});

test('віднімає одне число від іншого', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('перемножує два числа', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('ділить одне число на інше', () => {
    expect(divide(10, 2)).toBe(5);
});
