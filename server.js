const express = require('express');
const Contenedor = require('./archivos.js')
const productos =  new Contenedor();

const app = express();

app.get('/',(request, response) => {
    response.send('Servidor iniciado Alonso NH - /productos - / productoRandom');
});

// Response de todos los productos
app.get('/productos', async (request, response) => {
    const pro = await productos.getAll();
    let html = ""
    for (let i = 0; i < pro.length; i++) {
        let name = pro[i].tittle;
        let id = pro[i].id;
        let price = pro[i].price;

        html +=`<h3>ID PRODUCTO: ${id} // NAME PRODUCTO : ${name} // PRICE : $ ${price}</h3>`
    }   
    response.send(html);
});


// Response de un producto
app.get('/productoRandom', async (request, response) => {
    const pro = await productos.getAll();

        let html = "";
        const random = parseInt(Math.random()*3+0);
        let name = pro[random].tittle;
        let id = pro[random].id;
        let price = pro[random].price;

    html =`<h3>ID PRODUCTO: ${id} // NAME PRODUCTO : ${name} // PRICE : $ ${price}</h3>`

    response.send(html)
})

const server = app.listen(8080, ()=> {
    console.log(`Servidor http en http://localhost:8080/`)
})