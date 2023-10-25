import express from 'express'
import Controlador from '../controlador/sample.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/:id?', this.controlador.obtenerSample)
        this.router.post('/', this.controlador.guardarSample)
        this.router.put('/:id', this.controlador.actualizarSample)
        this.router.delete('/:id', this.controlador.borrarSample)

        return this.router
    }
}

export default Router