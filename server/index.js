const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '../client', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
})

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`)
})

  