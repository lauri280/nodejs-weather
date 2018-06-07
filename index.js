const request = require('request');
const argv = require('yargs').argv;

let apiKey = '5d41f52ba540f49a129882f4d7995695';
let city = argv.c || 'Tartu';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url, function(err, response, body) {
    if (err) {
        console.log('error: ', error);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});