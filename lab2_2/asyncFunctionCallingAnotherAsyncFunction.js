async function fetchDataFromAPI() {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                userId: 1,
                id: 1,
                title: 'delectus aut autem',
                completed: false
            });
        }, 1000);
    });
}

async function asyncFunctionCallingAnotherAsyncFunction() {
    try {

        const response = await fetchDataFromAPI();
        return response;
    } catch (error) {
        console.error('Error while fetching data:', error);
        throw error;
    }
}

module.exports = { asyncFunctionCallingAnotherAsyncFunction };
