const { asyncFunction } = require('./async');

test('asyncFunction resolves with "hello world"', async () => {
    await expect(asyncFunction()).resolves.toBe("hello world");
});
