//importar las dependencias del proyecto para un request
//en modo callback

//tips de dependencias en js
//- comonjs: require
//- module: import

const request = require("request");

//url de conecion a la api rest(api)
const url = `https://pokeapi.co/api/v2/pokemon`;

//transaccion asincrona, conexion api
let r = request(url, { json: true }, (error, respuesta, body) => {
  if (error) {
    console.log(error);
  } else {
    let pokemones = body.results;
    pokemones.forEach((pokemon) => {
      console.log(pokemon.name)
      console.log("-------------------")
    });
  }
});
