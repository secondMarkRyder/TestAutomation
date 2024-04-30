// asyncFunctionWithError.js
async function asyncFunctionWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Async function failed')); // Відхиляємо проміс з помилкою
        }, 1000);
    });
}

module.exports = { asyncFunctionWithError };
