import ServicePetshop from "../service/petshop.js"

class ControllerPetshop{

 async Buscar(req, res)  {
    try {
        
const buscar = await ServicePetshop.Buscar()

        res.status(201).send({menssagem: buscar})
    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}
 
async Buscarum (req, res)  {
    try {
        const id = req.params.id
 
        const buscarum = await ServicePetshop.Buscarum(id)

res.status(201).send({mensagem: buscarum})

    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

 async Criar (req, res)  {
   try {
        const {id, nome, telefone, pago} = req.body

const petshop6 =  await ServicePetshop.Criar(id, nome, telefone, pago)

      res.status(201).send({mensagem: "Atendimento Marcado com sucesso!" , petshop: petshop6 })
  } catch (error) {
       res.status(500).send({mensagem: error.message})
    }
 }

async Alterar(req, res)  {
    try {
        const id = Number(req.params.id) 
        const {nome, telefone, pago} = req.body

     await   ServicePetshop.Alterar(id, nome, telefone, pago)

        res.status(201).send({mensagem: "Atendimento alterado com sucesso!"})

    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

async Deletar (req, res) {
    try {
        const id = Number(req.params.id)

await ServicePetshop.Deletar(id)

res.status(201).send({mensagem: "Atendimento deletado com sucesso"})
    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}
 
async Pagamento(req, res) {
    const id = Number(req.params.id)

await ServicePetshop.Pagamento(id)

res.status(201).send({mensagem: "PAGO COM SUCESSO"})

}

}

export default new ControllerPetshop