const axios = require('axios')
const url = 'https://api.publicapis.org/entries'

axios.get(url)
  .then((response) => {
    const data = response.data.entries;
    data.forEach(api => {
        console.log(api.Link)
        console.log('------------------------------------')
    })
  })
  .catch((error) => console.log(error));


  
