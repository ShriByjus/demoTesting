require('dotenv').config();
const Promise = require('bluebird');
const MongoClient = require('mongodb').MongoClient;
const { MONGO_DB_URI, TYPE } = process.env;
const init = async () => {
    const client = await MongoClient.connect(
        'mongodb://achieveteam:yfhnZqPn8xzig3Xk@development-shard-00-00-7emgs.mongodb.net:27017,development-shard-00-01-7emgs.mongodb.net:27017,development-shard-00-02-7emgs.mongodb.net:27017/byjus-nucleus?ssl=true&replicaSet=Development-shard-0&authSource=admin'
        , { useUnifiedTopology: true });
      global.byjus = {};
      global.byjus["nativeClient"] = client;
      const { mockData } = require("./seedHelper");
      await mockData();
    }
// const init = async () => {
//     const client = await MongoClient.connect(process.env.MONGO_DB_URI, { useUnifiedTopology: true });
//     global.byjus = {};
//     global.byjus["nativeClient"] = client;
//     const { mockData } = require("./seedHelper");
//     await mockData();
// }
init();