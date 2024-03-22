const bcrypt = require('bcrypt');

// Función para hashear una contraseña
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

// Función para comparar una contraseña con un hash
async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = { hashPassword, comparePasswords };

