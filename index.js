const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    const ahora = new Date().toLocaleString('es-MX');
    
    res.end(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo - Node.js</title>
    <style>
        body {font-family: Arial, sans-serif; text-align: center; margin-top: 100px; background: #f0f2f5;}
        h1 {color: #28a745; font-size: 3em;}
    </style>
</head>
<body>
    <h1>¡Hola Mundo desde Node.js!</h1>
    <p>Este contenido se generó 100% en el servidor</p>
    <p>Versión de Node.js: <strong>${process.version}</strong></p>
    <p>Fecha y hora del servidor: <strong>${ahora}</strong></p>
    <hr>
    <small>Ejemplo para el foro de programación web - Moisés</small>
</body>
</html>
    `);
});

const PORT = process.env.PORT || 3000;
servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});