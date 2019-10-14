const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=df1ab48a0a6c277b5e0223b5d8b03876&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}