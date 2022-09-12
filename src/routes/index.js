const { Router } = require('express')
const router = Router()

const {
    get,
    getAll,
    getId,
    create,
    edit,
    editComplete,
    delet

} = require('../controllers/index')

router.get('/', get)

router.get('/api/santos', getAll)

router.get('/api/santos/:id', getId)

router.post('/api/santos', create)

router.patch('/api/santos/:id', edit)

router.put('/api/santos/:id', editComplete)

router.delete('/api/santos/:id', delet)

module.exports = router