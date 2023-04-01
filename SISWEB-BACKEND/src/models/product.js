"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            this.belongsToMany(models.Order, {through: "OrderProducts"})
        }
    }
    Product.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        prod_type: {
            type: DataTypes.ENUM,
            values: ["cosmetic", "beauty", "cleaning"],
            defaultValue: "cosmetic",
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false,
        },
        instock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        image: DataTypes.STRING,
    },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};