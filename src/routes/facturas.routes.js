import { Router } from "express"
import { getFacturas, createFacturas, updateFacturas, deleteFacturas, getFacturas, updateFacturas } from "../controllers/facturas.controller.js"


const router = Router()

router.get('/facturas',getFacturas)
router.get('/facturas/:id',getFacturas)
router.post('/facturas',createFacturas)
router.put('/facturas/:id',updateFacturas)
router.patch('/facturas/:id',updateFacturas)
router.delete('/facturas/:id',deleteFacturas)

export default router