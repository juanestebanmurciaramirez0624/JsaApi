const axios = require('axios')

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

async function dino(){
    const respuesta = await axios.get(url)
    respuesta.data.forEach(dinosaurio => {
        console.log(dinosaurio.Name)
        console.log("+++++++++++")
} )
}

dino()