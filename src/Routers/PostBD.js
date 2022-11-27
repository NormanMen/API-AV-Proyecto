const { Router }=require('express');
const { 
    POSTUsuario,
    POSTMaestro, 
    POSTTutor,
    POSTUnidad,
    POSTMateria,
    POSTTarea,
    POSTSala,
    POSTNotificacion,
    POSTChat
 }=require('../Controllers/POST.Contrillers')

const router=Router();

//Registros
router.post('/POST/usuario',POSTUsuario);
router.post('/POST/maestro',POSTMaestro);
router.post('/POST/tutor',POSTTutor);

//Añadir
router.post('/POST/unidad',POSTUnidad);
router.post('/POST/materias',POSTMateria);
router.post('/POST/tarea',POSTTarea);
router.post('/POST/sala',POSTSala);
router.post('/POST/notificacion',POSTNotificacion);
router.post('/POST/chat',POSTChat)

module.exports=router;