const express = require('express');
const Ens = require('./routers/Ens')
var bodyParser = require('body-parser')
const app = express();

app.set( 'view engine' , 'ejs' );
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/Enseignant',Ens)

app.listen(3000,()=>{

    console.log("3000")

})