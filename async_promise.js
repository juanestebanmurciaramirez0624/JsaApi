const needle = require("needle");

const url = "https://dinosaur-facts-api.shultzlab.com/dinosaurs";

needle("get", url, { json: true })
  .then((respuesta) => {
    let dinosaurios = respuesta.body;
    dinosaurios.forEach((dinosaurio) => {
      console.log(dinosaurio.Name);
      console.log("-------------------");
    });
  })
  .catch((error) => {
    console.log(error);
  });
