const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Company = sequelize.define('companies', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    Name: {
        type: DataTypes.STRING,
        field: 'name'
    }
}, {
    timestamps: false
});

module.exports = Company;