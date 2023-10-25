import express from 'express'
import RouterSample from'./router/sample.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

// -----------------------------------------------
//         API RESTful : Libros
// -----------------------------------------------
app.use('/api/sample', new RouterSample().start())

// -----------------------------------------------
//        LISTEN DEL SERVIDOR EXPRESS
// -----------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
