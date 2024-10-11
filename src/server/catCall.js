//this is where api will go
const axios = require('axios')

const getCatCall = async () => {
    const res = await axios.get('https://catfact.ninja/fact')
    console.log(`res: ${JSON.stringify(res.data)}`)
    return res
}

module.exports = getCatCall()