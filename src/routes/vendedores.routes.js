import { Router } from "express"
import { getVendedores, createVendedores, updateVendedores, deleteVendedores, getVendedor, updateVendedor } from "../controllers/vendedores.controller.js"


const router = Router()

router.get('/vendedores',getVendedores)
router.get('/vendedores/:id',getVendedor)
router.post('/vendedores',createVendedores)
router.put('/vendedores/:id',updateVendedores)
router.patch('/vendedores/:id',updateVendedor)
router.delete('/vendedores/:id',deleteVendedores)

export default router