import ModelPetshop from '../model/petshop.js'

class RepositoryPetShop{

async Find(){
    const buscartodos = await ModelPetshop.findAll()

    return buscartodos
}

async Buscarum(id){
    const buscarumm = await ModelPetshop.findByPk(id)

    return buscarumm
}

async Create(id, nome, telefone, pago){

    const criacao = {id, nome, telefone, pago} 

    const criar = await ModelPetshop.create(criacao)

    return criar
}

async Alterar(){
 }

async Deletar(){}

async Pagamento(){}

}

export default new RepositoryPetShop()