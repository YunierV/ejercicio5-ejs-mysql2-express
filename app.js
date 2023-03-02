const express = require('express')
const app = express()

const port = 8000
const host = "localhost"

app.use(express.urlencoded())
app.use(express.json())

const {join} = require('path')

app.set('views',join(__dirname,'./views'))
app.set('view engine','ejs')

app.use(express.static('./static'))

app.use('/',require('./routes/routes')) 

app.use((req,res)=>{
    res.status(404).send("ERROR 404")
})

app.listen(port,host,()=>{
    console.log(`link http://${host}:${port}`)
})