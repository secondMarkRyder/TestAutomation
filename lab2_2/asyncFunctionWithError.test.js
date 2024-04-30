const { asyncFunctionWithError } = require('./asyncFunctionWithError');

test('asyncFunctionWithError rejects with an error', async () => {
    await expect(asyncFunctionWithError()).rejects.toThrow('Async function failed');
});
