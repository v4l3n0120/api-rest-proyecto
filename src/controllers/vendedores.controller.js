import { pool } from '../db.js'


export const getVendedores = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM vendedores")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const getVendedor = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM vendedores WHERE id = ?",[req.params.id])
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
export const createVendedores = async(req, res)=>{ 
    try {
        const {nombre, apellido, email, telefono, direccion, fecharegistro} = req.body
        const [rows] = await pool.query("INSERT INTO vendedores (nombre, apellido, email, telefono, direccion, fecharegistro) VALUES (?,?,?,?,?,?)",[nombre, apellido, email, telefono, direccion, fecharegistro])
        res.send({
            id:rows.insertId,
            nombre, 
            apellido, 
            email, 
            telefono, 
            direccion, 
            fecharegistro
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateVendedores = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, email, telefono, direccion, fecharegistro} = req.body
        const [result] = await pool.query("UPDATE vendedores SET nombre=?, apellido=?, email=?, telefono=?, direccion=?, fecharegistro=?, WHERE id =?",[nombre, apellido, email, telefono, direccion, fecharegistro, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM vendedores WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateVendedor = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, email, telefono, direccion, fecharegistro} = req.body
        const [result] = await pool.query("UPDATE vendedores SET nombre= IFNULL(?,nombre), apellido=IFNULL(?,apellido), email=IFNULL(?,email), telefono=IFNULL(?,telefono), direccion=IFNULL(?,direccion), fecharegistro=IFNULL(?,fecharegistro) WHERE id =?",[nombre, apellido, email, telefono, direccion, fecharegistro, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'vendedor no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM vendedores WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteVendedores = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM vendedores WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"vendedor no encontrado"
        })
        res.send("vendedor eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}