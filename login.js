const express = require('express');
const bcrypt = require('bcrypt');
const { comparePasswords } = require('./bcryptUtils');
const Usuario = require('./models/Usuario');

const router = express.Router();

router.post('/inicio-sesion', async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        // Buscar el usuario por correo
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).send('Correo o contraseña incorrectos');
        }

        // Verificar la contraseña hasheada
        const contraseñaValida = await comparePasswords(contraseña, usuario.contraseña);
        if (!contraseñaValida) {
            return res.status(400).send('Correo o contraseña incorrectos');
        }

        res.status(200).send('Inicio de sesión exitoso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al iniciar sesión');
    }
});

module.exports = router;
