async function asyncFunction() {

    const result = await asyncSubFunction();
    return result * 2;
}

async function asyncSubFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

module.exports = { asyncFunction };