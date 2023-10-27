import ModelMem from '../model/DAO/numerosMemoria.js'

class Servicio {
    constructor() {
        this.model = new ModelMem()
    }

    async obtenerNumeros(){
        const numeros = await this.model.obtenerNumeros()
        return {"numeros": numeros}
    }   
    
    async guardarNumero(numero){
        const numeroGuardado = await this.model.guardarNumero(numero)
        return numeroGuardado
    }
    
    async obtenerPromedio(){
        const listaNumeros = await this.model.obtenerNumeros()

        // Calcular la suma de los números
        const suma = listaNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
        const promedio = suma / listaNumeros.length;

        return {"promedio": promedio}
    }

    async obtenerMinMax(){
        const listaNumeros = await this.model.obtenerNumeros()

        const listaOrdenada = listaNumeros.slice().sort((a, b) => a - b);
        const maximo = listaOrdenada[listaOrdenada.length - 1];
        const minimo = listaOrdenada[0];

        return {"min": minimo, "max": maximo}
    }

    async obtenerCantidad(){
        const numerosJSON = await this.model.obtenerNumeros()
        const cantidad = numerosJSON.length;

        return {"cantidad": cantidad}
    }
}

export default Servicio