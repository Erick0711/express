const express = require('express');
const path = require('path'); // CAMBIO SE OTORGO AUTOMATICAMENTE
const morgan = require('morgan')

const app = express();
app.set('aplicacion', 'Express Class') 

app.use(morgan('dev'))
app.use(express.json())
app.set('port', 3000)

app.get('/',(req, res)=>{
    res.send('ESTO ES EL INICIO')
})
// console.log(__dirname)
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

app.listen(3000);
console.log(`Server on port ${app.get('port')}`)
