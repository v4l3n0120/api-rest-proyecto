import { pool } from '../db.js'


export const getProductos = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM productos")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const getProducto = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM productos WHERE id = ?",[req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message: "No existe un registro con ese id"
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const createProductos = async(req, res)=>{ 
    try {
        const {precio, stock, descripcion, fecha_creacion} = req.body
        const [rows] = await pool.query("INSERT INTO productos (precio, stock, descripcion, fecha_creacion) VALUES (?,?,?,?)",[precio, stock, descripcion, fecha_creacion])
        res.send({
            id:rows.insertId,
            precio, 
            stock, 
            descripcion, 
            fecha_creacion
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateProducto = async(req, res)=> {
    try {
        const {id} = req.params
        const {precio, stock, descripcion, fecha_creacion} = req.body
        const [result] = await pool.query("UPDATE productos SET precio=?, stock=?, descripcion=?, fecha_creacion=?, WHERE id =?",[precio, stock, descripcion, fecha_creacion, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'producto no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM productos WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateProductos = async(req, res)=> {
    try {
        const {id} = req.params
        const {precio, stock, descripcion, fecha_creacion} = req.body
        const [result] = await pool.query("UPDATE productos SET precio= IFNULL(?,precio), stock=IFNULL(?,stock), descripcion=IFNULL(?,descripcion), fecha_creacion=IFNULL(?,fecha_creacion) WHERE id =?",[precio, stock, descripcion, fecha_creacion, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'producto no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM productos WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteProducto = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM productos WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"producto no encontrado"
        })
        res.send("producto eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}