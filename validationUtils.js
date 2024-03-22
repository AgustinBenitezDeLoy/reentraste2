// Función para validar un correo electrónico
function isValidEmail(email) {
    // Implementa tu lógica de validación de correo electrónico aquí
    return /\S+@\S+\.\S+/.test(email);
}

module.exports = { isValidEmail };
