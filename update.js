var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aluno01",
    database: "meubanco"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE alunos SET endereco = 'Canyon 123' WHERE endereco = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});