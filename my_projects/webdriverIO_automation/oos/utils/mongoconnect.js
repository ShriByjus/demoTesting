
const { MongoClient } = require('mongodb');
// let orderID = require("../../oos/testData/sales-orders-seed/orderId.json");
import { getRandomNum } from '../utils/function';
import { generateSalesOrderId } from '../utils/function';
import { generateSalesSubOrderId } from '../utils/function';
const salesSkusId = [];
const addOnItemsSkus = [];
const addressDetailsArr = [];
const customerDetailsArr = [];
const orderDetailsAndPaymentsArr = [];

// const salesOrderId = generateSalesOrderId();
// const salesSubOrderId = generateSalesSubOrderId(salesOrderId)
let randomVar = getRandomNum(4);
const salesOrderMockData = require('../data/salesOrder.json');
const salesSubOrderMockData = require('../data/salesSubOrder.json');

let current_date = new Date();
let current_iso_date = current_date.toISOString();
const { actionDetails } = require('../data/byjus.sales.sd.card.order');

class mongoConnect {

    constructor() {
        // Mongo URI
        this.url = process.env.MONGO_DB_URI;
        // Database Name
        this.dbByjusNucleus = process.env.DB_NAME;
        this.dbByjusLeado = process.env.DB_NAME_LEADO;

    }

    async getMongoClientByjusNucleus() {
        const client = new MongoClient(this.url)
        await client.connect()
        return client.db(this.dbByjusNucleus)
    }
    async getMongoClientByjusLeado() {
        const client = new MongoClient(this.url)
        await client.connect()
        return client.db(this.dbByjusLeado)
    }

    async getOtpFromDB(itemId) {
        let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_warehouse_inventories')
        let updateResult = await collection.findOne(
            { "itemId": itemId });
        let otp = updateResult['otpDetails'].otp;
        return otp;
    }

    async getAWBNumberFromDB() {
        let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_shipment_orders')
        let getResult = await collection.findOne(
            { "salesSubOrderId": "SSO1-2205160905560175" });
        let awbnumber = getResult['awbNumber'];
        return awbnumber;
    } 
    // async getSalesSKUs(salesOrderId) {
    //     let db = await this.getMongoClient();
    //     let collection = db.collection('oms_sales_orders')
    //     let getResult = await collection.findOne(
    //         { "salesOrderId": salesOrderId });
    //     let result = getResult['lineItems'][1];
    //     console.log("######" + getResult['lineItems'].length);
    //     let obj = result.skuId;
    //     console.log(obj);
    //     // return salesSkus;
    // }

