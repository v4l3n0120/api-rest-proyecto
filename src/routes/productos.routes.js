import { Router } from "express"
import { getProductos, createProductos, updateProductos, deleteProductos, getProductos, updateProductos } from "../controllers/Productos.controller.js"


const router = Router()

router.get('/Productos',getProductos)
router.get('/Productos/:id',getProductos)
router.post('/Productos',createProductos)
router.put('/Productos/:id',updateProductos)
router.patch('/Productos/:id',updateProductos)
router.delete('/Productos/:id',deleteProductos)

export default router