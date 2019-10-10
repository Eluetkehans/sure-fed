const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()

const API_ENDPOINT = 'https://fed-challenge.sure.now.sh/api/v1/quotes'

app.use('/', express.static(__dirname + '/../public'))
 
app.use(bodyParser.json())

app.post('/quote', async (req, res) => {
  const proxyRes = await axios.post(API_ENDPOINT, req.body)
  res.send(proxyRes.data)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("server up")
})