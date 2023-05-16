//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

db.authenticate()
    .then( () => console.log('Conección ok'))
    .catch( error => console.log(error));

//Definir pueto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

app.use((req, res, next) => {
    const year = new Date();

    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";

    return next()
})

//Agregar body parser para leer el form
app.use(express.urlencoded({extended: true}))


//Definir public
app.use(express.static('public'))

//Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`el servidor esta on en el por ${port}`);
})