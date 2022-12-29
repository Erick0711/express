require('ejs');
const {Router} = require('express')
const axios = require('axios')
const router = Router();
const db = require('../database/db');
const connectionDB = require('../database/db');

connectionDB()


router.get('/',(req, res)=>{
    const title = 'Pagina nueva'
    let activo = true
    const users = [
        {
            id: 1,
            name: 'Abrahan',
            lastName: 'Roble'
        },
        {
            id: 2,
            name: 'Ponzo',
            lastName: 'Polaris'
        }
    ]
    res.render('index',{
        title,
        activo,
        users
    })
})

router.get('/user',(req, res)=>{
    res.render('user')
})
router.get('/home',(req, res)=>{
    res.render('home')
})
// SOLO AWAIT PARA PETICIONES ASINCRONAS (async)
router.get('/post', async (req, res)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response)
    res.render('post',{
        post: response.data
    })
})
module.exports = router;