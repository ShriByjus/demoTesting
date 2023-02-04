
const lodash = require('lodash');
const moment = require('moment');
const faker = require('faker');
const salesOrderMockData = require('../../data/salesOrder.json');
const { status } = require('../../data/enum');
const date = process.env.DATE ? new Date(process.env.DATE) : new Date();

const mockData = async (referenceId) => {
    const SalesOrder = byjus.nativeClient.db('byjus-nucleus').collection('oms_sales_orders');
    const salesOrderId = generateSalesOrderId();
    
    const actionDetails = {
        "createdAt": date,
        "createdBy": "system",
        "notConfirmedAt": date,
        "notConfirmedBy": "system",
        "confirmedAt": date,
        "confirmedBy": "system",
        "packagingInProgressAt": date,
        "packagingInProgressBy": "system",
        "shippedAt": date,
        "shippedBy": "system",
        "dispatchedAt": date,
        "dispatchedBy": "system",
        "deliveredAt": date,
        "deliveredBy": "system",
        "status": faker.random.arrayElement(status),
       // "status": {"$in":["delivered","confirmed","not_confirmed"]}
    };
    const paymentDetails = {
        "paymentMethod" : "NGP",
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
        "isRepunchedCase" : false,
        "paymentMode" : "GPAY",
        "paymentAmountSplit" : "30000",
        "paymentStatus" : "NOT_PAID",
        "totalAmount" : 30000,
        "totalEmiAmount" : 0,
        "totalPostpaidAmount" : 0,
        "totalPrepaidAmount" : 30000,
        "type" : "NON_EMI"

    };

    await SalesOrder.updateOne({
        salesOrderId
    }, {
        $set: {
            ...salesOrderMockData,
            salesOrderId,
            // status:faker.random.arrayElement(status),
            paymentDetails,
            salesSubOrderIds: [
                `SSO1-${salesOrderId}`
            ],
            actionDetails,
            source: 'kart_mock_data',
            createdAt: date,
            updatedAt: date
        }
    }, {
        upsert: true
    });

    return salesOrderId;
}

const generateSalesOrderId = () => {
    const currentDate = moment(process.env.DATE).format('YYMMDDHHmmss');
    const randomNumber = lodash.random(1, 999);
    const paddedRandomNumber = lodash.padStart(randomNumber, 4, 0);
    const salesOrderId = `SO-${currentDate}${paddedRandomNumber}`;

    return salesOrderId;
}

module.exports = {
    mockData
}