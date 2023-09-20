import { pool } from '../db.js'


export const getFacturas = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM facturas")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const getFactura = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM facturas WHERE id = ?",[req.params.id])
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
export const createFactura = async(req, res)=>{ 
    try {
        const {nombre, apellido, codigopostal, direccion, telefonofijo, correo} = req.body
        const [rows] = await pool.query("INSERT INTO facturas (nombre, apellido, codigopostal, direccion, telefonofijo, correo) VALUES (?,?,?,?,?,?)",[nombre, apellido, codigopostal, direccion, telefonofijo, correo])
        res.send({
            id:rows.insertId,
            nombre, 
            apellido,
            codigopostal,
            direccion, 
            telefonofijo,
            correo 
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateFactura = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, codigopostal, direccion, telefonofijo, correo} = req.body
        const [result] = await pool.query("UPDATE facturas SET nombre =?, apellido=?, codigopostal=?, direccion=?, telefonofijo=?, correo=?, WHERE id =?",[nombre, apellido, codigopostal, direccion, telefonofijo, correo, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'factura no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM facturas WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateFacturas = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, codigopostal, direccion, telefonofijo, correo } = req.body
        const [result] = await pool.query("UPDATE facturas SET nombre= IFNULL(?,nombre), apellido=IFNULL(?,apellido) , codigopostal=IFNULL(?,codigopostal), direccion=IFNULL(?,direccion), telefonofijo=IFNULL(?,telefonofijo), correo=IFNULL(?,correo) WHERE id =?",[nombre, apellido, codigopostal, direccion, telefonofijo, correo,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'factura no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM facturas WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteFacturas = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM facturas WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"factura no encontrado"
        })
        res.send("factura eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}