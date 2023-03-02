const express = require('express')
const routes = express.Router()

let crud = require("../db/consultas")


//mostrar 
routes.get('/',(req,res)=>{
    crud.view(req,res)
}) 

//agregar
routes.get('/add',(req,res)=>{
    res.render('add')
})

routes.post('/addpost',(req,res)=>{
    crud.add(req,res)
})

//eliminar
routes.get('/delect/:id',(req,res)=>{
    crud.delet(req,res)
})

//editar
routes.get('/selecid/:id',(req,res)=>{ //por los parametros enviados en url hay que cambiar la direcion por la cual recibe los estilos.css (./style.css)(../style.css)
    crud.selectid(req,res)
})

routes.post('/edit',(req,res)=>{
    crud.update(req,res)
})

module.exports=(routes) 