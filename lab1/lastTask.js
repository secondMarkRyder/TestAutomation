function containsObject(array, object) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(object));
}

function containsWord(text, word) {
    return text.split(/\s+/).includes(word);
}

function getFieldFromObject(object, field) {
    return object.hasOwnProperty(field) ? object[field] : undefined;
}

function applyCallbackToElements(array, callback) {
    array.forEach(item => callback(item));
}

function convertPhraseToArray(phrase, callback) {
    const words = phrase.split(/\s+/);
    callback(words);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    introduce: function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
};

module.exports = {
    containsObject,
    containsWord,
    getFieldFromObject,
    applyCallbackToElements,
    convertPhraseToArray,
    person
};
