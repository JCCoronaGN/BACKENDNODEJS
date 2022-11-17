const routerA = require('express').Router();
const auth = require('./auth');

const {
    obtenerAlimentos,
    crearAlimento,
    modificarAlimento,
    eliminarAlimento
} = require('../controllers/alimentos');

routerA.get('/',obtenerAlimentos)
routerA.post('/', crearAlimento)
routerA.put('/:aid', modificarAlimento)
routerA.delete('/:aid', eliminarAlimento)

module.exports = routerA;