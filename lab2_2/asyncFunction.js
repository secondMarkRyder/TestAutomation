async function asyncFunction() {
    // Викликаємо іншу асинхронну функцію
    const result = await asyncSubFunction();
    return result * 2; // Повертаємо результат помножений на 2
}

async function asyncSubFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5); // Повертаємо число 5 через певний час
        }, 1000);
    });
}

module.exports = { asyncFunction };