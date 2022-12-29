const express = require('express')
const morgan = require('morgan')

const app = express();
// SETTINGS
app.set('case sensitive routing',true) //SIEMPRE RESPETARA COMO ESTA LA RUTA TAL CUAL
app.set('aplicacion', 'Express Class') 
//MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())
//ROUTE
app.get('/UserName',(req, res)=>{
    res.send('ESTO ES EL USER')
})

app.listen(3000);
console.log(`Server ${app.get('aplicacion')} on port ${3000}`)
