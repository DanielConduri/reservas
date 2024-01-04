import { Router } from "express";
import productoController from '../controllers/producto.controllers.js';

const router = Router();

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProducto);
export default router;