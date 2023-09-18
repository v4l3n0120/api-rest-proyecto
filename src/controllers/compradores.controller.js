import { pool } from '../db.js'


export const getCompradores = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM compradores")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const getComprador = async(req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM compradores WHERE id = ?",[req.params.id])
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
export const createCompradores = async(req, res)=>{ 
    try {
        const {nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo} = req.body
        const [rows] = await pool.query("INSERT INTO compradores (nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo) VALUES (?,?,?,?,?,?,?)",[nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo])
        res.send({
            id:rows.insertId,
            nombre, 
            apellido, 
            codigopostal, 
            direccion, 
            telefonofijo, 
            telefonocelular, 
            correo
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateCompradores = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo} = req.body
        const [result] = await pool.query("UPDATE compradores SET nombre=?, apellido=?, codigopostal=?, direccion=?, telefonofijo=?, telefonocelular=?, correo=?, WHERE id =?",[nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'comprador no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM compradores WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateComprador = async(req, res)=> {
    try {
        const {id} = req.params
        const {nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo} = req.body
        const [result] = await pool.query("UPDATE compradores SET nombre = IFNULL(?,nombre), apellido=IFNULL(?,apellido), codigopostal=IFNULL(?,codigopostal), direccion=IFNULL(?,direccion), telefonofijo=IFNULL(?,telefonofijo), telefonocelular=IFNULL(?,telefonocelular), correo=IFNULL(?,correo) WHERE id =?",[nombre, apellido, codigopostal, direccion, telefonofijo, telefonocelular, correo, id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'comprador no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM compradores WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteComprador = async(req, res)=> {
    try {
        const [result] = await pool.query("DELETE FROM compradores WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"comprador no encontrado"
        })
        res.send("comprador eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}