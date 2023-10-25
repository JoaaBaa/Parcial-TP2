import Servicio from '../servicio/sample.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }
    //Cuando uses fileSystem, recordar agregar async/await a la sintaxis.
    obtenerSample = (req,res) => {
        const { id } = req.params
        const sample = this.servicio.obtenerSample(id)
        console.log(sample);
        res.json(sample)
    }
    
    guardarSample = (req,res) => {
        const sample = req.body
        const sampleGuardado = this.servicio.guardarSample(sample)
        res.json(sampleGuardado)
    }
    
    actualizarSample = (req,res) => {
        const { id } = req.params
        const sample = req.body
        const sampleActualizado = this.servicio.actualizarSample(id, sample)
        res.json(sampleActualizado)
    }
    
    borrarSample = (req,res) => {
        const { id } = req.params
        const sampleBorrado = this.servicio.borrarSample(id)
        res.json(sampleBorrado)
    }

}

export default Controlador
