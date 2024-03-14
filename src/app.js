import routes from './Routes.js'

// importar express
import express from 'express';

// criar uma instancia do express
const app = express();

//Usar o Router
app.use(routes)

// indicar para o express ler body com JSON
app.use(express.json());


export default app;
