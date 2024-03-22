const expressSession = require('express-session');

// Configuración de express-session
const session = expressSession({
    secret: 'TuSecreto', // Cambia esto por una cadena de texto aleatoria
    resave: false,
    saveUninitialized: false
});

module.exports = session;
