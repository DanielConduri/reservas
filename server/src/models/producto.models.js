import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Producto = sequelize.define(
    'tb_producto',
    {
        int_producto_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        str_producto_nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        str_producto_codigo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        int_producto_costo: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        int_producto_cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        str_producto_tipo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    },
    {
        schema: "tienda",
        timestamps: false,
        freezeTableName: true,
    }
);