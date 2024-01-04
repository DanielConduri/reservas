import productoRepository from '../repositories/productoRepository.js';
import productoService from '../services/producto.service.js';

const crearProducto = async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = await productoService.crearProducto(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

const obtenerProducto = async (req, res) => {
    try {
        const users = await productoService.obtenerProducto();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Error en el servidor" + error,
            body: [],
        });
    }
}

export default {
    crearProducto,
    obtenerProducto
}