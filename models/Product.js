const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
           },
           tittle: {
            type: DataTypes.STRING,
            allowNull:false
           },
           description: {
            type: DataTypes.STRING,
            allowNull:false
           },
           rating: {
            type: DataTypes.FLOAT,
            allowNull:false
           },
           image: {
            type: DataTypes.STRING
           }
    }, {
        tableName: 'products'
    });

    return Product;

}