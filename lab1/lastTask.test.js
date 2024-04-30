const { containsWord, convertPhraseToArray } = require('./lastTask');

describe('Tests for containsWord function', () => {
    test.each([
        ['Hello, world!', 'Hello', true],
        ['Hello, world!', 'world', true],
        ['Hello, world!', 'John', false],
    ])('containsWord("%s", "%s") should return %s', (text, word, expected) => {
        expect(containsWord(text, word)).toBe(expected);
    });
});

describe('Tests for convertPhraseToArray function', () => {
    test('convertPhraseToArray should call callback with array of words', () => {
        const callback = jest.fn();
        const phrase = 'Hello, world!';
        const expectedWords = ['Hello,', 'world!'];

        convertPhraseToArray(phrase, callback);

        expect(callback).toHaveBeenCalledWith(expectedWords);
    });
});
