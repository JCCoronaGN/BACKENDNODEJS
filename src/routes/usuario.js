const routeU = require('express').Router()
const auth = require('./auth');

const {
    login,
    agregarUsuario,
    obtenerUsuarios
} = require('../controllers/usuarios')


routeU.get('/', auth.requerido, obtenerUsuarios)
routeU.post('/login', login)
routeU.post('/', agregarUsuario)

module.exports = routeU