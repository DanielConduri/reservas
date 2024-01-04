import { Router } from "express";
import productosRoute from './productos.routes.js';

const router = Router();

router.get('/info', (req, res) =>{
    res.json({
        Nombre: "Daniel Tene",
        Descripcion: "Prueba Parcial II",
        Semestre: "Octavo"
    })
})

router.use('/productos', productosRoute);



export default router;