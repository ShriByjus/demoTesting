/// <reference types="cypress" />
const moment = require('moment');
const lodash = require('lodash');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************



require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const RandomNumUtil = require('../integration/kart/lib/RandomUtil');
const fs = require('fs');
const randomNumber = RandomNumUtil();
const randomvalue = randomNumber;
//import priceValue from "../support/commands"
//var pricevalue = require('../support/commands');
//var amount = pricevalue.price();

module.exports = async (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);

  const client = await MongoClient.connect(process.env.MONGO_DB_URI, { useUnifiedTopology: true });

  global.byjus = {};
  global.byjus["nativeClient"] = client;
 
  function writeToJSON(filepath, data) {
    fs.writeFileSync(filepath, JSON.stringify(data,null,2));
    return null;
  }
  
  function readJSON(filepath) {
    if (!fs.existsSync(filepath)){
      writeToJSON(filepath, {});
    }
    const data = JSON.parse(fs.readFileSync(filepath));
    return data;
  }

  on('task', {

    async createPayUTxnId({ payuMockData, finalPrice }) {
      //cy.log("plugins" + phone);
      console.log('-=-=-=-=-=', payuMockData, on, config);
      const TransactionsPayu = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionspayu');
      const txnid = generateTxnId();
      await TransactionsPayu.updateOne({
        txnid
      }, {
        $set: {
          ...payuMockData,
          txnid,
          amount : finalPrice,
          createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
          updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        }
      }, {
        upsert: true
      });
      return txnid;
    },
  }),

  on('task', {
    updateUserData({filepath, userData}){
      const data = readJSON(filepath);
      const board = Object.keys(userData)[0];      
      if(Object.keys(data).length === 0){
          writeToJSON(filepath, userData);
      }
    
      else{
          console.log(data);
          if (data[board]!=null){
              Object.assign(data[board], userData[board]);
              console.log(data);
              writeToJSON(filepath, data);
          }
          else {
              Object.assign(data, userData);
              writeToJSON(filepath, data);
          }
          
      }
      return null;
  }
 })

 
  on('task', {

    async createGpayTxnId({ googlePayMockData,finalPrice, downPaymentAmount }) {
      console.log('-=-=-=-=-=', googlePayMockData, on, config);
      const transactionsGpay = global.byjus.nativeClient.db('byjus-nucleus').collection('transactions_gpay');
      const referenceId = generateReferenceId();
      const gpayReferenceId = generateGpayReferenceId();
      //const amount = generateAmount();
      await transactionsGpay.updateOne({
        referenceId
      }, {
        $set: {
          ...googlePayMockData,
            referenceId, gpayReferenceId,
            amount : finalPrice || downPaymentAmount,
          createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
          updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        }
      }, {
        upsert: true
      });
      return referenceId;
    },
   })



   on('task', {

    async createRazorRefrId({ razorPayMockData,finalPrice }) {
      console.log('-=-=-=-=-=', razorPayMockData, on, config);
      const transactionsRazorpay = global.byjus.nativeClient.db('byjus-nucleus').collection('transactions_razorpay');
      const referenceId = generateReferenceId();
      const razorpayReferenceId = generateRazorpayReferenceId();
      await transactionsRazorpay.updateOne({
        referenceId
      }, {
        $set: {
          ...razorPayMockData,
            referenceId, razorpayReferenceId,
            amount : finalPrice,
          createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
          updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        }
      }, {
        upsert: true
      });
      return referenceId;
    },
   })



   on('task', {

    async createPinelabsAppId({ pinelabsMockData,finalPrice }) {
      console.log('-=-=-=-=-=', pinelabsMockData, on, config);
      const transactionsPinelabs = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionspinelabs');
      const referenceId = generateReferenceId();
      const pinelabsReferenceId = generatePinelabsReferenceId();
      await transactionsPinelabs.updateOne({
        appId: pinelabsReferenceId
      }, {
        $set: {
          ...pinelabsMockData,
            amount : finalPrice,
          createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
          updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        }
      }, {
        upsert: true
      });
      return pinelabsReferenceId;
    },
   })




  on('task',{ 
    async createAvanseAppId({ avanseMockData,finalPrice }) {
      console.log('-=-=-=-',avanseMockData,on,config)
      const TransactionsAvanse = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsavanse');
      const appId = generateRefId();
      
      await TransactionsAvanse.updateOne({
          appId
      }, {
          $set: {
              ...avanseMockData,
              appId,
              amount : finalPrice,
              createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
              updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
          }
      }, {
          upsert: true
      });
      return appId;
  }
   })

   on('task',{
    async createIiflAppId({ iiflMockData,finalPrice }) {
      const TransactionsEMI = byjus.nativeClient.db('byjus-nucleus').collection('transactionsiifl');
      const appId = generateIiflRefId();
      await TransactionsEMI.updateOne({
          appId
      }, {
          $set: {
              ...iiflMockData,
              appId,
              amount : finalPrice,
              createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
              updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
          }
      }, {
          upsert: true
      });
      return appId;
  }
   })

  on('task',{ 
    async createIciciAppId({ iciciMockData,finalPrice }) {
      console.log('-=-=-=-',iciciMockData,on,config)
      const TransactionsIcici = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsicici');
      const appId = generateRefId();
      
      await TransactionsIcici.updateOne({
          appId
      }, {
          $set: {
              ...iciciMockData,
              appId,
              amount : finalPrice,
              createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
              updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
          }
      }, {
          upsert: true
      });
      return appId;
  }
  })

  on('task',{ 
    async createFullertonAppId({ fullertonMockData,finalPrice }) {
      console.log('-=-=-=-',fullertonMockData,on,config)
      const TransactionsFullerton = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsfullerton');
      const appId = generateRefId();
      
      await TransactionsFullerton.updateOne({
          appId
      }, {
          $set: {
              ...fullertonMockData,
              appId,
              amount : finalPrice,
              createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
              updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
          }
      }, {
          upsert: true
      });
      return appId;
  }
  })

  on('task',{ 
    async createKotakAppId({ kotakMockData,finalPrice }) {
      console.log('-=-=-=-',kotakMockData,on,config)
      const TransactionsKotak = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionskotak');
      const appId = generateRefId();
      
      await TransactionsKotak.updateOne({
          appId
      }, {
          $set: {
              ...kotakMockData,
              appId,
              amount : finalPrice,
              createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
              updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
          }
      }, {
          upsert: true
      });
      return appId;
  }
  })

  on('task',{ 
    async createBajajRrnId({ bajajMockData,finalPrice }) {
      console.log('-=-=-=-',bajajMockData,on,config)
      const TransactionsBajaj = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsbajaj');
      const rrn = generateRefId();
      
      await TransactionsBajaj.updateOne({
          rrn
      }, {
          $set: {
              ...bajajMockData,
              rrn,
              loanamount : finalPrice,
              createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
              updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date()
          }
      }, {
          upsert: true
      });
      return rrn;
  }
  })



  on('task', {
    async createShopseRefernceId({shopseMockData, finalPrice}) {
      console.log('-=-=-=-=-=', shopseMockData, on, config);
      const TransactionsShopse = global.byjus.nativeClient.db('byjus-nucleus').collection('transactions_shopse');
      const referenceId = generateShopseReferenceId();
      await TransactionsShopse.updateOne({
        referenceId
      }, {
        $set: {
        ...shopseMockData,
        referenceId,
        amount: finalPrice,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
          updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        }
      
    }, {
      upsert: true
    });
    return referenceId;
  },
})

