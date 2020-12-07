const axios = require('axios');

const apiKey = '9117ebe91e0a146b832100ec28385342'

const getClima = async(ciudad) => {
    try {
        const ciudadURI = encodeURI(ciudad)
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`)
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apiKey}`)
        return respuesta.data.main.temp;
    } catch (error) {
        erro = "Las ciudad ingresada no coicide, porfavor intente una diferente"
        console.log(erro.red);
    }

}

module.exports = {
    getClima
};