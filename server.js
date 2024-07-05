const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:8080', // Reemplaza con la URL de tu frontend
  methods: ['GET', 'POST'], // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Encabezados permitidos
}));

// Ruta para recibir los datos del frontend
app.post('/upload', (req, res) => {
  console.log(req.body); // Mostrará los datos en la consola del servidor
  res.status(200).json({ message: 'Datos recibidos correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
