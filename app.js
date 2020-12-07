const clima = require('./controlador/clima');
const colors = require('colors');
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        descripcion: ' Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad

/* Error devuelve promesa try caths solucion
const temp = clima.getClima(ciudad);
console.log(`El clima de ${ciudad} es de ${temp}`);
*/

clima.getClima(ciudad)
    .then(respuesta => {
        console.log(`El clima de ${ciudad} es de ${(respuesta-32)*5/9}`.green);
    }).catch(err => {
        error = "Las coordenadas ingresadas no tienen un resultado posible, intente con una diferente"
        console.log(err.red);
    });