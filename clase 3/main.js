const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const renderData = (data) => {
    const {main, name, wind} = data;

    $(`#place`).innerText = `${name}`
    $(`#temp-actual`).innerText = `${main.temp}ºC`
    $(`#temp-minima`).innerText = `${main.temp_min}ºC`
    $(`#temp-maxima`).innerText = `${main.temp_max}ºC`
    $(`#humedad`).innerText = `${main.humidity}%`
    $(`#viento`).innerText = `${wind.speed}m/s`
}

