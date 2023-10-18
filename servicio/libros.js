import ModelMem from '../model/DAO/librosMemoria.js'

class Servicio {
    constructor() {
        this.model = new ModelMem()
    }

     obtenerLibros = id => {
        const libros = this.model.obtenerLibros(id)
        return libros
    }   
    
     guardarLibro = libro => {
        const libroGuardado = this.model.guardarLibro(libro)
        return libroGuardado
    }
    
     actualizarLibro = (id, libro) => {
        const libroActualizado = this.model.actualizarLibro(id,libro)
        return libroActualizado
    }
    
     borrarLibro = id => {
        const libroBorrado = this.model.borrarLibro(id)
        return libroBorrado
    }
}

export default Servicio