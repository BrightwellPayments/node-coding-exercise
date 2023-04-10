const Order = require('../models/order');

const FeeRate = 0.035;

async function process(amount, companies) {
    const fees = amount * FeeRate;
    const lineItems = buildLineItems(amount, fees, companies);

    // Assuming you have a database connection set up and an Order model defined
    // You can use an ORM like Sequelize or Mongoose to interact with the database
    var order = await Order.create({
        Amount: amount,
        Fees: fees,
        TotalAmount: amount - fees,
        LineItems: lineItems
    });

    return order.dataValues;
}

function buildLineItems(amount, fees, companies) {
    const lineItems = [];

    for (const company of companies) {
        const lineItemAmount = (amount - fees) / companies.length;
        lineItems.push({ Amount: lineItemAmount, Company: company });
    }

    return lineItems;
}

module.exports = process;