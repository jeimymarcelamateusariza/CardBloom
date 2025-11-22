import {Router} from 'express';

const router = Router();

//Rutas
router.get('/', (req, res) => {
    res.send('Hola Mundo desde Express');
});

export default router;