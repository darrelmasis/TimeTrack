const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 3000
const path = require('path')
const router = require('./router')
const cors = require('cors')

app.use(cors())
// Middleware para analizar el cuerpo d e las solicitudes POST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../client', 'dist')))

app.use('/', router)

server.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`)
})
