const { callFunction1 } = require('./functions');

// Підміна функції function2 макетом (mock)
jest.mock('./functions', () => ({
    __esModule: true,
    callFunction1: jest.fn().mockImplementation(() => {
        // Макетування функції function2
        return require('./functions').function2({ name: 'John', lastname: 'Doe' });
    }),
    // Макетування самої функції function2
    function2: jest.fn()
}));

// Опис тестів
describe('Test callFunction1 function', () => {
    // Тест для перевірки виклику функції function2 з відповідними аргументами
    it('should call function2 with name=John and lastname=Doe', () => {
        // Виклик функції callFunction1
        callFunction1();

        // Перевірка, що функція function2 була викликана з відповідними аргументами
        expect(require('./functions').function2).toHaveBeenCalledWith({ name: 'John', lastname: 'Doe' });
    });
});
