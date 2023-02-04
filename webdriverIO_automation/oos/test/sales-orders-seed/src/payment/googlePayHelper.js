const googlePayMockData = require('../../data/googlePay.json');
const RandomNumUtil = require('../../lib/RandomUtil');
const randomNumber = RandomNumUtil();
const randomvalue = randomNumber;
const mockData = async () => {
    const transactionsGpay = byjus.nativeClient.db('byjus-nucleus').collection('transactions_gpay');
    const referenceId = generateReferenceId();
    const gpayReferenceId = generateGpayReferenceId();
    await transactionsGpay.updateOne({
        referenceId
    }, {
        $set: {
            ...googlePayMockData,
            referenceId, gpayReferenceId,
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
        }
    }, {
        upsert: true
    });
    return referenceId;
}

const generateReferenceId = () => {
    const referenceId = randomvalue;
    return referenceId;
}

const generateGpayReferenceId = () => {
    const gpayreferenceId = `ATC${randomvalue}`;
    return gpayreferenceId;
}

module.exports = {
    mockData
}