var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Qwerty@98!",
    database:'nodemysql'
});

connection.connect((err) => {
    if (err) {
      console.log("Error occurred");
    } else {
      console.log("Connected to database");
      //sql="CREATE TABLE students (id INT, name VARCHAR(255), course VARCHAR(255))"
      //sql=sql = "INSERT INTO students (id, name, course) VALUES (1, 'John Doe', 'Computer Science')";
      //var sql = "SELECT * FROM students";
      var sql = "UPDATE students SET course = 'Art' WHERE id = 1";

      connection.query(sql, function (err, result) {
        if (err) {
          console.log(err);
        }
        console.log("updated");
      });

    }
});