const read = require('body-parser/lib/read');
const db = require('./DB');

function create(nom,prenom,email,pseudo,callback){

    let q = "insert into Ens (nom,prenom,pseudo,email) values ('"+nom+"','"+prenom+"','"+pseudo+"','"+email+"')";

    db.query(q,(Err,Result) => {
        if(Err) throw Err;
        callback(Result);
    })

}

function Read(callback){
    let q = "select * from Ens;"
    db.query(q,(Err,Result) => {
        if(Err) throw Err;
        callback(Result)
    })
}




module.exports={
    create,
    Read
}