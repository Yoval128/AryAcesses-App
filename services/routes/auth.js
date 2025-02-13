const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

router.get('/', (req, res) => {
    res.send('Ruta de autenticación funcionando');
});

// Ruta para consultar usuarios
router.get("/consulta", (req, res) => {
  connection.query(
    "SELECT * FROM usuarios",
    (err, results) => {
      if (err) {
        console.error("Error al obtener registros:", err);
        res.status(500).json({ error: "Error al obtener registros" });
        return;
      }
      res.json(results);
    }
  );
});

// Ruta de Registro
router.post("/register", (req, res) => {
  const { nombre, email, password } = req.body;

  connection.query(
    "SELECT * FROM tb_usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Error al verificar usuario:", err);
        res.status(500).json({ error: "Error al verificar usuario" });
        return;
      }

      if (results.length > 0) {
        return res.status(400).json({ error: "El usuario ya existe" });
      }

      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error("Error al encriptar la contraseña:", err);
          res.status(500).json({ error: "Error al encriptar la contraseña" });
          return;
        }

        const nuevoUsuario = { nombre, email, password: hashedPassword };
        connection.query(
          "INSERT INTO tb_usuarios SET ?",
          nuevoUsuario,
          (err, results) => {
            if (err) {
              console.error("Error al crear el usuario:", err);
              res.status(500).json({ error: "Error al crear el usuario" });
              return;
            }
            res.status(201).json({ message: "Usuario registrado exitosamente" });
          }
        );
      });
    }
  );
});

// Ruta de Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM tb_usuarios WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Error al verificar usuario:", err);
        res.status(500).json({ error: "Error al verificar usuario" });
        return;
      }

      if (results.length === 0) {
        return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
      }

      const usuario = results[0];

      bcrypt.compare(password, usuario.password, (err, isMatch) => {
        if (err) {
          console.error("Error al comparar contraseñas:", err);
          res.status(500).json({ error: "Error al comparar contraseñas" });
          return;
        }

        if (!isMatch) {
          return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
        }

        const token = jwt.sign(
          { id: usuario.id_usuario, email: usuario.email },
          "SECRET_KEY",
          { expiresIn: "1h" }
        );

        res.json({
          message: "Login exitoso",
          token: token,
        });
      });
    }
  );
});

module.exports = router;
