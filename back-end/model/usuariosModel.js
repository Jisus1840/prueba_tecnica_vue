import db from "../config/database.js";

// Get All Users
export const getUsuarios = (result) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, results);
    });
}

// Get Single User
export const getUsuariosById = (id, result) => {
    db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, results[0]);
    });
}

// Insert User
export const insertUsuario = (usuario, result) => {
    db.query("INSERT INTO usuarios (nombre, apellido, usuario, password, id_nivel) VALUES (?, ?, ?, ?, ?)", [usuario.nombre, usuario.apellido, usuario.usuario, usuario.password, usuario.id_nivel], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, results);
    });
}

// Update User
export const updateUsuarioById = (usuario, id, result) => {
    db.query("UPDATE usuarios SET nombre = ?, apellido = ?, usuario = ?, password = ?, id_nivel = ? WHERE id = ?", [usuario.nombre, usuario.apellido, usuario.usuario, usuario.password, usuario.id_nivel, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, results);
    });
}

// Delete User
export const deleteUsuarioById = (id, result) => {
    db.query("DELETE FROM usuarios WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }
        result(null, results);
    });
}