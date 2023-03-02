// import express
import express from "express";

// import function from controller
import { showUsuarios, showUsuariosById, insertUsuario, updateUsuarioById, deleteUsuarioById } from "../controller/usuarios.js";

// init express router
const router = express.Router();

// get All Users
router.get("/users", showUsuarios);

// get Single User
router.get("/users/:id", showUsuariosById);

// insert User
router.post("/users", insertUsuario);

// Update user
router.put("/users/:id", updateUsuarioById);

// delete User
router.delete("/users/:id", deleteUsuarioById);

// export default router
export default router;