
class ModelMem {
    constructor() {
            this.numeros = []
    }

    obtenerNumeros = async () => {    
            return await this.numeros
    }
    
    guardarNumero = async numero => {
        numero.numero = Number(numero.numero)
        this.numeros.push(numero.numero)
        return numero
    }
    
}

export default ModelMem