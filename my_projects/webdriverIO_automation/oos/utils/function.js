const lodash = require('lodash');
const moment = require('moment');
const fs = require('fs');
let current_date = new Date();
import supertest from 'supertest';
const request = supertest("https://dev-nucleus.byjusorders.com/nucleusapi/warehousemanagement/");
import mongoconnect from '../utils/mongoconnect';


export function getRandomNum(lengthOfString = 10) {
    let d = new Date();
    let n = d.getTime();
    n = n.toString();
    let len = n.length;
    len = len - lengthOfString;
    n = parseInt('9' + n.slice(len + 1));
    return n;
}

export async function waitAndDoClick(element) {
    await element.waitForExist({ timeout: 80000 })
    await element.click()
  }
  export async function typeAndEnter(text) {
    await browser.keys(text)
    await browser.keys("\uE007")
  }

export const generateSalesOrderId = () => {
    const currentDate = moment(current_date).format('YYMMDDHHmmss');
    const randomNumber = lodash.random(1, 999);
    const paddedRandomNumber = lodash.padStart(randomNumber, 4, 0);
    const salesOrderId = `SO-${currentDate}${paddedRandomNumber}`;

    return salesOrderId;
}

export const generateSalesSubOrderId = (salesOrderId) => {
    const formattedOrderId = salesOrderId && salesOrderId.split('-')[1];

    return `SSO1-${formattedOrderId}`;
}

export async function getToken(currentUrl) {
    const output = await browser.mock('**/getUserProfile', { method: 'get' })
    await browser.url(currentUrl)
    await browser.pause(60000)
    fs.writeFile('headerData.json', JSON.stringify(output.calls), function (err) {
        if (err) throw err
    })
    var json_data = output.calls[0].headers;
    var result = [];
    for (var i in json_data)
        result.push([i, json_data[i]]);
    let contentType = result[1].toString().replace("Content-Type,", "");
    let accessToken = result[8].toString().replace("x-access-token,", "");
    let idToken = result[10].toString().replace("x-id-token,", "");
    let refreshToken = result[11].toString().replace("x-refresh-token,", "");
    console.log(contentType);
    console.log(accessToken);


    console.log(refreshToken);

    return { contentType, accessToken, idToken, refreshToken };
}

export async function getBatchId(contentType, accessToken, idToken, refreshToken) {
    const batchId = await request
        .post("inventorybatch/list")
        .set("Content-Type", contentType)
        .set("x-access-token", accessToken)
        .set("x-id-token", idToken)
        .set("x-refresh-token", refreshToken)
        .send({ "gridId": "inventory_batch_base_grid", "viewName": "all", "viewId": "625934de3b34f8e9df30ff45", "model": "InventoryBatch", "page": 1, "limit": 10, "contextCriterias": [], "sort": { "createdAt": "desc" }, "type": "" })
        .then(async (response) => {
            console.log(response.statusCode);
            const batchId = response.body.docs[0].batchId;
            // console.log("%%%%%%%" + batchId);
            return batchId;
        })
    return batchId;

}

export async function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    return sum;
}

export async function duplicate(array, duplicator) {
    var buildArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < duplicator; j++) {
            buildArray.push(array[i]);
        }
    }
    return buildArray;
}

export async function askcj (){
"use strict";
v = 100;
let v;

}



