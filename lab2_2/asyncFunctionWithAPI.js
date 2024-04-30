async function asyncFunctionWithAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error while fetching data:', error);
        throw error;
    }
}

module.exports = { asyncFunctionWithAPI };
