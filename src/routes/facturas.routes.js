import { Router } from "express"
import { getFacturas, createFacturas, updateFactura, deleteFactura, getFactura, updateFacturas } from "../controllers/factura.controller.js"


const router = Router()

router.get('/facturas',getFacturas)
router.get('/facturas/:id',getFactura)
router.post('/facturas',createFacturas)
router.put('/facturas/:id',updateFactura)
router.patch('/facturas/:id',updateFacturas)
router.delete('/facturas/:id',deleteFactura)

export default router