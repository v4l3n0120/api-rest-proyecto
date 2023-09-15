import { Router } from "express"
import { getVendedores, createVendedores, updateVendedores, deleteVendedor, getVendedor, updateVendedor } from "../controllers/vendedores.controller.js"


const router = Router()

router.get('/vendedores',getVendedores)
router.get('/vendedores/:id',getVendedor)
router.post('/vendedores',createVendedores)
router.put('/vendedores/:id',updateVendedor)
router.patch('/vendedores/:id',updateVendedores)
router.delete('/vendedores/:id',deleteVendedor)

export default router