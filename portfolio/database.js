const { Sequelize } = require('sequelize');
const Order = require('./models/Order');
const LineItem = require('./models/LineItem');
const Company = require('./models/Company');

const sequelize = new Sequelize('portfolio', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;