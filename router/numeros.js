import express from 'express'
import Controlador from '../controlador/numeros.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        //para la carga de números
        this.router.post('/entrada', this.controlador.guardarNumero)
        this.router.get('/entrada', this.controlador.obtenerNumeros)
        this.router.get('/promedio', this.controlador.obtenerPromedio)
        this.router.get('/minmax', this.controlador.obtenerMinMax)
        this.router.get('/cantidad', this.controlador.obtenerCantidad)

        return this.router
    }
}

export default Router