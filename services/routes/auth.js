const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const connection = require("../db/connection");
const bcrypt = require("bcryptjs");

// Ruta de Prueba 
router.get('/', (req, res) => {
    res.send('Ruta de autenticación funcionando');
});


router.post("/login", (req, res) => {
  const { email, password } = req.body;

  connection.query(
      "SELECT * FROM usuarios WHERE email_usuario = ?",
      [email],
      (err, results) => {
          if (err) {
              console.error("Error al verificar usuario:", err);
              return res.status(500).json({ error: "Error en el servidor" });
          }

          if (results.length === 0) {
              return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
          }

          const usuario = results[0];

          bcrypt.compare(password, usuario.contrasena_usuario, (err, isMatch) => {
              if (err) {
                  console.error("Error al comparar contraseñas:", err);
                  return res.status(500).json({ error: "Error en el servidor" });
              }

              if (!isMatch) {
                  return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
              }

              const token = jwt.sign(
                  { id: usuario.id_usuario, email: usuario.email_usuario, rol: usuario.rol_usuario },
                  "SECRET_KEY",
                  { expiresIn: "1h" }
              );

              res.json({
                  message: "Login exitoso",
                  token,
                  usuario: {
                      id: usuario.id_usuario,
                      nombre: usuario.nombre_usuario,
                      email: usuario.email_usuario,
                      rol: usuario.rol_usuario,
                  },
              });
          });
      }
  );
});



module.exports = router;
