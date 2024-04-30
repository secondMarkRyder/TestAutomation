async function asyncFunctionWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Async function failed'));
        }, 1000);
    });
}

module.exports = { asyncFunctionWithError };
