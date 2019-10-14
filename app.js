const lugar = require('./lugar/lugar.js');




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


lugar.getLugarLatLng(argv.direccion)
    .then(console.log);