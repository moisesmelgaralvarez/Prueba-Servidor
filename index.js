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
    <h1>¡Hola Mundo desde PHP!</h1>
    <p>Mostrando contenido desde el Servidor.</p>
    <p>Versión de PHP: <strong><?= $version ?></strong></p>
    <p>Fecha y hora del servidor: <strong><?= $fecha ?></strong></p>
    <p>Creado por: <strong> Moises Armando Melgar Alvarez</strong></p>
    <hr>
    <small>Dios les bendiga a todos</small>
</body>

</html>
    `);
});

const PORT = process.env.PORT || 3000;
servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
