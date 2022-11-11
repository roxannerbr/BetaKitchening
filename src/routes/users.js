var express = require('express');
var router = express.Router();

/* GET users controllers. */
let {crear,devolverUno,editar,eliminar,listar}=require('../controllers/usuariosController')

/* usuarios */
router.get('/', listar);
router.get('/:id', devolverUno);

router.get('/crear', crear);
router.get('/editar/:id', editar);
router.get('/eliminar/:id', eliminar);

module.exports = router;
