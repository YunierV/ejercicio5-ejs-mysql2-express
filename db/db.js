const mysql = require('mysql2')
function conn(){
    const conexion = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'gestion_proyectos'
    })

    conexion.connect((err)=>{
        if(err){
            console.log('error en la conexion'+err.stack)
            return
        }
        
        console.log('conexion exitosa')
    })

    return conexion


}

module.exports = conn()