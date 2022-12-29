// export function route(app){
//     app.get('/',(req, res)=>{
//         res.send('ESTO ES EL INICIO')
//     })
// }
// const express = require('express')
// const router = express.Router();
const {Router} = require('express')
const router = Router();

router.get('/',(req, res)=>{
    res.send('ESTO ES EL INICIO')
})

router.get('/prueba',(req, res)=>{
    res.send('ESTO ES EL PRUEBA')
})
module.exports = router;