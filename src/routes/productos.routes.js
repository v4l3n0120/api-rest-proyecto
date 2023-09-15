import { Router } from "express"
import { getProductos, createProductos, updateProducto, deleteProducto, getProducto, updateProductos } from "../controllers/Productos.controller.js"


const router = Router()

router.get('/Productos',getProductos)
router.get('/Productos/:id',getProducto)
router.post('/Productos',createProductos)
router.put('/Productos/:id',updateProducto)
router.patch('/Productos/:id',updateProductos)
router.delete('/Productos/:id',deleteProducto)

export default router