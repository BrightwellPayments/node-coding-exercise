const Order = require('../portfolio/models/Order');
const Company = require('../portfolio/models/Company');
const LineItem = require('../portfolio/models/LineItem');
const process = require('../portfolio/services/PlaceOrderService');

beforeEach(async () => {
    await cleanCompaniesAndOrders();
});

test('createOrder returns total amount and line items', async () => {
    const companies = [
        { Name: 'Apple' },
        { Name: 'Google' },
        { Name: 'Microsoft' }
    ];

    await createCompanies(companies);

    const processedOrder = await process(100.00, companies);
    const savedOrder = await Order.findByPk(processedOrder.Id, {
        include: [LineItem]
    });

    console.log(savedOrder)

    expect(savedOrder.Amount).toBe(100);
    expect(savedOrder.Fees).toBe(3.50);
    expect(savedOrder.TotalAmount).toBe(100);
    expect(savedOrder.LineItems.reduce((sum, li) => sum + li.Amount, 0)).toBe(96.50);
    expect(savedOrder.LineItems[0].Amount).toBeCloseTo(32.17);
    expect(savedOrder.LineItems[1].Amount).toBeCloseTo(32.17);
    expect(savedOrder.LineItems[2].Amount).toBeCloseTo(32.17);
});

async function cleanCompaniesAndOrders() {
    await LineItem.destroy({ where: {} });
    await Company.destroy({ where: {} });
    await Order.destroy({ where: {} });
}

async function createCompanies(companies) {
    await Company.bulkCreate(companies);
}