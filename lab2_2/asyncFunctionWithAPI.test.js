// asyncFunctionWithAPI.test.js
const { asyncFunctionWithAPI } = require('./asyncFunctionWithAPI');

test('asyncFunctionWithAPI resolves with expected JSON object', async () => {
    const expectedData = {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
    };

    await expect(asyncFunctionWithAPI()).resolves.toEqual(expectedData);
});
