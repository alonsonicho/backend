const fs = require('fs');

class Contenedor {

    constructor(ruta){
        this.ruta = ruta
    }

    async getAll(){
        try {
            const contenido = await fs.promises.readFile('./productos.txt', 'utf-8');
            return JSON.parse(contenido);
        } catch (error) {
            return console.log(error)
        }
    }
}

module.exports = Contenedor;