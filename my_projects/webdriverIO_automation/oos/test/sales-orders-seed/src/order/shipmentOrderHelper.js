const orderMockData = require('../../data/shipmentOrder.json');

const mockData = async ({ salesOrderId, salesSubOrderId, warehouse }) => {
    const ShipmentOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_shipment_orders');
    const shipmentOrderId = generateShipmentOrderId(salesSubOrderId);

    await ShipmentOrder.updateOne({
        shipmentOrderId
    }, {
        $set: {
            ...orderMockData,
            salesOrderId,
            salesSubOrderId,
            shipmentOrderId,
            source: 'kart_mock_data',
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            warehouse
        }
    }, {
        upsert: true
    });

    return shipmentOrderId;
}

const generateShipmentOrderId = (salesSubOrderId) => {
    const formattedOrderId = salesSubOrderId && salesSubOrderId.split('-')[1];

    return `SHO1-${formattedOrderId}`;
}

module.exports = {
    mockData
}