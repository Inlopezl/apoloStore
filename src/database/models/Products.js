module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }
    let config={
        tableName: "products",
        timestamps: false
    };
  
    const Products = sequelize.define(alias, cols, config);
    return Products;
}

  