import Servicio from '../servicio/sample.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }
    //Cuando uses fileSystem, recordar agregar async/await a la sintaxis.
    obtenerSample = async (req,res) => {
        const { id } = req.params
        const sample = await this.servicio.obtenerSample(id)
        console.log(sample);
        res.json(sample)
    }
    
    guardarSample = async (req,res) => {
        const sample = req.body
        const sampleGuardado = await this.servicio.guardarSample(sample)
        res.json(sampleGuardado)
    }
    
    actualizarSample = async (req,res) => {
        const { id } = req.params
        const sample = req.body
        const sampleActualizado = await this.servicio.actualizarSample(id, sample)
        res.json(sampleActualizado)
    }
    
    borrarSample = async (req,res) => {
        const { id } = req.params
        const sampleBorrado = await this.servicio.borrarSample(id)
        res.json(sampleBorrado)
    }

}

export default Controlador
