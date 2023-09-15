import { pool } from '../db.js'


export const getFacturas = async(req, res)=> {
    try {
        //throw new Error('Mi error')
        const [rows] = await pool.query("SELECT * FROM facturadores")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const getFactura = async(req, res)=> {
    try {
        //throw new Error('Mi error')
        const [rows] = await pool.query("SELECT * FROM facturar WHERE id = ?",[req.params.id])
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
        //throw new Error('Mi error')
        const {name,salary} = req.body
        const [rows] = await pool.query("INSERT INTO facturar (name,salary) VALUES (?,?)",[name,salary])
        res.send({
            id:rows.insertId,
            name, 
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateFactura = async(req, res)=> {
    try {
        //throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE facturar SET name =?, salary=? WHERE id =?",[name,salary,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM facturadores WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateFacturas = async(req, res)=> {
    try {
        //throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE facturadores SET name = IFNULL(?,name), salary=IFNULL(?,salary) WHERE id =?",[name,salary,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM facturadores WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}

export const deleteFacturas = async(req, res)=> {
    try {
        //throw new Error('Mi error')
        const [result] = await pool.query("DELETE FROM facturar WHERE id = ?",[req.params.id])
        if (result.affectedRows <=0) return res.status(404).json ({
            message:"Empleado no encontrado"
        })
        res.send("Empleado eliminado")
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}