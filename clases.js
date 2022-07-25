class Usuario{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    };

    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota);
    };

    countMascotas(){
        return this.mascotas.length;
    };

    addBook(nombre, autor){
        this.libros.push({nombre ,autor});
    }

    getBookName(){
        return this.libros.map(libro => libro.nombre);
    };
}

const user1 = new Usuario("Juan","Ramirez");
user1.addMascota("Tobi");
user1.addMascota("Tufo");
user1.addBook("Los Heraldos Negros","Cesar Vallejo");
user1.addBook("La ciudad y los perros","Mario Vargas Llosa");

console.log("Nombre completo :", user1.getFullName());
console.log("# de Mascotas :", user1.countMascotas());
console.log("Libros :", user1.getBookName());






