import { Producto } from '../models/producto.models.js'


const crearProducto = async (parameter) => {
    try {
        const producto = await Producto.create(
            {
                parameter
            } 
        );
        return producto;
    } catch (error) {
        console.log(error);
        return error;
    }
};


const obtenerProducto = async () => {
    try {
        const productos = await Producto.findAll();
        return productos;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default {
    crearProducto,
    obtenerProducto 
}