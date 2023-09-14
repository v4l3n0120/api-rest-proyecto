import { Router } from "express"
import { getCompradores, createCompradores, updateCompradores, deleteCompradores, getCompradores, updateCompradores } from "../controllers/compradores.controller.js"


const router = Router()

router.get('/compradores',getCompradores)
router.get('/compradores/:id',getCompradores)
router.post('/compradores',createCompradores)
router.put('/compradores/:id',updateCompradores)
router.patch('/compradores/:id',updateCompradores)
router.delete('/compradores/:id',deleteCompradores)

export default router