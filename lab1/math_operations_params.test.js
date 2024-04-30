const { add, subtract, multiply, divide } = require('./math_operations');

test.each([
  [1, 2, 3],
  [5, 5, 10],
  [10, -3, 7]
])('додає два числа коректно', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});

test.each([
  [5, 2, 3],
  [10, 5, 5],
  [7, 3, 4]
])('віднімає одне число від іншого коректно', (a, b, expected) => {
  expect(subtract(a, b)).toBe(expected);
});

test.each([
  [3, 4, 12],
  [2, -5, -10],
  [-3, -2, 6]
])('перемножує два числа коректно', (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
});

test.each([
  [10, 2, 5],
  [15, 3, 5],
  [8, -2, -4]
])('ділить одне число на інше коректно', (a, b, expected) => {
  expect(divide(a, b)).toBe(expected);
});
