import routes from './Routes.js'

// importar express
import express from 'express';

// criar uma instancia do express
const app = express();

// indicar para o express ler body com JSON
app.use(express.json());

//Usar o Router
app.use(routes)

export default app;
