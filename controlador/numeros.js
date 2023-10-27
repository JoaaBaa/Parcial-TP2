import Servicio from '../servicio/numeros.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerNumeros = async (req,res) => {
        const numeros = await this.servicio.obtenerNumeros()
        console.log(numeros);
        res.json(numeros)
    }
    
    guardarNumero = async (req,res) => {
        const numero = req.body
        const numeroGuardado = await this.servicio.guardarNumero(numero)
        res.json(numeroGuardado)
    }

    obtenerPromedio = async (req,res) => {
        const promedio = await this.servicio.obtenerPromedio()
        console.log(promedio);
        res.json(promedio)
    }

    obtenerMinMax = async (req,res) => {
        const minMax = await this.servicio.obtenerMinMax()
        console.log(minMax);
        res.json(minMax)
    }

    obtenerCantidad = async (req,res) => {
        const cantidad = await this.servicio.obtenerCantidad()
        console.log(cantidad);
        res.json(cantidad)
    }

}

export default Controlador
