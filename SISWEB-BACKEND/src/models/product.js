"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
 class Product extends Model {
 /**
 * Helper method for defining associations.
 * This method is not a part of Sequelize lifecycle.
 * The `models/index` file will call this method automatically.
 */
 static associate(models) {
 // define association here
 }
 }
 Product.init(
 {
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