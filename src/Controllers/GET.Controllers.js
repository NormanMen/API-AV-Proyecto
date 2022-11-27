const Conecction=require('../Settings/BDconf')

function GetDataUsuario(req,res){

    TB="tb_"+req.params.Name
    QUERRY='select * from '+TB;
    Conecction.query(QUERRY,(err,row,fields)=>{
        res.json(row);
    })
    
}
function GetDataUsuarioId(req,res){
    TB="tb_"+req.params.Name
    ID=req.params.id
    QUERRY="select * from "+TB+" where ID_Usuario='"+ID+"';";
    Conecction.query(QUERRY,(err,row,fields)=>{
        res.json(row);
    })
}

module.exports={
    GetDataUsuario,
    GetDataUsuarioId
}