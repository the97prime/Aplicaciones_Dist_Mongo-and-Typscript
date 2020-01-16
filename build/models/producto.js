"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///Models Producto
const mongoose_1 = require("mongoose");
let productoSchema = new mongoose_1.Schema({
    nombre: {
        type: String, required: [true, 'El nombre es requerido']
    },
    precioUni: {
        type: Number, required: [true, 'El precio es requerido']
    },
    descripcion: {
        type: String, required: [false]
    },
    disponible: {
        type: Boolean, required: [true, 'El producto esta disponible'], default: true
    },
    categoria: {
        type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Categoria'
    }
});
///Exportar modelo del proyecto:    
exports.default = mongoose_1.model('Producto', productoSchema);
