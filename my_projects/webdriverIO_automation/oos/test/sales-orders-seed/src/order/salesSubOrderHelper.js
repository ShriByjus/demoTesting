const orderMockData = require('../../data/salesSubOrder.json');
const faker = require('faker');
const { status } = require('../../data/enum');
const mockData = async ({ salesOrderId, referenceId }) => {
    const SalesSubOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_sales_sub_orders');
    const salesSubOrderId = generateSalesSubOrderId(salesOrderId);

    const paymentDetails = {
        "payments" : [
            {
                "provider" : "GPAY",
                "referenceId" : referenceId,
                "amount" : 30000,
                "type" : "DOWN_PAYMENT",
                "mobileNo" : "8277922328",
                "currency" : "",
                "attachments" : [
                 ],
                "isActive" : true
            } 
        ],
        "paymentMethod" : "NGP",
        "paymentStatus" : "NOT_PAID",
        "paymentMode" : "GPAY",
        "paymentAmountSplit" : "30000",
        "totalAmount" : 30000
    };

    await SalesSubOrder.updateOne({
        salesSubOrderId
    }, {
        $set: {
            ...orderMockData,
            salesOrderId,
            salesSubOrderId,
            // status:faker.random.arrayElement(status),
            paymentDetails,
            source: 'kart_mock_data',
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
        }
    }, {
        upsert: true
    });

    return salesSubOrderId;
}

const generateSalesSubOrderId = (salesOrderId) => {
    const formattedOrderId = salesOrderId && salesOrderId.split('-')[1];

    return `SSO1-${formattedOrderId}`;
}

module.exports = {
    mockData
}