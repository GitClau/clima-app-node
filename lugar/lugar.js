const axios = require('axios'); //esto no es una funcion no hace falta crearla fuera en la libreria config

//     // hay que hacer una preparacion para poder usar la funcionalidad de este modulo en app

// const getLugarLatLng = (dir) => {
//     // como para conextarse a la api de geolocalizacion hay que hacer un peticion get pues copiamos una peticion de axios que use get y que se escribe como "creating an instance"
//     // const instance = axios.create({
//     //     baseURL: 'https://some-domain.com/api/',
//     //     timeout: 1000,
//     //     headers: {'X-Custom-Header': 'foobar'}
//     //   });




//     //hay que hacer una preparación antes de enviar por teclado en la consola la direccion o ciudad

//     const encodedUlr = encodeURI(dir);
//     // console.log(encodedUlr);//si se quiere ver como va codificada la direccion en la url descomentar línea

//     // ahora se puede crear la peticion 

//     // const instance = axios.create({
//     //     baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Almeria',
//     //     headers: { 'x-rapidapi-key': '2bf76e2156msh605689760cb0fcdp14bdc4jsnf89dbfae1b43' }
//     // });

//     // la peticion en si está codificada pero ahora no es dinámica es decir no cambia la localización segñun la entrada por teclado para ello ponemos para url entre apostrofesen vez de comillas simples `url` y cambiamos Almeria por $ { encodeurl}

//     const instance = axios.create({
//         baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
//         headers: { 'x-rapidapi-key': '2bf76e2156msh605689760cb0fcdp14bdc4jsnf89dbfae1b43' }
//     });


//     // ya que la instancia está creada hay que hacerle la petición y que devuelva un resultado o un error si ha fallado 
//     instance.get()
//         .then(resp => {
//             console.log(resp.data.Results[0]);
//             //toda esta información de resp.data.Results se adquiere mirando la peticion 1 a 1 primero se hace con un console.log(resp) 
//             //donde se observa que hay parámetro gigante que se llama data, 
//             //luego se pone .data y se observa que salen muchos sitios 
//             //pero solo se quiere el de la primera posicion y está dentro del parámetro Results con R mayuscula ya que el servidor  de la api lo devuelve así
//             // return {
//             //     data: resp.data.Results[0],
//             //     direccion: data.name,
//             //     lat: data.lat,
//             //     lng: data.lon
//             // };
//         })
//         .catch(err => {
//             const direccion = resp.data.name;
//             console.log('No hay resultados para direccion ${ dir }', err);
//         });


//     // return {
//     //     direccion,
//     //     lat,
//     //     lng
//     // }

// }







// la funcion se puede usar con async y await para hacerla más sencilla

const getLugarLatLng = async(dir) => {
    // como para conextarse a la api de geolocalizacion hay que hacer un peticion get pues copiamos una peticion de axios que use get y que se escribe como "creating an instance"
    // const instance = axios.create({
    //     baseURL: 'https://some-domain.com/api/',
    //     timeout: 1000,
    //     headers: {'X-Custom-Header': 'foobar'}
    //   });




    //hay que hacer una preparación antes de enviar por teclado en la consola la direccion o ciudad

    const encodedUlr = encodeURI(dir);
    // console.log(encodedUlr);//si se quiere ver como va codificada la direccion en la url descomentar línea

    // ahora se puede crear la peticion 

    // const instance = axios.create({
    //     baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Almeria',
    //     headers: { 'x-rapidapi-key': '2bf76e2156msh605689760cb0fcdp14bdc4jsnf89dbfae1b43' }
    // });

    // la peticion en si está codificada pero ahora no es dinámica es decir no cambia la localización segñun la entrada por teclado para ello ponemos para url entre apostrofesen vez de comillas simples `url` y cambiamos Almeria por $ { encodeurl}

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'x-rapidapi-key': '2bf76e2156msh605689760cb0fcdp14bdc4jsnf89dbfae1b43' }
    });


    // ya que la instancia está creada hay que hacerle la petición y que devuelva un resultado o un error si ha fallado 
    const resp = await instance.get();

    if (resp.data.Results === 0) {
        throw new Error('No hay resultados para direccion ${ dir}');
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}




module.exports = {
    getLugarLatLng
}