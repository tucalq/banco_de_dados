var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aluno01",
    database: "meubanco"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM alunos WHERE endereco = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});