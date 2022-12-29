const express = require('express');
const path = require('path'); // CAMBIO SE OTORGO AUTOMATICAMENTE
const morgan = require('morgan')
const route = require('./routes/route')
require('ejs')
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.set('port', 3000)
// CONFIGURAR EL MOTOR DE PLANTILLA
app.set('view engine', 'ejs')
// CONFIGURAR TODAS LAS VISTAS
app.set('views', path.join(__dirname, 'views'))

app.use(route)
// route(route) // FUNCION

app.listen(3000);
console.log(`Server on port ${app.get('port')}`)
