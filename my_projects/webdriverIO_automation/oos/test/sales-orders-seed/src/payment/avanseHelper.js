const avanseMockData = require('../../data/transactionsavanse.json');
const RandomNumUtil = require('../../lib/RandomUtil');
const moment = require('moment');
const faker = require('faker');

const mockData = async (salesEmail) => {
    const TransactionsEMI = byjus.nativeClient.db('byjus-nucleus').collection('transactionsavanse');
    const appId = generateRefId();
    const nachId = generatenachId();
    const utilityCode = generateutilityCode();


    await TransactionsEMI.updateOne({
        appId
    }, {
        $set: {
            ...avanseMockData,
            appId,
            // emandateDetails,
            "salesEmail": salesEmail,
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
        }
    }, {
        upsert: true
    });
    return appId;
}

const generateRefId = () => {
    const currentDate = moment().format('DDMMYYYY');
    const randomNumber = RandomNumUtil();
    const appId = `9494${currentDate}${randomNumber}`;
    return appId;
}

const generatenachId = () => {
    const currentDate = moment().format('DDMMYYYY');
    const randomNumber = RandomNumUtil(21, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const nachId = `ENA${currentDate}${randomNumber}`;
    return nachId;
}

const generateutilityCode = () => {
    // const currentDate = moment().format('DDMMYYYY');
    const randomNumber = RandomNumUtil(1, 9999);
    const utilityCode = `NACH000000000${randomNumber}`;
    return utilityCode;
}

module.exports = {
    mockData
}