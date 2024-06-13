'use strict'


// Создайте функцию fetchAndProcessData, которая загружает данные с сервера с помощью async/await. 
// Если запрос завершается успешно, функция должна вернуть данные. Если происходит ошибка, функция 
// должна обработать её и вернуть сообщение об ошибке.



async function fetchAndProcessData () {
    try {
        const response = await axios.get("http://localhost:8080/bookings/all-bookings");
        return response.data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}