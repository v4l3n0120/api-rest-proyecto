import { Router } from "express"
import { getproductos, createproductos, updateproductos, deleteproductos, getproductos, updateproductos } from "../controllers/compradores.controller.js"


const router = Router()

router.get('/compradores',getproductos)
router.get('/compradores/:id',getproductos)
router.post('/compradores',createproductos)
router.put('/compradores/:id',updateproductos)
router.patch('/compradores/:id',updateproductos)
router.delete('/compradores/:id',deleteproductos)

export default router