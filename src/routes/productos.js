var express = require('express');
var router = express.Router();

/* GET productos controller. */
let {crear,productoUnico,editar,eliminar,listar}=require('../controllers/productosController')

/* productos */
router.get('/', listar);
router.get('/:id', productoUnico);


router.post('/admin/create', crear);
router.put('/admin/edit/:id', editar);
router.delete('/admin/destroy/:id', eliminar);

module.exports = router;