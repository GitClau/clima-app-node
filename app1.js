const lugar = require('./lugar/lugar.js'); //comentar esta línea si solo se quiere probar clima y cambiar 
const clima = require('./clima/clima.js');

// const argv = require('yargs').options({
//     direccion: {
//         alias: '-d',
//         desc: 'direccion de la ciudad a obtener el clima',
//         demand: true
//     }
// })

//importamos directamente el modulo de yargs que hemos creado en config para modular lo máximo posible y darle agilidad.

const argv = require('./config/yargs').argv;

console.log(argv.direccion); //esto es para ver el argumento y la direccion de la ciudad

//argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(console.log);

//ejercicio crear una funcion get info para que de informacion del clima
const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de  ${ coordenadas.direccion } es de ${ temperatura}`;
    } catch (error) {
        return `No se puedo determinar el clima del lugar ${ direccion }`;
    }

    // salida
    // el clima del sitio es de Xxxxx

    //sin clima no hay salida
    // no se pudo determinar el clima de Xxxxx
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);