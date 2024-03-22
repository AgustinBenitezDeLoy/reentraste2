const jwt = require('jsonwebtoken');

// Función para generar un token JWT
function generateToken(payload) {
    return jwt.sign(payload, 'TuClaveSecreta', { expiresIn: '1h' }); // Cambia esto por una clave secreta segura
}

// Función para verificar un token JWT
function verifyToken(token) {
    return jwt.verify(token, 'TuClaveSecreta'); // Cambia esto por la misma clave secreta utilizada para firmar el token
}

module.exports = { generateToken, verifyToken };
