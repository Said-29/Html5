'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Products', [
 {
 name: 'Sephora Skin Care',
 prod_type:'beauty',
 price:'78',
 instock:'23',
 image:'/img/beauty/BEA01.jpg',
 createdAt: new Date(),
 updatedAt: new Date()
 },
 {
 name: 'Lysol Aerosol',
 prod_type:'cleaning',
 price:'34',
 instock:'2',
 image:'/img/cleaning/CLE01.jpg',
 createdAt: new Date(),
 updatedAt: new Date()
 },
 {
 name: 'Cleanex',
 prod_type:'cosmetic',
 price:'12',
 instock:'56',
 image:'/img/cosmetic/COS01.jpg',
 createdAt: new Date(),
 updatedAt: new Date()
 },
 {
 name: 'Glycolic Acid Toning Solution',
 prod_type:'beauty',
 price:'23',
 instock:'4',
 image:'/img/beauty/BEA02.jpg',
 createdAt: new Date(),
 updatedAt: new Date()
 },
 ], {})
 },
 async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('Products', null, {});
 }
};