    async getSalesSKUs(salesOrderId) {
        let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_sales_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });

        let skucount = getResult['lineItems'].length;
        for (let i = 1; i <= skucount; i++) {
            let result = getResult['lineItems'][i - 1];
            salesSkusId.push(result.skuId);

        }

        return salesSkusId;

    }

    async getAddOnItems(salesOrderId) {
        let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_sales_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });

        let skucount = getResult['addonLineItems'].length;
        for (let i = 1; i <= skucount; i++) {
            let result = getResult['addonLineItems'][i - 1];
            addOnItemsSkus.push(result.skuId);

        }

        return addOnItemsSkus;

    }

    async getAddressDetails(salesOrderId) {
        let db = await this.getMongoClientByjusLeado();
        let collection = db.collection('draft_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });

        let addressDetails = getResult['addressDetails'].billing;
        console.log(typeof (addressDetails));
        let country = addressDetails.country;
        let zipcode = addressDetails.zipcode;
        let state = addressDetails.state;
        let city = addressDetails.city;
        let addressLineOne = addressDetails.addressLine1;
        let addressLineTwo = addressDetails.addressLine2;
        addressDetailsArr.push(country, zipcode, state, city, addressLineOne, addressLineTwo);
        return addressDetailsArr;

    }

    async getCustomerDetails(salesOrderId) {
        let db = await this.getMongoClientByjusLeado();
        let collection = db.collection('draft_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });

        let customerDetails = getResult['customerDetails'];
        console.log(typeof (customerDetails));
        let customerId = customerDetails.customerId;
        let customerPhoneNo = customerDetails.parentMobileNo;
        let customerEmail = customerDetails.email;
        customerDetailsArr.push(customerId, customerPhoneNo, customerEmail);
        return customerDetailsArr;

    }

    async getOrderAndPaymentDetails(salesOrderId) {
        let db = await this.getMongoClientByjusLeado();
        let collection = db.collection('draft_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });
        let customerName = getResult['customerDetails'].parentName;
        let finalPrice = getResult['finalPrice'].toString();
        orderDetailsAndPaymentsArr.push(customerName, salesOrderId, finalPrice, finalPrice);
        return orderDetailsAndPaymentsArr;

    }


    // async addOderToSalesOrderCollection() {
    //     // This function will update gpay record sales email id based on reference id 
    //     let db = await this.getMongoClient();
    //     const collection = db.collection('oms_sales_orders');
    //     await collection.updateOne({ salesOrderId }, {
    //         $set: {
    //             byjusSalesOrderSdCard, salesSubOrderIds: [
    //                 `SSO1-${salesOrderId}`
    //             ]
    //         }
    //     }, { upsert: true });
    //     return salesOrderId;
    // }


    async addOrderToSalesOrderCollection(salesOrderId,salesOrderMockData) {
        // This function will update gpay record sales email id based on reference id 
        let db = await this.getMongoClientByjusNucleus();
        const collection = db.collection('oms_sales_orders');
        // await collection.insertOne({ "salesOrderId": salesOrderId });
        let updateResult = await collection.updateOne(
            { "salesOrderId": salesOrderId }, {
            $set: {

                ...salesOrderMockData,
                salesOrderId,
                salesSubOrderIds: [
                    `SSO1-${salesOrderId}`
                ],
                actionDetails,
                source: 'kart_mock_data',
                createdAt: current_date,
                updatedAt: current_date
            }
        },
            { upsert: true });
        return salesOrderId;
    }

    async addOderToSalesSubOrderCollection(salesOrderId,salesSubOrderId,salesSubOrderMockData) {
        // This function will update gpay record sales email id based on reference id 
        let db = await this.getMongoClientByjusNucleus();
        const collection = db.collection('oms_sales_sub_orders');
        // await collection.insertOne({ "salesOrderId": salesOrderId });
        let updateResult = await collection.updateOne(
            { "salesSubOrderId": salesSubOrderId }, {
            $set: {

                ...salesSubOrderMockData,
                salesOrderId,
                salesSubOrderId,
                packageIds: [
                    `P1-${salesSubOrderId}`
                ],
                packageDetails: [{
                    "packageId": `P1-${salesSubOrderId}`,
                    "awbNumber": Math.random().toString().slice(2, 11),
                    "shipmentOrderId": `SHO1-${salesSubOrderId}`,
                    "status": "manifested"
                }],
                source: 'kart_mock_data',
                createdAt: current_date,
                updatedAt: current_date
            }
        },
            { upsert: true });
        return salesSubOrderId;
    }

    async addOderToDraftOrdersCollection(draftOrderMockData, salesOrderId, salesSubOrderId) {

        let draftOrderId = "DO-" + salesOrderId.substring(3);
        let db = await this.getMongoClientByjusLeado();
        const collection = db.collection('draft_orders');
        let updateResult = await collection.updateOne(
            { "draftOrderId": draftOrderId }, {
            $set: {

                ...draftOrderMockData,
                "salesOrderId":salesOrderId,
                salesSubOrderIds: [
                    `SSO1-${salesOrderId}`
                ],
                createdAt: current_date,
                updatedAt: current_date,
            }
        },
            { upsert: true });
        return draftOrderId;
    }

  //  for smoke Testing 
  async getShipmentAWBNumberFromDB(ssoId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_shipment_orders')
    let getResult = await collection.findOne(
        { "shipmentOrderId": "SHO1-SSO1-" + ssoId });
    let awbnumber = getResult['awbNumber'];
    return awbnumber;
}

async getTabletItemIdFromDB(ssoId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_shipment_orders')
    let getResult = await collection.findOne(
        { "shipmentOrderId": "SHO1-SSO1-" + ssoId });
    let getAwbNumber = getResult['packageDetails'][0];
    let awbnumber = getAwbNumber.shipmentLineItems[0].itemId;
    return awbnumber;
}

async getSdCradItemIdFromDB(ssoId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_shipment_orders')
    let getResult = await collection.findOne(
        { "shipmentOrderId": "SHO1-SSO1-" + ssoId });
    let getAwbNumber = getResult['packageDetails'][0];
    let awbnumber = getAwbNumber.shipmentLineItems[1].itemId;
    return awbnumber;
}

    async addOrderToSalesOrderCollectionForSmokeTest(salesOrderId, salesOrderMockData) {
        // This function will update gpay record sales email id based on reference id 
        let db = await this.getMongoClientByjusNucleus();
        const collection = db.collection('oms_sales_orders');
        // await collection.insertOne({ "salesOrderId": salesOrderId });
        let updateResult = await collection.updateOne(
            { "salesOrderId": salesOrderId }, {
            $set: {

                ...salesOrderMockData,
                salesOrderId,
                salesSubOrderIds: [
                    `SSO1-${salesOrderId}`
                ],
                actionDetails,
                source: 'kart_mock_data',
                createdAt: current_date,
                updatedAt: current_date
            }
        },
            { upsert: true });
        return salesOrderId;
    }

    async addOrderToSalesSubOrderCollectionForSmokeTest(salesOrderId, salesSubOrderId, salesSubOrderMockData) {
        // This function will update gpay record sales email id based on reference id 
        let db = await this.getMongoClientByjusNucleus();
        const collection = db.collection('oms_sales_sub_orders');
        // await collection.insertOne({ "salesOrderId": salesOrderId });
        let updateResult = await collection.updateOne(
            { "salesSubOrderId": salesSubOrderId }, {
            $set: {

                ...salesSubOrderMockData,
                salesOrderId,
                salesSubOrderId,
                packageIds: [
                    `P1-${salesSubOrderId}`
                ],
                packageDetails: [{
                    "packageId": `P1-${salesSubOrderId}`,
                    "awbNumber": Math.random().toString().slice(2, 11),
                    "shipmentOrderId": `SHO1-${salesSubOrderId}`,
                    "status": "manifested"
                }],
                source: 'kart_mock_data',
                createdAt: current_date,
                updatedAt: current_date
            }
        },
            { upsert: true });
        return salesSubOrderId;
    }

    async getshipmentSdCradSkuFromDB(salesOrderId) {
        let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_sales_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });
        let salesSkuSdCard = getResult['shipmentLineItems'][1];
        let shipmentSdCardSku = salesSkuSdCard.skuId;
        return shipmentSdCardSku;
    
}
    async getshipmentTabletSkuFromDB(salesOrderId) {
        let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let shipmentTabletSkuId = getResult['shipmentLineItems'][0];
    let shipmentTabletSku = shipmentTabletSkuId.skuId;
    return shipmentTabletSku;

}
    async getsalesSdCradSkuFromDB(salesOrderId) {
        let db = await this.getMongoClientByjusNucleus();
            let collection = db.collection('oms_sales_orders')
            let getResult = await collection.findOne(
                { "salesOrderId": salesOrderId });
            let salesSkuSdCard = getResult['lineItems'][0];
            let salesSdCard = salesSkuSdCard.skuId;
            return salesSdCard;
        
    }
    async getsalesTabletSkuFromDB(salesOrderId) {
        let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_sales_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });
        let salesTabletSkuId = getResult['lineItems'][1];
        let salesTablet = salesTabletSkuId.skuId;
        return salesTablet;
    
}
async getsalesTabletSkuOneFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesTabletSkuId = getResult['lineItems'][3];
    let salesTablet = salesTabletSkuId.skuId;
    return salesTablet;

}
async getsalesTabletSkuComboFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesTabletSkuId = getResult['lineItems'][2];
    let salesTablet = salesTabletSkuId.skuId;
    return salesTablet;

}

