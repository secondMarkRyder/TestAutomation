function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

function filterPositiveNumbers(array) {
    return array.filter(num => num > 0);
}

function filterNegativeNumbers(array) {
    return array.filter(num => num < 0);
}

module.exports = { sumArray, filterPositiveNumbers, filterNegativeNumbers };