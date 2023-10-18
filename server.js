import express from 'express'
import RouterLibros from'./router/libros.js'

const app = express()
app.use(express.json())                             // JSON: { "nombre":"memoria","precio":1234,"stock":33 }
app.use(express.urlencoded({extended: true}))       // URL-ENCODED: nombre=memoria&precio=1234&stock=33

app.use(express.static('public'))

// -----------------------------------------------
//         API RESTful : Libros
// -----------------------------------------------
app.use('/libros', new RouterLibros().start())

// -----------------------------------------------
//        LISTEN DEL SERVIDOR EXPRESS
// -----------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
