var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port:'3306',
  password : '12345',
  database : 'PFE'
});



module.exports = connection;