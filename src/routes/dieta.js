const routerD = require('express').Router();
const auth = require('./auth');

const {
    obtenerDietas,
    crearDieta,
    modificarDieta,
    eliminarDieta
} = require('../controllers/dietas');

routerD.get('/',auth.requerido,obtenerDietas)
routerD.post('/',auth.requerido, crearDieta)
routerD.put('/:did',auth.requerido, modificarDieta)
routerD.delete('/:did',auth.requerido, eliminarDieta)

module.exports = routerD;