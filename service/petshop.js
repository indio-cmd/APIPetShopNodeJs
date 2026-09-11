import BancoDeDados from "../repository/petshop.js"

class ServicePetshop{

   async Buscar(){
         return  BancoDeDados.Find()
    }

   async Buscarum(id){
        if(!id){
            throw new Error("Id obrigátorio!!")
        }
        const petshop8 = await BancoDeDados.Find(id)

if(!petshop8){
    throw new Error ("Horario marcado não encontrado")
    
}

return petshop8

    }

   async Criar(id, nome, telefone, pago){
        
        if(!id || !nome || !telefone || pago == null){
            throw new Error ("Parametros inválidos")
            
        }

        const petshop = {id, nome, telefone, pago}

       const  petshopcriar = await BancoDeDados.Create(petshop) 

       return petshopcriar
    }

    Alterar(id, nome, telefone, pago){
        if(!id){
            throw new Error("Id obrigatorio!!")
        }

         const petshop3 = BancoDeDados.find(it => it.id === id)

        if(!petshop3){
            throw new Error ("Hora não encontrada")
        }

        petshop3.nome = nome
        petshop3.telefone = telefone
        petshop3.pago = pago

        return petshop3
    }

    Deletar(id){
        if(!id){
            throw new Error("id obrigatório")
        }
        const petshop4 = BancoDeDados.findIndex(it => it.id === id)


if(petshop4 === -1){
    throw new Error ("Atendimento não encontrado")
}

BancoDeDados.splice(petshop4, 1)

return petshop4
    }

Pagamento(id){
    if(!id){
        throw new Error("id obrigátorio")
    }

    const petshop5 = BancoDeDados.find(it => it.id === id)

if(!petshop5){
    throw new Error ("Pagamento não encontrado")
}

petshop5.pago = true

return petshop5
}

}

export default new ServicePetshop