on('task', {
  async createByjusAssureTxnId({ byjusAsssureMockdata, loanAmount }) {
    console.log('-=-=-=-=-=', byjusAsssureMockdata, on, config);
    const transactionsByjusAssure  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsbyjusdirect');
    const appId = generateByjusAssureTransactionAppId();
    await transactionsByjusAssure.updateOne({
      appId
    }, {
      $set: {
        ...byjusAsssureMockdata,
          appId,
          amount : loanAmount,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return appId;
  },
})

on('task', {
  async createByjusAssureTxnIdforsingleTlp({ byjusAsssureMockdata, finalPrice }) {
    console.log('-=-=-=-=-=', byjusAsssureMockdata, on, config);
    const transactionsByjusAssure  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsbyjusdirect');
    const appId = generateByjusAssureTransactionAppId();
    await transactionsByjusAssure.updateOne({
      appId
    }, {
      $set: {
        ...byjusAsssureMockdata,
          appId,
          amount : finalPrice,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return appId;
  },
})

on('task', {
  async createByjusDirectTxnId({ byjusDirectMockdata, loanAmount }) {
    console.log('-=-=-=-=-=', byjusDirectMockdata, on, config);
    const transactionsByjusDirect  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsbyjusdirect');
    const appId = generateByjusDirectTransactionAppId();
    await transactionsByjusDirect.updateOne({
      appId
    }, {
      $set: {
        ...byjusDirectMockdata,
          appId,
          amount : loanAmount,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return appId;
  },
})

on('task', {
  async createByjusAdvantageTxnId({ byjusAdvantageMockdata, loanAmount }) {
    console.log('-=-=-=-=-=', byjusAdvantageMockdata, on, config);
    const transactionsByjusAdvantage  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsbyjusdirect');
    const appId = generateByjusAdvantageTransactionAppId();
    await transactionsByjusAdvantage.updateOne({
      appId
    }, {
      $set: {
        ...byjusAdvantageMockdata,
          appId,
          amount : loanAmount,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return appId;
  },
})

on('task', {
  async createAbflTxnId({ abflMockdata, loanAmount }) {
    console.log('-=-=-=-=-=', abflMockdata, on, config);
    const transactionAbfl  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsabfl');
    const appId = generateAbflTransactionAppId();
    await transactionAbfl.updateOne({
      appId
    }, {
      $set: {
        ...abflMockdata,
          appId,
          amount : loanAmount,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return appId;
  },
})

on('task', {
  async createAbflTxnIdforsingleTlp({ abflMockdata, finalPrice }) {
    console.log('-=-=-=-=-=', abflMockdata, on, config);
    const transactionAbfl  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionsabfl');
    const appId = generateAbflTransactionAppId();
    await transactionAbfl.updateOne({
      appId
    }, {
      $set: {
        ...abflMockdata,
          appId,
          amount : finalPrice,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return appId;
  },
})

on('task', {
  async createPaytmTxnId({ paytmMockdata, finalPrice }) {
    console.log('-=-=-=-=-=', paytmMockdata, on, config);
    const transactionPaytm  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactionspaytm');
    const paytmid = generatePaytmTransactionId();
    await transactionPaytm.updateOne({
    paytmid
    }, {
      $set: {
        ...paytmMockdata,
          paytmid,
          amount : finalPrice,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return paytmid;
  },
})

on('task', {
  async createPhonepeTxnId({ phonepeMockdata, finalPrice }) {
    console.log('-=-=-=-=-=', phonepeMockdata, on, config);
    const transactionPhonepe  = global.byjus.nativeClient.db('byjus-nucleus').collection('transactions_phonepe');
    const referenceId = generatePhonepeTransactionId();
    await transactionPhonepe.updateOne({
      referenceId
    }, {
      $set: {
        ...phonepeMockdata,
        referenceId,
          amount : finalPrice,
        createdAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
        updatedAt: process.env.DATE ? new Date(process.env.DATE) : new Date(),
      }
    }, {
      upsert: true
    });
    return referenceId;
  },
})

// const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
// module.exports = (on, config) => {
//   on('task', { downloadFile })
// }
//const generateAmount =() => {
  //const amount = pricevalue.price;
  //return amount;
//}
const generateRefId = () => {
  const currentDate = moment().format('DDMMYYYY');
  const randomNumber = lodash.random(1, 99999999);
  const randomNumber2 = randomNumber + lodash.random(1, 999999);
  const paddedRandomNumber = lodash.padStart(randomNumber2, 4, 0);
  const appId = `9494${currentDate}${paddedRandomNumber}`;
  return appId;
}

const generateTxnId = () => {
  const randomNumber = RandomNumUtil();
  const txnid = `BYJUS000${randomNumber}`;
  return txnid;
}

const generateReferenceId = () => {
  const referenceId = "BYJGP" + RandomNumUtil();  
  return referenceId;
}

const generateGpayReferenceId = () => {
  const gpayreferenceId = `ATC${RandomNumUtil()}`;
  return gpayreferenceId;
}

const generateRazorpayReferenceId = () => {
  const razorpayreferenceId = "BRZR" + RandomNumUtil();
  return razorpayreferenceId;
}

const generatePinelabsReferenceId = () => {
  const pinelabsreferenceId = "PINE000" + RandomNumUtil();
  return pinelabsreferenceId;
}

const generateKotakReferenceId = () => {
  const kotakreferenceId =  RandomNumUtil();
  return kotakreferenceId;
}

const generateBajajReferenceId = () => {
  const bajajreferenceId =  RandomNumUtil();
  return bajajreferenceId;
}

const generateShopseReferenceId = () => {
  const shopserefernceId = "BYJSSE" + RandomNumUtil();
  return shopserefernceId;
}
const generateIiflRefId = () => {
  const currentDate = moment().format('DDMMYYYY');
  const randomNumber = lodash.random(1, 99999999);
  const randomNumber2 = randomNumber + lodash.random(1, 999999);
  const paddedRandomNumber = lodash.padStart(randomNumber2, 4, 0);
  const appId = `9494${currentDate}${paddedRandomNumber}`;
  return appId;
}

const generateByjusAssureTransactionAppId = () => {
  const randomNumber = RandomNumUtil();
  const appId = `921${randomNumber}`;
  return appId;
}

const generateByjusDirectTransactionAppId = () => {
  const randomNumber = RandomNumUtil();
  const appId = `9210${randomNumber}`;
  return appId;
}

const generateByjusAdvantageTransactionAppId = () => {
  const randomNumber = RandomNumUtil();
  const appId = `9211${randomNumber}`;
  return appId;
}

const generateAbflTransactionAppId = () => {
  const randomNumber = RandomNumUtil();
  const appId = `901${randomNumber}`;
  return appId;
}

const generatePaytmTransactionId = () => {
  const randomNumber = RandomNumUtil();
  const paytmid = `BPTM${randomNumber}`;
  return paytmid;
}

const generatePhonepeTransactionId = () => {
  const randomNumber = RandomNumUtil();
  const referenceId = `BPP${randomNumber}`;
  return referenceId;
}

/**
 * @type {Cypress.PluginConfig}
 */
}