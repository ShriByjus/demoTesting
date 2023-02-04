const payuMockData = require('../../data/payu.json');
const RandomNumUtil = require('../../lib/RandomUtil');

const mockData = async () => {
    const TransactionsPayu = byjus.nativeClient.db('byjus-nucleus').collection('transactionspayu');
    const txnid = generateTxnId();
    await TransactionsPayu.updateOne({
        txnid
    }, {
        $set: {
            ...payuMockData,
            txnid,
            createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
            updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
        }
    }, {
        upsert: true
    });
    return txnid;
}

const generateTxnId = () => {
    const randomNumber = RandomNumUtil();
    const txnid = `BYJUS000${randomNumber}`;
    return txnid;
}

module.exports = {
    mockData
}