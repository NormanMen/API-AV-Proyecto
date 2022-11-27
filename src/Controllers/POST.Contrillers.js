const Conecction=require('../Settings/BDconf')
const { v4:uuidv4 } =require('uuid')

function POSTUsuario(req,res){
    
    const {
        Nombres,
        AP,
        AM,
        Correo,
        Password
    }=req.body;
    
    console.log(uuidv4())
    let query=`INSERT INTO tb_usuario VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombres}', '${AP}', '${AM}', '${Correo}','${Password}','1','${uuidv4()}');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTMaestro(req,res){
    const {
        Nombres,
        AP,
        AM,
        Correo,
        Password
    }=req.body;
    
    let query=`INSERT INTO tb_usuario VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombres}', '${AP}', '${AM}', '${Correo}','${Password}','2','NULL');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTTutor(req,res){
    const {
        Codigo,
        Correo,
        Password
    }=req.body;
    
    let query=`INSERT INTO tb_usuario VALUES ('${Math.round(Math.random()*(100000-0))+0}', '', '', '', '${Correo}','${Password}','3','${Codigo}');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTUnidad(req,res){
    const {
        Nombre
    }=req.body;
    
    let query=`INSERT INTO tb_unidades VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}');`
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTMateria(req,res){
    const {
        Nombre,
        Imagen,
        ID_usuario
    }=req.body;
    
    let query=`INSERT INTO tb_materias VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}','${uuidv4()}','${Imagen}','${ID_usuario}');`;
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTTarea(req,res){
    const {
        Nombre,
        Descripcion,
        ID_usuario,
        ID_materia,
        ID_unidad
    }=req.body;
    
    let query=`INSERT INTO tb_tarea VALUES ('${Math.round(Math.random()*(100000-0))+0}', '${Nombre}','${Descripcion}','${ID_materia}','${ID_usuario}','','${ID_unidad}');`;
   
    Conecction.query(query,(err,row,fields)=>{
        if(!err){
            return res.json(req.body)
        }else{
            return res.json({"Message":err})
        }
   })
}
function POSTSala(req,res){

}
function POSTNotificacion(req,res){

}
function POSTChat(req,res){

}

module.exports={
    POSTUsuario,
    POSTMaestro,
    POSTTutor,
    POSTUnidad,
    POSTMateria,
    POSTTarea,
    POSTSala,
    POSTNotificacion,
    POSTChat,
}