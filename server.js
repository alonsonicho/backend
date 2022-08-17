// ---- Modulos ----
const express = require('express');
const morgan = require('morgan');

// ---- Instancia del servidor ----
const app = express();
const routerProductos = require('./src/routes/productos.routes');

// ---- Middlewares ----
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


// ---- Rutas ----
app.use('/api/productos', routerProductos);


// ---- Servidor ----
const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor http en http://localhost:8080/`)
})
server.on('error', err => {
    console.error(`Error en el servidor : ${err}`);
})