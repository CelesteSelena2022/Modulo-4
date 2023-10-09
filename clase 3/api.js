
const getData = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((posicion) => {
    
            let lon = posicion.coords.longitude;
            let lat = posicion.coords.latitude;
    
        const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        //const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=${apiKey}`;
    
        fetch(`${URL_BASE}`)
            .then((res) => res.json())
            .then((data) => renderData(data));
        });
    }
}

const apiKey = `e49c1a85c78b9a188a8e7e2a239f1469`;

window.onload = getData();

