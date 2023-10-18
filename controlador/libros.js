import Servicio from '../servicio/libros.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerLibros = (req,res) => {
        const { id } = req.params
        const libro = this.servicio.obtenerLibros(id)
        res.json(libro)
    }
    
    guardarLibro = (req,res) => {
        const libro = req.body
        const libroGuardado = this.servicio.guardarLibro(libro)
        res.json(libroGuardado)
    }
    
    actualizarLibro = (req,res) => {
        const { id } = req.params
        const libro = req.body
        const libroActualizado = this.servicio.actualizarLibro(id, libro)
        res.json(libroActualizado)
    }
    
    borrarLibro = (req,res) => {
        const { id } = req.params
        const libroBorrado = this.servicio.borrarLibro(id)
        res.json(libroBorrado)
    }

}

export default Controlador
