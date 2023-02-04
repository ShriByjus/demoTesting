const parkedOrderThirdMockData = require('../../data/salesParkedOrderThird.json');
//const faker = require('faker');
//const { status } = require('../../data/enum');
const mockData = async ({ salesOrderId, salesSubOrderId }) => {
    const parkedOrderThird = byjus.nativeClient.db('byjus-nucleus').collection('oms_parked_orders');
    var parkedOrderId = generateSalesParkedOrderId(salesOrderId);

    await parkedOrderThird.updateOne({
        parkedOrderId
    }, {
        $set: {
            ...parkedOrderThirdMockData,
            salesOrderId,
            salesSubOrderId,
            parkedOrderId,
            
            source: 'kart_mock_data',
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
        }
    }, {
        upsert: true
    });

    return parkedOrderId;
}

var generateSalesParkedOrderId = (salesOrderId) => {
    var formattedOrderId = salesOrderId && salesOrderId.split('-')[1];

    return `PO3-${formattedOrderId}`;
}

module.exports = {
    mockData
}