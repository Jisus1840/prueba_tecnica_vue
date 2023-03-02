import mysql from "mysql2";

// conexion a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba_tecnica'
});

export default db;