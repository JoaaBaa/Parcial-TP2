
class ModelMem {
    constructor() {
        this.samples = [
            { id: "1", titulo: 'Libro1', anio: 2023 },
            { id: "2", titulo: 'Libro2', anio: 2019 },
            { id: "3", titulo: 'Libro3', anio: 2018 },
        ]
    }
    obtenerSample = id => {    
        if(id) {
            const sample = this.samples.find( sample => sample.id === id )
            return sample || {}
        }
        else {
            return this.samples
        }
    }
    
    guardarSample = sample => {
        sample.id = String(parseInt(this.samples[this.samples.length - 1]?.id || 0) + 1) // ?. optional chaining
        sample.anio = Number(sample.anio)
        this.samples.push(sample)
        return sample
    }
    
    actualizarSample = (id, sample) => {
        sample.id = id
    
        const index = this.samples.findIndex( sample => sample.id === id )
        if(index != -1) {
            const sampleAnt = this.samples[index]
            const sampleNuevo = { ...sampleAnt, ...sample }
            this.samples.splice(index,1,sampleNuevo)
            return sampleNuevo
        }
        else {
            this.samples.push(sample)
            return sample
        }
    }
    
    borrarSample = id => {
        let sample = {}
    
        const index = this.samples.findIndex( sample => sample.id === id )
        if(index != -1) {
            sample = this.samples.splice(index,1)[0]
        }
        return sample    
    }
}

export default ModelMem