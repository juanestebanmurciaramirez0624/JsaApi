
const request = require("request");

const url = `https://official-joke-api.appspot.com/random_joke`;

let r = request(url, { json: true }, (error, respuesta, body) => {
  if (error) {
    console.log(error);
  } else {
    let pokemones = body.results;
    pokemones.forEach((pokemon) => {
      console.log(pokemon.setup)
      console.log("------------")
    });
  }
});
