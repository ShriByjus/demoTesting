const parkedOrderMockData = require('../../data/salesParkedOrder.json');
const mockData = async ({ salesOrderId, salesSubOrderId }) => {
    const parkedOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_parked_orders');
    const parkedOrderId = generateSalesParkedOrderId(salesOrderId);

    await parkedOrder.updateOne({
        parkedOrderId
    }, {
        $set: {
            ...parkedOrderMockData,
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

const generateSalesParkedOrderId = (salesOrderId) => {
    const formattedOrderId = salesOrderId && salesOrderId.split('-')[1];

    return `PO1-${formattedOrderId}`;
}

module.exports = {
    mockData
}