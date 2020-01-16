///Models Producto
import {Schema, model} from 'mongoose';

let productoSchema = new Schema(
    {
        nombre:
        {
            type:String, required:[true, 'El nombre es requerido']
        },
        precioUni:
        {
            type:Number, required:[true, 'El precio es requerido']
        },
        descripcion:
        {
            type:String, required:[false]
        },
        disponible:
        {
            type:Boolean, required:[true, 'El producto esta disponible'],default:true
        },
        categoria:
        {
            type:Schema.Types.ObjectId,required:true, ref:'Categoria'
        }
    });

///Exportar modelo del proyecto:    
export default model('Producto',productoSchema);

