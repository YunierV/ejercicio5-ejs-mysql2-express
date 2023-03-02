const mysql = require('mysql2')

const conn = require('./db')


function add (req,res){

    const nombre = req.body.txtnombre
    const apellido = req.body.txtapell

    conn.query('insert into persona set ?',{nombre:nombre, apellido:apellido},(error,result)=>{
        if(error){
            throw error
        }else{            
            res.redirect('/')
        }
    })
    //conn.end()
}

function update(req,res){

    const id = req.body.txtid
    const nombre = req.body.txtnombre
    const apellido = req.body.txtapell

    conn.query('update persona set ? where id = ?',[{nombre:nombre, apellido:apellido}, id],(error,result)=>{
        if(error){
            throw error
        }else{             
            res.redirect('/')
        }
    })
    //conn.end()
}

function delet (req,res){
    const id = req.params.id

    conn.query('delete from persona where id = ?',[id],(error,result)=>{
        if(error){
            throw error
        }else{             
            res.redirect('/')
        }
    })
    //conn.end()
}

function view (req,res){

    conn.query('select * from persona',(error,result)=>{
        if(error){
            throw error
        }else{                          //en esta parte se declaro una variable resultado y se le dio los valores de la variable de la funcion result, para nuestra vista utilizamos resultado
            res.render('index',{resultado:result})
        }
    })
    //conn.end()
}

function selectid (req,res){
    let id = req.params.id

    conn.query('select * from persona where id=?',[id],(error,result)=>{
        if(error){
            throw error
        }else{             
            res.render('edit',{persona:result[0]})
        }
    })
    //conn.end()
}

module.exports= {//con llaves exporta funciones que estan por separado
    view,
    selectid,
    delet,
    add,
    update
}
