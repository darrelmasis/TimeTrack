const axios = require('axios')

const fetch = async uri => {
  try {
    const response = await axios.get(uri)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const post = async (uri, data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await axios.post(uri, data, config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = { fetch, post }

/* Ejemplo de uso para hacer una solicitud GET
fetchData('https://ejemplo.com/api/data')
   .then(data => console.log(data))
   .catch(error => console.error(error));

 Ejemplo de uso para hacer una solicitud POST
 const postDataExample = { key: 'value' };
 postData('https://ejemplo.com/api/data', postDataExample)
   .then(data => console.log(data))
   .catch(error => console.error(error));*/
