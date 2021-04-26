export const getCards = () => {
    return fetch('http://localhost:8080/tarot').then(response => {
        return response.json();
    }).then(response => {
        return response;
    })
}