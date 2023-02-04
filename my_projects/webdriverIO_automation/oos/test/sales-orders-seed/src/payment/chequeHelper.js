const chequeMockData = require('../../data/cheque.json');
const RandomNumUtil = require('../../lib/RandomUtil');
const randomNumber = RandomNumUtil();
const randomvalue = randomNumber;
const mockData = async () => {
    const transactionsGpay = byjus.nativeClient.db('byjus-nucleus').collection('transactions_cheque');
    const referenceId = generateReferenceId();
    await transactionsGpay.updateOne({
        referenceId
    }, {
        $set: {
            ...chequeMockData,
            referenceId,
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
        }
    }, {
        upsert: true
    });
    return referenceId;
}

const generateReferenceId = () => {
    const referenceId =`CCR${randomvalue}`;
    return referenceId;
}

module.exports = {
    mockData
}