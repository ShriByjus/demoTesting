const mockData = async () => {
    const SalesOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_sales_orders');
    const SalesSubOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_sales_sub_orders');
    const ShipmentOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_shipment_orders');

    await SalesOrder.deleteMany({
        source: 'invoice_mock_data'
    });
    await SalesSubOrder.deleteMany({
        source: 'invoice_mock_data'
    });
    await ShipmentOrder.deleteMany({
        source: 'invoice_mock_data'
    });

    console.log("Housekeeping completed");
    byjus.nativeClient.close();
}

module.exports = { mockData }