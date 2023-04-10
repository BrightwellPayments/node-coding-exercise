const LineItem = require('./LineItem');
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Order = sequelize.define('orders', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    Amount: {
        type: DataTypes.DECIMAL,
        field: 'amount'
    },
    Fees: {
        type: DataTypes.DECIMAL,
        field: 'fees'
    }
}, {
    timestamps: false
});

Order.hasMany(LineItem);

module.exports = Order;