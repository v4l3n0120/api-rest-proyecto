import { Router } from "express"
import { getVendedores, createVendedores, updateVendedores, deleteVendedores, getVendedores, updateVendedores } from "../controllers/vendedores.controller.js"


const router = Router()

router.get('/vendedores',getVendedores)
router.get('/vendedores/:id',getVendedores)
router.post('/vendedores',createVendedores)
router.put('/vendedores/:id',updateVendedores)
router.patch('/vendedores/:id',updateVendedores)
router.delete('/vendedores/:id',deleteVendedores)

export default router