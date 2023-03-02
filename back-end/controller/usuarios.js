import { getUsuarios, getUsuariosById, insertUsuario, updateUsuario, deleteUsuario } from "../model/usuariosModel.js";

// Get All user
export const showUsuarios = (req, res) => {
    getUsuarios((err, results) => {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
}

// Get single user
export const showUsuariosById = (req, res) => {
    getUsuariosById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
}

// Create user
export const createUsuario = (req, res) => {
    const data = req.body;
    insertUsuario(data, (err, results) => {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
}


// Update User
export const updateUsuarioById = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateUsuario(id, data, (err, results) => {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
}

// Delete User
export const deleteUsuarioById = (req, res) => {
    const id = req.params.id;
    deleteUsuario(id, (err, results) => {
        if (err) {
            res.send(err);
        }
        res.json(results);
    });
}
