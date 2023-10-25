import ModelMem from '../model/DAO/sampleMemoria.js'
import ModelFile from '../model/DAO/sampleFile.js'

class Servicio {
    constructor() {
        //this.model = new ModelMem()
        this.model = new ModelFile()
    }

     obtenerSample = id => {
        const sample = this.model.obtenerSample(id)
        return sample
    }   
    
     guardarSample = sample => {
        const sampleGuardado = this.model.guardarSample(sample)
        return sampleGuardado
    }
    
     actualizarSample = (id, sample) => {
        const sampleActualizado = this.model.actualizarSample(id,sample)
        return sampleActualizado
    }
    
     borrarSample = id => {
        const sampleBorrado = this.model.borrarSample(id)
        return sampleBorrado
    }
}

export default Servicio