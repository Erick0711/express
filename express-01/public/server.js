const express = require('express');
const path = require('path'); // CAMBIO SE OTORGO AUTOMATICAMENTE
const morgan = require('morgan')
const route = require('./routes/route')

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.set('port', 3000)

app.use(route)
// route(route) // FUNCION

app.listen(3000);
console.log(`Server on port ${app.get('port')}`)
