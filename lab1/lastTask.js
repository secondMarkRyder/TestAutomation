// containsObject - Перевіряє, чи містить масив вказаний об’єкт
function containsObject(array, object) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(object));
}

// containsWord - Перевіряє, чи містить текстовий фрагмент вказане слово
function containsWord(text, word) {
    return text.split(/\s+/).includes(word);
}

// getFieldFromObject - Перевіряє, чи містить об’єкт який повертає функція вказане поле
function getFieldFromObject(object, field) {
    return object.hasOwnProperty(field) ? object[field] : undefined;
}

// applyCallbackToElements - Приймає масив та зворотній виклик, який виконується над елементами масиву
function applyCallbackToElements(array, callback) {
    array.forEach(item => callback(item));
}

// convertPhraseToArray - Приймає текстовий рядок із фразою та зворотній виклик
// Функція перетворює фразу на масив слів та передає її у зворотній виклик
function convertPhraseToArray(phrase, callback) {
    const words = phrase.split(/\s+/);
    callback(words);
}

// Приклад методу introduce для об’єкта з полями ім’я та прізвище
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
