const { Router }=require('express');
const { GetDataUsuario,GetDataUsuarioId }=require('../Controllers/GET.Controllers');

const router=Router();


router.get('/GET/:Name',GetDataUsuario);
router.get('/GET/:Name/:id',GetDataUsuarioId);

module.exports=router;
