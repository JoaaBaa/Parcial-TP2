import ModelMem from '../model/DAO/sampleMemoria.js'
import ModelFile from '../model/DAO/sampleFile.js'

class Servicio {
    constructor() {
        //this.model = new ModelMem()
        this.model = new ModelFile()
    }

    async obtenerSample(id){
        const sample = await this.model.obtenerSample(id)
        return sample
    }   
    
    async guardarSample(sample){
        const sampleGuardado = await this.model.guardarSample(sample)
        return sampleGuardado
    }
    
    async actualizarSample(id, sample) {
        const sampleActualizado = await this.model.actualizarSample(id,sample)
        return sampleActualizado
    }
    
    async borrarSample(id){
        const sampleBorrado = await this.model.borrarSample(id)
        return sampleBorrado
    }
}

export default Servicio