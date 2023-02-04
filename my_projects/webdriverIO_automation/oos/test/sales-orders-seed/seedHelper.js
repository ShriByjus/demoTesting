const fs = require('fs');
const Promise = require('bluebird');

const mockData = async () => {
    const totalRecordCount = 1;
    const pageSize = 1;
    const totalPage = Math.ceil(totalRecordCount / pageSize);
    let salesOrderId;
    console.log(`Total number of records seeding ${totalRecordCount}`);
    for (let page = 1; page <= totalPage; page++) {
        const records = new Array(pageSize).fill('mohnish@byjus.com');
        salesOrderId = await generateData(page, records, totalRecordCount);
        updateSalesOrderId(salesOrderId);
    }
    byjus.nativeClient.close();
}

const generateData = async (page, records, totalRecordCount) => {
    const { mockData: googlePayMockData } = require('./src/payment/googlePayHelper');
    // const {mockData : chequeMockData } = require('./src/payment/chequeHelper')
    const { mockData: salesOrderMockData } = require('./src/order/salesOrderHelper');
    const { mockData: salesSubOrderMockData } = require('./src/order/salesSubOrderHelper');
    // const { mockData: packageIDMockData } = require('./src/order/packageIDHelper');
    // const { mockData: shipmentOrderMockData } = require('./src/order/shipmentOrderHelper');

    const emailId = "mohnish@byjus.com";
    console.log(`Generating data for ${emailId} record`);
    let warehouses = ["6d_ibc_knowledge_park_bengaluru", "criticalog_warehouse_delhi"];
    const warehouse = warehouses[Math.floor(Math.random() * warehouses.length)];
    const referenceId = await googlePayMockData();
    // const referenceId = await chequeMockData();
    const salesOrderId = await salesOrderMockData(referenceId);
    const salesSubOrderId = await salesSubOrderMockData({ salesOrderId ,referenceId});
    // const packageId = await packageIDMockData({ salesOrderId ,salesSubOrderId});
    // const shipmentOrderId = await shipmentOrderMockData({ salesOrderId, salesSubOrderId, warehouse });
    console.log('Generating Sales Order Id', salesOrderId , salesSubOrderId);
    // console.log('Generating Sales Order Id', salesOrderId,packageId);
    return salesOrderId;

}

const updateSalesOrderId = (salesOrderId) => {
    // console.log(__dirname , '..');
    console.log(salesOrderId)
    try {
        let json = JSON.stringify(salesOrderId);
        fs.writeFileSync('orderId.json', json)
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    mockData,
    generateData,
}