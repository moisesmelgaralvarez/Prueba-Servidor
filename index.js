const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Información del servidor (igual que en PHP)
    const fecha = new Date().toLocaleString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const version = process.version; // Versión de Node.js

    // HTML idéntico al tuyo de PHP
    const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Desde Servidor</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            margin-top: 80px;
            background: #f4f4f9;
        }
        h1 {
            color: #7c4dff;
        }
    </style>
</head>
<body>
    <h1>¡Hola Mundo desde Node.js!</h1>
    <p>Mostrando contenido desde el Servidor.</p>
    <p>Versión de Node.js: <strong>${version}</strong></p>
    <p>Fecha y hora del servidor: <strong>${fecha}</strong></p>
    <p>Creado por: <strong>Moisés Armando Melgar Álvarez</strong></p>
    <hr>
    <small>Dios les bendiga a todos</small>
</body>
</html>
    `;

    res.end(html);
});

// Puerto correcto para Render (y cualquier hosting)
const PORT = process.env.PORT || 10000;

servidor.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en puerto ${PORT}`);
});
