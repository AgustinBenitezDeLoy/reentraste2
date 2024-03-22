// Ruta para iniciar sesión de administrador
app.post('/admin/inicio-sesion', (req, res) => {
    const { nombreUsuario, contraseña } = req.body;
    // Verifica las credenciales de administrador
    if (nombreUsuario === 'admin' && contraseña === 'contraseñaAdmin') {
        res.status(200).send('Inicio de sesión de administrador exitoso');
    } else {
        res.status(401).send('Credenciales de administrador incorrectas');
    }
});
