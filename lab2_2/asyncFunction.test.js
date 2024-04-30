const { asyncFunction } = require('./asyncFunction');

test('asyncFunction returns the doubled result of asyncSubFunction', async () => {
    const result = await asyncFunction();
    expect(result).toBe(10);
});