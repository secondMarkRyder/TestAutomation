const { asyncFunctionCallingAnotherAsyncFunction } = require('./asyncFunctionCallingAnotherAsyncFunction');

test('asyncFunctionCallingAnotherAsyncFunction resolves with expected JSON object', async () => {
    const expectedData = {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
    };

    await expect(asyncFunctionCallingAnotherAsyncFunction()).resolves.toEqual(expectedData);
});
