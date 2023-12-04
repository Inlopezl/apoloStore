let db = require("../database/models/index");

const service = {
    findAll: async() => {
        let products = await db.Products.findAll();        

        return products;
    },
    findById: async(id) => {
        let products = await db.Products.findOne({
            where : {
                id: id
            }
        });

        return products;
    },
    create:async(data)=>{
        let clothNew={
            name: data.name,
            category_id: data.category_id,
            color_id: data.category_id,
            price: data.price,
            description: data.description
        }
        //panes.push(panACrear);
        db.Products.create(clothNew)
    },
    delete: async (id) => {
        await db.Products.destroy({
            where: {
                id: id
            }
        });
    },
    update:async(data,id)=>{
        let clothEdit = {
            name: data.name,
            category_id: data.category_id,
            color_id: data.category_id,
            price: data.price,
            description: data.description
        }
        db.Products.update(clothEdit,{where:{id:id}})
    }

}

module.exports = service;