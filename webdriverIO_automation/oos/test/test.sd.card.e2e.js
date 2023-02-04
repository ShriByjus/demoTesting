import supertest from 'supertest';
const request = supertest("https://dev-nucleus.byjusorders.com/nucleusapi/warehousemanagement/");
import SDcardOrderPage from '../pages/sd.card.order.page';
import mongoconnect from '../utils/mongoconnect';
import Token from '../utils/getToken';
import { AllureUtil as allure } from "../utils/allure.util";
import { parse } from 'json2csv';
const salesOrderMockData = require('../data/salesOrder.json');
const salesSubOrderMockData = require('../data/salesSubOrder.json');
import { getToken } from '../utils/function';
import { getBatchId } from '../utils/function';

let salesorder;
let salessuborder;

describe('Verify OMS test cases', async () => {

    beforeEach('Opening the OMS portal', async () => {
        // allure.startStep("Maximize the window");
        // await browser.maximizeWindow();
        // console.log("Maximized the window");
        // allure.startStep('Open Byjus OMS page');
        // await SDcardOrderPage.openOMSPage();
        // console.log("Opened oms page");
        // allure.startStep('Login to the Home page', true);
        // await SDcardOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        // console.log("Login completed");
        salesorder = await mongoconnect.addOrderToSalesOrderCollection(salesOrderMockData);
        salessuborder = await mongoconnect.addOderToSalesSubOrderCollection(salesSubOrderMockData);
        console.log("$$$$$$"+salesorder);
        console.log("$$$$$$"+salessuborder);

    })

    it.skip('E2E flow for SD card', async () => {
        allure.startStep('Open SSO Id and copy Sku Id');
        let skuId = await SDcardOrderPage.openSSOIdandCopySkuId(salessuborder);
        allure.startStep('Address of window is stoted in a variable');
        const handles = await browser.getWindowHandles();
        allure.startStep('Change status to In stock');
        let itemId = await SDcardOrderPage.loginToWMSandCreateBatch(skuId, process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        // let currentUrl = await browser.getUrl();
        // console.log(currentUrl);
        // const newToken = await getToken(currentUrl);
        // let batchId = await getBatchId(newToken.contentType, newToken.accessToken, newToken.idToken, newToken.refreshToken);
        await SDcardOrderPage.verifyStatusIsInStock(skuId);
        allure.startStep('Create Inventory request');
        await SDcardOrderPage.createInventoryRequest(skuId);
        allure.startStep('Scan Item and Approve Request');
        await SDcardOrderPage.scanItemandApproveRequest(itemId);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let otp1 = await mongoconnect.getOtpFromDB(itemId);
        allure.startStep('verify Otp for Scan and Approve request');
        await SDcardOrderPage.verifyOtpForScanandApproverequest(otp1);
        allure.startStep('Scan item and Assign request');
        await SDcardOrderPage.scanItemandAssignRequest(itemId, skuId);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let otp2 = await mongoconnect.getOtpFromDB(itemId);
        allure.startStep('Verify otp for Scan and Assign request and Verify status');
        await SDcardOrderPage.verifyOtpForScanandAssignrequestandVerifyStatus(otp2, skuId, itemId);
        allure.startStep('Close the WMS window');
        await browser.closeWindow();
        allure.startStep('Switch to OMS portal window');
        await browser.switchToWindow(handles[0]);
        allure.startStep('Impersonate user');
        await SDcardOrderPage.impersonateUser();
        allure.startStep('Changed the status to packed');
        await SDcardOrderPage.changeStatusToPacked(salessuborder, itemId);
        // allure.startStep('Change the status to Shipped and create dispatch batch');
        // await SDcardOrderPage.changeStatusToShippedandCreateDispatchBatch(salessuborder);
        // allure.startStep('Get AWB no from DB');
        // const awbnumber = await mongoconnect.getAWBNumberFromDB();
        // allure.startStep('Wait for 5 sec to get AWB no from DB');
        // //Added wait for 5 sec to get otp from DB and update it in UI
        // await browser.pause(5000);
        // allure.startStep('Change the status to Delivered');
        // await SDcardOrderPage.changeStatusToDelivered(salessuborder, awbnumber);
        // allure.endStep();
    })


    it.skip('', async () => {
        await browser.newWindow(process.env.WMS_BYJUS_URL);
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(8000);
        let googleSignInBtnDisplayed = await SDcardOrderPage.btnSignInWithGoogleWMS.isDisplayed({ timeout: 5000 });
        if (googleSignInBtnDisplayed) {
            await SDcardOrderPage.btnSignInWithGoogleWMS.click();
            await SDcardOrderPage.btnContinueWithGoogleWMS.click();
            if (await SDcardOrderPage.tfEnterMailAddress.isDisplayed({ timeout: 5000 })) {
                await SDcardOrderPage.tfEnterMailAddress.setValue(process.env.USER_EMAIL_ACHIEVETESTING);
                await SDcardOrderPage.btnNext.click();
                await SDcardOrderPage.tfEnterPassword.waitForDisplayed({ timeout: 5000 });
                await SDcardOrderPage.tfEnterPassword.setValue(process.env.PWD_ACHIEVETESTING);
                await SDcardOrderPage.btnNext.click();
            }
        }


        await SDcardOrderPage.ddSelectWarehouseCreateDispatchBatch.click();
        await browser.keys(['i', 'b', 'c']);
        await SDcardOrderPage.selectIbcKnowledgePark.click();
        await SDcardOrderPage.btnSave.click();
        await SDcardOrderPage.reportsAndJobsTab.waitForDisplayed({ timeout: 30000 });
        await SDcardOrderPage.inventoryTab.click();
        await SDcardOrderPage.btnInventoryBatches.click();
        await browser.pause(2000);
        await SDcardOrderPage.btnCreateBatch.click();
        await SDcardOrderPage.ddAssignTo.click();
        await SDcardOrderPage.selectSdCard.click();
        await SDcardOrderPage.changeSKUandItemIDOnCSVFileandUpload();
        let currentUrl = await browser.getUrl();
        console.log(currentUrl);
        const newToken = await getToken(currentUrl);
        let batchId = await getBatchId(newToken.contentType, newToken.accessToken, newToken.idToken, newToken.refreshToken);
    })

})