async getsalesTabletSkuFromDBGrade6(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesTabletSkuId = getResult['lineItems'][3];
    let salesTablet = salesTabletSkuId.skuId;
    return salesTablet;
}

async getsalesTabletSkuNameFromDBGrade6(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameTablet = getResult['lineItems'][3];
    let salesTabletSkuName = salesSkuNameTablet.skuName;
    return salesTabletSkuName;

}

async getshipmentSdCradSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuSdCard = getResult['shipmentLineItems'][1];
    let shipmentSdCardSku = salesSkuSdCard.skuName;
    return shipmentSdCardSku;

}
async getshipmentTabletSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuSdCard = getResult['shipmentLineItems'][0];
    let shipmentSdCardSku = salesSkuSdCard.skuName;
    return shipmentSdCardSku;

}
async getsalesSdCradSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameSdCard = getResult['lineItems'][0];
    let salesSdCardSkuName = salesSkuNameSdCard.skuName;
    return salesSdCardSkuName;

}
async getsalesTabletSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameTablet = getResult['lineItems'][1];
    let salesTabletSkuName = salesSkuNameTablet.skuName;
    return salesTabletSkuName;

}
async getsalesTabletSkuNameOneFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameTablet = getResult['lineItems'][3];
    let salesTabletSkuName = salesSkuNameTablet.skuName;
    return salesTabletSkuName;

}
async getsalesComboTabletSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameTablet = getResult['lineItems'][2];
    let salesTabletSkuName = salesSkuNameTablet.skuName;
    return salesTabletSkuName;

}
async getsalesComboSdCradSkuFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_sales_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });
        let salesSkuSdCard = getResult['lineItems'][1];
        let salesSdCard = salesSkuSdCard.skuId;
        return salesSdCard;
    
}
async getsalesComboSdCradSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameSdCard = getResult['lineItems'][1];
    let salesSdCardSkuName = salesSkuNameSdCard.skuName;
    return salesSdCardSkuName;

}

async getshipmentSkuFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuSdCard = getResult['shipmentLineItems'][1];
    let shipmentSdCardSku = salesSkuSdCard.skuId;
    let shipmentTabletSkuId = getResult['shipmentLineItems'][0];
    let shipmentTabletSku = shipmentTabletSkuId.skuId;
    return {shipmentSdCardSku,shipmentTabletSku};
}

async getshipmentSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuSdCard = getResult['shipmentLineItems'][1];
    let shipmentSdCardSku = salesSkuSdCard.skuName;
    let salesSkuTablet = getResult['shipmentLineItems'][0];
    let shipmentTabletSku = salesSkuTablet.skuName;
    return {shipmentSdCardSku,shipmentTabletSku};

}

async getsalesSkuFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
        let collection = db.collection('oms_sales_orders')
        let getResult = await collection.findOne(
            { "salesOrderId": salesOrderId });
        let salesSkuSdCard = getResult['lineItems'][0];
        let salesSdCard = salesSkuSdCard.skuId;
        let salesTabletSkuId = getResult['lineItems'][1];
        let salesTablet = salesTabletSkuId.skuId;
        return {salesSdCard,salesTablet};
    
}

async getsalesSkuNameFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let salesSkuNameSdCard = getResult['lineItems'][0];
    let salesSdCardSkuName = salesSkuNameSdCard.skuName;
    let salesSkuNameTablet = getResult['lineItems'][1];
    let salesTabletSkuName = salesSkuNameTablet.skuName;
    return {salesSdCardSkuName,salesTabletSkuName};

}

async getBooksSkuIDFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        { "salesOrderId": salesOrderId });
    let booksSkuID = getResult['addonLineItems'][0];
    let getBooksSkuID = booksSkuID.skuId;
    let booksSkuName = getResult['addonLineItems'][0];
    let gatBooksSkuName = booksSkuName.name;
    let booksInvoicePrice = getResult['addonLineItems'][0];
    let getBooksInvoicePrice = parseInt(booksInvoicePrice.invoicePrice);
    return {getBooksSkuID,gatBooksSkuName,getBooksInvoicePrice};

}

async getshipmentTabletStatusFromDB(salesOrderId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('oms_sales_orders')
    let getResult = await collection.findOne(
        {"salesOrderId" :salesOrderId });
        let getTabletSkuStatus = getResult['shipmentLineItems'][0];
        let copyTabletSkuStatus = getTabletSkuStatus.itemStatus;
        let getSdCardtSkuStatus = getResult['shipmentLineItems'][1];
        let copySdCardSkuStatus = getSdCardtSkuStatus.itemStatus;
        return {copyTabletSkuStatus, copySdCardSkuStatus}

}

//byjuspAY
async getRazorPayUrl(searchRazorPayRefId) {
    let db = await this.getMongoClientByjusNucleus();
    let collection = db.collection('transactions_razorpay');
    let getResult = await collection.findOne(
        {'referenceId' : searchRazorPayRefId});
        let razorpay_url = getResult['paymentUrl'];
        console.log(' From DB ' + razorpay_url)
        return {razorpay_url}
}
}

export default new mongoConnect();
