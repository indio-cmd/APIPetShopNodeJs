import Database from "../config/database.js"


class ModelPetshop{
constructor(){
    this.model = Database.db.define("/Petshop", {
        id:{
            type: Database.db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome:{
            type: Database.db.Sequelize.STRING, 
        },

        telefone:{
            type: Database.db.Sequelize.INTEGER
        },

        pago:{
            type: Database.db.Sequelize.BOOLEAN,
            allowNull: false,
              defaultValue: false
        }

    })
}
}


export default new ModelPetshop().model