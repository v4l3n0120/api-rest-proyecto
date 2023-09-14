import { pool } from '../db.js'


export const getCompradores = async(req, res)=> {
    try {
        throw new Error('Mi error')
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
        throw new Error('Mi error')
        const [rows] = await pool.query("SELECT * FROM comprador WHERE id = ?",[req.params.id])
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
        throw new Error('Mi error')
        const {name,salary} = req.body
        const [rows] = await pool.query("INSERT INTO compradores (name,salary) VALUES (?,?)",[name,salary])
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
export const updateComprador = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE comprador SET name =?, salary=? WHERE id =?",[name,salary,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
        })
        const [rows] = await pool.query('SELECT * FROM comprador WHERE id=?',[id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo va mal'
        })
    }
}
export const updateCompradores = async(req, res)=> {
    try {
        throw new Error('Mi error')
        const {id} = req.params
        const {name, salary} = req.body
        const [result] = await pool.query("UPDATE compradores SET name = IFNULL(?,name), salary=IFNULL(?,salary) WHERE id =?",[name,salary,id])
        if (result.affectedRows ==0) return res.status(404).json({
            message:'Empleado no encontrado'
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
        throw new Error('Mi error')
        const [result] = await pool.query("DELETE FROM comprador WHERE id = ?",[req.params.id])
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