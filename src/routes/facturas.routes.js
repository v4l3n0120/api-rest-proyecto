import { Router } from "express"
import { getFacturas, createFactura, updateFactura, deleteFacturas, getFactura, updateFacturas } from "../controllers/facturas.controller.js"


const router = Router()

router.get('/facturas',getFacturas)
router.get('/facturas/:id',getFactura)
router.post('/facturas',createFactura)
router.put('/facturas/:id',updateFacturas)
router.patch('/facturas/:id',updateFactura)
router.delete('/facturas/:id',deleteFacturas)

export default router