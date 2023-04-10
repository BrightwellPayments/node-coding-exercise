const Company = require('./Company');
const Order = require('./Order');
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const LineItem = sequelize.define('line_items', {
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
    CompanyId: {
        type: DataTypes.STRING,
        field: 'company_id'
    },
    OrderId: {
        type: DataTypes.INTEGER,
        field: 'order_id'
    },
}, {
    timestamps: false,
});

LineItem.belongsTo(Order);
LineItem.belongsTo(Company);


module.exports = LineItem;