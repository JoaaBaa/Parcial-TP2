
class ModelMem {
    constructor() {
        this.libros = [
            { id: "1", titulo: 'Libro1', anio: 2023 },
            { id: "2", titulo: 'Libro2', anio: 2019 },
            { id: "3", titulo: 'Libro3', anio: 2018 },
        ]
    }
    obtenerLibros = id => {    
        if(id) {
            const libro = this.libros.find( libro => libro.id === id )
            return libro || {}
        }
        else {
            return this.libros
        }
    }
    
    guardarLibro = libro => {
        libro.id = String(parseInt(this.libros[this.libros.length - 1]?.id || 0) + 1) // ?. optional chaining
        libro.anio = Number(libro.anio)
        this.libros.push(libro)
        return libro
    }
    
    actualizarLibro = (id, libro) => {
        libro.id = id
    
        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            const libroAnt = this.libros[index]
            const libroNuevo = { ...libroAnt, ...libro }
            this.libros.splice(index,1,libroNuevo)
            return libroNuevo
        }
        else {
            this.libros.push(libro)
            return libro
        }
    }
    
    borrarLibro = id => {
        let libro = {}
    
        const index = this.libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            libro = this.libros.splice(index,1)[0]
        }
        return libro    
    }
}

export default ModelMem