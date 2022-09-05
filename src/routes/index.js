const { Router } = require('express')
const router = Router()
const underscore = require('underscore')

const santsAll = require('../services/santos/santos.json')
console.log(santsAll)

router.get('/', (req, res) => {
    const data = (`<h1>Bienvenidos</h1>`)
    res.send(data)
})

router.get('/api/santos', (req, res) => {
    res.json(santsAll)
})


router.get('/api/santos/:id', (req, res) => {
    const { id } = req.params
    underscore.each(santsAll, (sant, i) => {
        if (sant.id == id) {
            res.json(sant)
        }
    })
    res.send('Muestra id seleccionado')
})



router.post('/api/santos', (req, res) => {
    const { nombre, fiesta, biografia, imagen } = req.body;
    if (nombre && fiesta && biografia && imagen) {
        const id = santsAll.length + 1
        const newSants = { ...req.body, id };
        santsAll.push(newSants)
        res.json(santsAll)
    } else {
        res.status(500).json({ error: 'Hubo un error' })
    }

})

router.patch('/api/santos/:id', (req, res) => {
    const { id } = req.params
    const { nombre, fiesta, biografia, imagen } = req.body
    if (nombre && fiesta && biografia && imagen) {
        underscore.each(santsAll, (sant, i) => {
            if (sant.id == id) {
                sant.nombre = nombre
                sant.fiesta = fiesta
                sant.biografia = biografia
                sant.imagen = imagen
            }
        })
        res.json(santsAll)
    } else {
        res.status(500).json({error: 'Ha ocurrido un error'})
    }
})

router.put('/api/santos/:id', (req, res) => {
    const { id } = req.params
    const { nombre, fiesta, biografia, imagen } = req.body
    if (nombre && fiesta && biografia && imagen) {
        underscore.each(santsAll, (sant, i) => {
            if (sant.id == id) {
                sant.nombre = nombre
                sant.fiesta = fiesta
                sant.biografia = biografia
                sant.imagen = imagen
            }
        })
        res.json(santsAll)
    } else {
        res.status(500).json({error: 'Ha ocurrido un error'})
    }
})



router.delete('/api/santos/:id', (req, res) => {
    const { id } = req.params
    underscore.each(santsAll, (sant, i) => {
        if (sant.id == id) {
            santsAll.splice(i, 1)
        }
    })
    res.send('borrado')
})

module.exports = router
