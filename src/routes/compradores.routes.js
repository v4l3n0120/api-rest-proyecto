import { Router } from "express"
import { getCompradores, createCompradores, updateComprador, deleteComprador, getComprador, updateCompradores } from "../controllers/compradores.controller.js"


const router = Router()

router.get('/compradores',getCompradores)
router.get('/compradores/:id',getComprador)
router.post('/compradores',createCompradores)
router.put('/compradores/:id',updateComprador)
router.patch('/compradores/:id',updateCompradores)
router.delete('/compradores/:id',deleteComprador)

export default router