const parkedOrderSecondMockData = require('../../data/salesParkedOrderSecond.json');
//const faker = require('faker');
//const { status } = require('../../data/enum');
const mockData = async ({ salesOrderId, salesSubOrderId }) => {
    const parkedOrderSecond = byjus.nativeClient.db('byjus-nucleus').collection('oms_parked_orders');
    var parkedOrderId = generateSalesParkedOrderId(salesOrderId);

    await parkedOrderSecond.updateOne({
        parkedOrderId
    }, {
        $set: {
            ...parkedOrderSecondMockData,
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

    return `PO2-${formattedOrderId}`;
}

module.exports = {
    mockData
}