// isAdmin.js

// Middleware de autorización para verificar el rol de administrador
const isAdmin = (req, res, next) => {
    // Verificar si el usuario tiene el rol de administrador
    if (req.user && req.user.rol === 'administrador') {
        next(); // El usuario tiene permiso de administrador, continúa con la siguiente función
    } else {
        res.status(403).send('Acceso denegado'); // El usuario no tiene permiso de administrador
    }
};

module.exports = isAdmin;
