const { sumArray, filterPositiveNumbers, filterNegativeNumbers } = require('./array_utils');

describe('sumArray', () => {
    let testArray;

    beforeAll(() => {
		
        testArray = [1, 2, 3, 4, 5];
    });

    test('should return sum of array elements', () => {
        expect(sumArray(testArray)).toBe(15);
    });
});

describe('filterPositiveNumbers', () => {
    let testArray;

    beforeAll(() => {

        testArray = [-1, 2, -3, 4, -5];
    });

    test('should return array with positive numbers only', () => {
        expect(filterPositiveNumbers(testArray)).toEqual([2, 4]);
    });
});

describe('filterNegativeNumbers', () => {
    let testArray;

    beforeAll(() => {

        testArray = [-1, 2, -3, 4, -5];
    });

    test('should return array with negative numbers only', () => {
        expect(filterNegativeNumbers(testArray)).toEqual([-1, -3, -5]);
    });
});
