function callFunction1() {
    const name = 'John';
    const lastname = 'Doe';
    function2({ name, lastname });
}

// Функція, яку ми будемо викликати з функції callFunction1
function function2({ name, lastname }) {
    console.log(`Hello, ${name} ${lastname}!`);
}

// Експорт функції callFunction1 для використання в інших модулях
module.exports.function2 = ({ name, lastname }) => {
    console.log(`Hello, ${name} ${lastname}`);
};