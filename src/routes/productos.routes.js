const express = require('express');
const routerProductos = express.Router();

// ---- DB ----
let DB_PRODUCTOS = [];

routerProductos.get('/', (req, res) => {
    res.status(200).json(DB_PRODUCTOS);
});

routerProductos.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    let existeProducto = DB_PRODUCTOS.some(item => item.id === id);

    if(existeProducto){
        const productoFiltrado = DB_PRODUCTOS.filter(item => item.id === id)
        res.status(200).json(productoFiltrado);
    }else{
        res.status(200).json({error: "Producto no encontrado"});
    }
})

routerProductos.put('/:id', (req, res) => {
    let id = Number(req.params.id);
    let existeProducto = DB_PRODUCTOS.some(item => item.id === id);

    if(existeProducto){
        const producto = DB_PRODUCTOS.find(item => item.id == id);
        const {title, price, url} = req.body;
        producto.info.title = title;
        producto.info.price = price;
        producto.info.url = url;
        res.status(200).json(DB_PRODUCTOS);
    }else{
        res.status(200).json({error: "Producto no encontrado"});
    }
})

routerProductos.delete('/:id', (req, res) => {
    let id = Number(req.params.id);
    let existeProducto = DB_PRODUCTOS.some(item => item.id === id);

    if(existeProducto){
        const productosActualizados = DB_PRODUCTOS.filter(item => item.id !== id);
        DB_PRODUCTOS = []
        productosActualizados.map(item => DB_PRODUCTOS.push(item))
        res.status(200).json(DB_PRODUCTOS);
    }else{
        res.status(200).json({error: "Producto no encontrado"});
    }
})


routerProductos.post('/', (req, res) => {
    let newId;

    if(DB_PRODUCTOS.length === 0){
        newId = 1;
    }else{
        newId = DB_PRODUCTOS[DB_PRODUCTOS.length -1].id +1
    }

    const dataInfo = {
        id: newId,
        info: req.body
    }

    DB_PRODUCTOS.push(dataInfo);
    res.status(201).json({msg:"Agregado!", data: dataInfo})
})

module.exports = routerProductos;