const Ens = require('../models/Ens')
const PostAddEns = (req,res)=>{
    let body = req.body;
    console.log(body);
    Ens.create(body.nom,body.prenom,body.email,body.pseudo,(Result)=>{
        console.log(Result);    
        res.redirect('/');
    })
}

const GetDash = (req,res)=>{
    Ens.Read((Result)=>{
        console.log(Result);
        res.render('Dash',{objs:Result})
    })
}

const GetAddEns = (req,res)=>{
    res.render('home');
}

module.exports = {
    PostAddEns,
    GetDash,
    GetAddEns
}