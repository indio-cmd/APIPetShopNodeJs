import express from 'express'
import ControllerPetshop from '../controller/petshop.js'
const router = express.Router()

router.get("/buscar", ControllerPetshop.Buscar )

router.get("/buscarum/:id", ControllerPetshop.Buscarum)

 router.post("/criar", ControllerPetshop.Criar )

router.put("/alterar/:id", ControllerPetshop.Alterar )

router.delete("/deletar/:id", ControllerPetshop.Deletar)

router.post("/pagamento/:id",ControllerPetshop.Pagamento )

export default router