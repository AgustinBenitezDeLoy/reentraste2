const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const router = express.Router();

// Configurar la conexión a la base de datos MySQL como un pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'reentraste'
});

// Ruta de registro
router.post('/registro', async (req, res) => {
    const { nombre, apellido, correo, contraseña, cedula } = req.body;
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    pool.query(
        'SELECT * FROM usuarios WHERE correo = ?',
        [correo],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error en el servidor');
            }
            if (results.length > 0) {
                return res.status(400).send('El usuario ya existe');
            } else {
                pool.query(
                    'INSERT INTO usuarios (nombre, apellido, correo, contraseña, cedula) VALUES (?, ?, ?, ?, ?)',
                    [nombre, apellido, correo, hashedPassword, cedula],
                    (err, results) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send('Error al registrar el usuario');
                        }
                        res.status(201).send('Usuario registrado exitosamente');
                    }
                );
            }
        }
    );
});

module.exports = router;
