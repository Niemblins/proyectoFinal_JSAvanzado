const underscore = require('underscore')
const santsAll = require('../services/santos/santos.json')




const get = (req, res) => {
    const data = (`<h1>Bienvenidos</h1>`)
    res.send(data)
}

const getAll = (req, res) => {
    res.json(santsAll)
}

const getId = (req, res) => {
    const { id } = req.params
    underscore.each(santsAll, (sant, i) => {
        if (sant.id == id) {
            res.json(sant)
        }
    })
    res.send('Muestra id seleccionado')
}

const create = (req, res) => {
    const { nombre, fiesta, biografia, imagen } = req.body;
    if (nombre && fiesta && biografia && imagen) {
        const id = santsAll.length + 1
        const newSants = { ...req.body, id };
        santsAll.push(newSants)
        res.json(santsAll)
    } else {
        res.status(500).json({ error: 'Hubo un error' })
    }

}

const edit = (req, res) => {
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
}

const editComplete = (req, res) => {
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
}

const delet = (req, res) => {
    const { id } = req.params
    underscore.each(santsAll, (sant, i) => {
        if (sant.id == id) {
            santsAll.splice(i, 1)
        }
    })
    res.send('borrado')
}

module.exports = {
    get,
    getAll,
    getId,
    create,
    edit,
    editComplete,
    delet
};