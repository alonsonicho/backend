const fs = require('fs');

class Contenedor {

    constructor(ruta){
        this.ruta = ruta
    }

    async save(obj){
        try {
            const contenido = await this.getAll()
            let newId;
            if(contenido.length === 0){
                newId = 1
            }else{
                newId = contenido[contenido.length -1].id +1
            }
            const newObj = {id: newId , ...obj}
            contenido.push(newObj);

            await fs.promises.writeFile(this.ruta, JSON.stringify(contenido, null, 2));

            return newId;

        } catch (error) {
            return console.log(error)
        }
    }


    async getAll(){
        try {
            const contenido = await fs.promises.readFile(this.ruta, 'utf-8');
            return JSON.parse(contenido);
        } catch (error) {
            return console.log(error)
        }
    }


    async getById(id){
        try {
            const contenidos = await this.getAll()
            const indexObj = contenidos.findIndex((obj) => obj.id == id);

            if(indexObj == -1){
                return console.log('Elemento no encontrado');
            }else{
                const data = contenidos.find(obj => obj.id == id)
                return data
            }
        } catch (error) {
            return console.log(error)
        }
    }


    async deleteById(id){
        try {
            const contenido = await this.getAll();
            const indexObj = contenido.findIndex((obj) => obj.id == id);
        
            if(indexObj == -1){
                return console.log('Elemento no encontrado');
            }else{
                contenido.splice(indexObj, 1);
                await fs.promises.writeFile(this.ruta, JSON.stringify(contenido, null, 2));
            }
        } catch (error) {
            return console.log(error)
        }
    }


    async deleteAll(){
        try {
            const contenido = []
            await fs.promises.writeFile(this.ruta, JSON.stringify(contenido, null, 2));
        } catch (error) {
            return console.log(error)
        }
    }
}


async function main(){
    const archivo = new Contenedor ('./productos.txt')

    // console.log(await archivo.save({tittle: "Cuaderno", price: 25, thumbanail: "https://www.iconfinder.com/icons/1916661/address_boock_contact_office_roll_icon"}))}
    console.log(await archivo.getAll())
    // console.log(await archivo.getById(2))
    // await archivo.deleteById(3)
    // await archivo.deleteAll();
}

main()



