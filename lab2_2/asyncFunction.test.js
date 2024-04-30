const { asyncFunction } = require('./asyncFunction');

test('asyncFunction returns the doubled result of asyncSubFunction', async () => {
    const result = await asyncFunction();
    expect(result).toBe(10); // Перевіряємо, що результат є числом 10 (результатом помноження 5 на 2)
});