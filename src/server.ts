const express = require ('express');
import router from './router';

const app = express();

app.use('/', router); //Mapea las rutas del router

export default app;