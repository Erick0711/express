const express = require('express')
const morgan = require('morgan')

const app = express();
let product = [
    {
        id: 1,
        name: "Pantalla",
        marca: "LG",
        precio: 3000,
    }
]

app.use(morgan('dev'))
app.use(express.json())

app.set('aplicacion', 'Express Class') // CON SET CREAMOS UNA VARIABLE Y LUEGO LE DAMOS EL VALOR PARA OBTENER DESPUES CON GET

app.get('/',(req, res)=>{
    res.send('ESTO ES EL INICIO')
})

app.get('/product',(req, res)=>{
    // res.send('OBTENIENDO PRODUCTO')
    res.json(product)
})

app.post('/product',(req, res)=>{
    const newProduct = {...req.body, id: product.length + 1}
    // console.log({...req.body, id:product.length + 1})
    product.push(newProduct)
    res.send(newProduct)
})

app.put('/product/:id',(req, res)=>{
    const newData = req.body
    const p = req.params.id;

    const productoFound = product.find((product)=>{
        return product.id === parseInt(p)
    })

    if(!productoFound) return res.status(404).json({
        message: "Producto no encontrado"
    })

    product = product.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData}: p)

    res.json({
        message: "Producto modificado"
    })
    // console.log(newProducto)
});

app.delete('/product/:id',(req, res)=>{
    const p = req.params.id;
    const productoFound = product.find((product)=>{
        return product.id === parseInt(p)
    })

    if(!productoFound) return res.status(404).json({
        message: "Producto no encontrado"
    })

    product = product.filter(p => p.id !== parseInt(req.params.id))

    res.sendStatus(204)
})

app.get('/product/:id',(req, res)=>{
    const p = req.params.id;
    const productoFound = product.find((product)=>{
        return product.id === parseInt(p)
    })

    if(!productoFound) return res.status(404).json({
        message: "Producto no encontrado"
    })
    console.log(productoFound)
    res.json(productoFound)
})

app.listen(3000);
console.log(`Server on port ${3000}`)
