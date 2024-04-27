const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');


const token = '7157825632:AAFjqXsQoiapAN9t9ebVPBJJM7FjY39bAMo';
const weatherApiKey = '7ffe7bad98d9232fc89363660afd54f6';


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/weather (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const city = match[1];
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
        const weatherData = response.data;
        const description = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;
        
        bot.sendMessage(chatId, `Погода в ${city}: ${description}, Температура: ${temperature} °C`);
    } catch (error) {
        bot.sendMessage(chatId, 'Не удалось найти погодные данные по этому городу. Попробуйте в следующий раз.');
    }
    
});
bot.on('text', async msg => {

    try {

        if(msg.text == '/start') {

            await bot.sendMessage(msg.chat.id, `Вы запустили бота! Чтобы им воспользоваться, используйте команду /weather и за ним впишите название города.`);

        }

    }
    catch(error) {

        console.log(error);

    }
})
// })
// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');


// const token = '7157825632:AAFjqXsQoiapAN9t9ebVPBJJM7FjY39bAMo';
// const weatherApiKey = '7ffe7bad98d9232fc89363660afd54f6';


// const bot = new TelegramBot(token, {polling: true});

// async function getWeather(chatId, city) {
//         try {
//             const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
//             return response.data;
    
            
//         } catch (error) {
//             console.error('Ошибка получения погоды:', error);
//             throw error;
//         }
//     }
//     async function sendWeatherMessage(chatId, city) {
//         try {
//             const weatherData = await getWeatherByCity(city);
//             const description = weatherData.weather[0].description;
//             const temperature = weatherData.main.temp;
//             const message = (`Погода в ${city}: ${description}, Температура: ${temperature} °C`);
//             return message;
//         } catch (error) {
//             console.error( 'Ошибка отправки сообщения о погоде:', error);
//             throw error;
//         }
//     }
//     bot.on('text', async msg => {
//         const chatId = msg.chat.id;
//         const city = msg.text.trim(); // Получаем текст сообщения и удаляем лишние пробелы
    
//         try {
//             const weatherMessage = await sendWeatherMessage(chatId, city);
//             await bot.sendMessage(chatId, weatherMessage);
//         } catch (error) {
//             await bot.sendMessage(chatId, 'Не удалось получить погодные данные по этому городу. Попробуйте в следующий раз.');
//         }
//     });

// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');

// // Функция для получения погоды по городу
// async function getWeatherByCity(city) {
//     try {
//         const weatherApiKey = '7ffe7bad98d9232fc89363660afd54f6'; // Ваш API ключ OpenWeatherMap
//         const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
//         return response.data;

        
//     } catch (error) {
//         console.error('Ошибка получения погоды:', error);
//         throw error;
//     }
// }


// // Функция для отправки сообщения о погоде
// async function sendWeatherMessage( city) {
//     try {
//         const weatherData = await getWeatherByCity(chatId, city);
//         const description = weatherData.weather[0].description;
//         const temperature = weatherData.main.temp;
//         bot.sendMessage = `Погода в ${city}: ${description}, Температура: ${temperature} °C`;
//         return message;
//     } catch (error) {
//         console.error('Ошибка отправки сообщения о погоде:', error);
//         throw error;
//     }
// }

// const token = '7157825632:AAFjqXsQoiapAN9t9ebVPBJJM7FjY39bAMo'; 

// const bot = new TelegramBot(token, { polling: true });


// // bot.on('text', async msg => {
// //     const chatId = msg.chat.id;
// //     const city = msg.text.trim();

// //     try {
// //         if(msg.text == '/start') {
// //             await bot.sendMessage(msg.chat.id, `Вы запустили бота! Чтобы им воспользоваться, напишите название города`);
// //         }
// //         const weatherMessage = await sendWeatherMessage(chatId, city);
// //         await bot.sendMessage(chatId, weatherMessage);
// //     } catch (error) {
// //         await bot.sendMessage(chatId, 'Ошибка');
// //     }
// // });
// // bot.on('text', async msg => {

//     try {

//         if(msg.text == '/start') {

//             await bot.sendMessage(msg.chat.id, `Вы запустили бота! Чтобы им воспользоваться, напишите название города`);
//             const weatherMessage = await sendWeatherMessage(chatId, city);
//             await bot.sendMessage(chatId, weatherMessage);
//         }

//     }
//     catch(error) {

//         console.log(error);

//     }

// })

// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');

// async function getWeatherByCity(city) {
//     try {
//         const weatherApiKey = '7ffe7bad98d9232fc89363660afd54f6';
//         const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
//         return response.data;
//     } catch (error) {
//         console.error('Ошибка получения погоды:', error);
//         throw error;
//     }
// }

// async function sendWeatherMessage(chatId, city) {
//     try {
//         const weatherData = await getWeatherByCity(city);
//         const description = weatherData.weather[0].description;
//         const temperature = weatherData.main.temp;
//         const message = `Погода в ${city}: ${description}, Температура: ${temperature} °C`;
//         return message;
//     } catch (error) {
//         console.error('Ошибка отправки сообщения о погоде:', error);
//         throw error;
//     }
// }

// const token = '7157825632:AAFjqXsQoiapAN9t9ebVPBJJM7FjY39bAMo';

// const bot = new TelegramBot(token, { polling: true });

// bot.on('text', async msg => {
//     const chatId = msg.chat.id;
//     const city = msg.text.trim();

//     try {
//         const weatherMessage = await sendWeatherMessage(chatId, city);
//         await bot.sendMessage(chatId, weatherMessage);
//     } catch (error) {
//         await bot.sendMessage(chatId, 'Не удалось получить погодные данные по этому городу. Попробуйте в следующий раз.');
//     }
// }