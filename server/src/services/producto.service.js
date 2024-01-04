import productoRepository from '../repositories/productoRepository.js';
import { sequelize } from '../database/database.js';

const crearProducto = async (parameter) => {
    try {
        const newUser = await productoRepository.crearProducto(parameter);
        if (newUser) {
            return {
                status: true,
                message: "User created successfully",
                body: newUser,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};

const obtenerProducto = async () => {

    try {
        const productos = await productoRepository.obtenerProducto();
        if (productos) {
            return {
                status: true,
                message: "User successfully",
                body: users,
            }
        }
    } catch (error) {
        console.error(error);
        return error;
    }

};

export default {
    crearProducto,
    obtenerProducto
}
