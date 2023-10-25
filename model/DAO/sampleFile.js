import fs from 'fs'


class ModelFile {
    constructor() {
        this.nombreArchivo = 'samples.json'
    }

    leerArchivo = async nombre => {
        let samples = []
        try {
            samples = JSON.parse(await fs.readFileSync(nombre, 'utf-8'))
        }
        catch {}
        return samples
    }

     escribirArchivo  = async (nombre, samples) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#value
        await fs.writeFileSync(nombre, JSON.stringify(samples,null,'\t'))
    }


    obtenerSample = async id => {    
        try {
            const samples = await this.leerArchivo(this.nombreArchivo)
            if(id) {
                const sample = samples.find( sample => sample.id === id )
                return sample || {}
            }
            else {
                return samples
            }
        }
        catch {
            return id? {} : []
        }
    }

    guardarSample = async sample => {
        const samples = await this.leerArchivo(this.nombreArchivo)

        sample.id = String(parseInt(samples[samples.length - 1]?.id || 0) + 1) // ?. optional chaining
        sample.anio = Number(sample.anio)
        samples.push(sample)

        await this.escribirArchivo(this.nombreArchivo, samples)

        return sample
    }

    actualizarSample = async (id, sample) => {
        sample.id = id

        const samples = await this.leerArchivo(this.nombreArchivo)

        const index = samples.findIndex( sample => sample.id === id )
        if(index != -1) {
            const sampleAnt = samples[index]
            const sampleNuevo = { ...sampleAnt, ...sample }
            samples.splice(index,1,sampleNuevo)
            await this.escribirArchivo(this.nombreArchivo, samples)

            return sampleNuevo
        }
        else {
            samples.push(sample)
            await this.escribirArchivo(this.nombreArchivo, samples)

            return sample
        }
    }

    borrarSample = async id => {
        let sample = {}

        const samples = await this.leerArchivo(this.nombreArchivo)

        const index = samples.findIndex( sample => sample.id === id )
        if(index != -1) {
            sample = samples.splice(index,1)[0]
            await this.escribirArchivo(this.nombreArchivo, samples)
        }
        return sample    
    }
}

export default ModelFile