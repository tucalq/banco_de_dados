var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aluno01",
    database: "meubanco"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE alunos";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });