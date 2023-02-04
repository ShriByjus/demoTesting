const fs = require('fs');
import SDcardOrderPage from '../../../pages/omsSmokeData';
import sdCardAndTabletOrderPage from '../../../pages/sd.card.and.tablet.order.page';
import mongoconnect from '../../../utils/mongoconnect';
import { allureUtil as allure } from '../../../utils/util.allure';
import { generateSalesOrderId } from '../../../utils/function';
import { generateSalesSubOrderId } from '../../../utils/function';
const draftOrderMockData = require('../../../data/order-types-data/upgradeOrders/draftOrder.json');
const salesOrderMockData = require('../../../data/order-types-data/upgradeOrders/salesOrder.json');
const salesSubOrderMockData = require('../../../data/order-types-data/upgradeOrders/salesSubOrder.json');
// const salesOrderId = require('../sales-orders-seed/orderId.json')
const salesOrderId = generateSalesOrderId();
console.log(salesOrderId)
let salesSubOrderId = generateSalesSubOrderId(salesOrderId)
let ssoId = salesSubOrderId.substring(5);
// console.log(ssoId);

const updateSalesOrderId = (ssoId) => {
    // console.log(__dirname , '..');
    console.log('json' + ssoId)
    try {
        let json = JSON.stringify(ssoId);
        fs.writeFileSync('orders.json', json)
    } catch (err) {
        console.error(err)
    }
}

describe('btlp workflow', async()=>{
    it('Adding json to collections for generating the Order Id', async () => {
        updateSalesOrderId(ssoId);
        console.log('updating SSOID' + ssoId)
        allure.startStep("Adding order to Sales order Collection");
        await mongoconnect.addOrderToSalesOrderCollectionForSmokeTest(salesOrderId, salesOrderMockData);
        allure.startStep("Adding order to Sales Sub order Collection");
        await mongoconnect.addOrderToSalesSubOrderCollectionForSmokeTest(salesOrderId, salesSubOrderId, salesSubOrderMockData);
        allure.startStep("Adding order to draft order Collection");
        await mongoconnect.addOderToDraftOrdersCollection(draftOrderMockData, salesOrderId, salesSubOrderId);
        allure.endStep();
    })
    it('btlp forward workflow',async()=>{
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        allure.startStep('Open Byjus OMS page');
        await SDcardOrderPage.openOMSPage();
        console.log("Opened oms page");
        allure.startStep('Login to the Home page', true);
        await SDcardOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        console.log("Login completed");
        // console.log("selecting OMS Warehouse to login");
        // await browser.pause(5000);
        // await SDcardOrderPage.selectOmsWarehouse();
        // console.log("selected OMS Warehouse to login");
        allure.startStep('Open SSO Id');
        await SDcardOrderPage.openSSOIdAndConfirmForUpgradeOrder(ssoId);
        allure.startStep('adding present owner')
        await SDcardOrderPage.addPresentOwner();
        allure.startStep('impersonating set up user')
        await SDcardOrderPage.impersonateUser();
        allure.startStep('impersonating is done')
        await SDcardOrderPage.openSSOIdAndMapp(ssoId);
        allure.startStep('Open SSO Id and mapping inventory & packaging');
        await SDcardOrderPage.changeStatusToPackedOrderType();
        allure.startStep('shipment creation');
        await SDcardOrderPage.createShipment();
        console.log("shipment creation completed");
        allure.startStep('Get AWB no from DB');
        let awbnumber = await mongoconnect.getShipmentAWBNumberFromDB(ssoId);
        allure.startStep('Wait for 5 sec to get AWB no from DB');
        allure.startStep('creation of dispatchBatch');
        await SDcardOrderPage.createDispatchBatchBtlp(awbnumber);
        allure.startStep('completed creation of dispatchBatch');
        await SDcardOrderPage.changeTheSatatusToDelivered(ssoId);
 })
    it('btlp reveres workflow',async()=>{
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        await SDcardOrderPage.openOMSPage();
        await SDcardOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        allure.startStep('opening sales return module');
        await SDcardOrderPage.goAndClickOnSalesReturn(ssoId);
        allure.startStep('entering values is the amount fields');
        await SDcardOrderPage.salesReturnAmountSectionForUpgradeOrder();
        allure.startStep('selecting sales return reason');
        await SDcardOrderPage.selectSalesReturnReason();
        allure.startStep('selecting skip inventory option');
        await SDcardOrderPage.skipInventoryQaNo();
        allure.startStep('selecting sales return products and services');
        await SDcardOrderPage.selectProductsAndServices(ssoId);  
        allure.startStep('creating inward batches');
        await SDcardOrderPage.createInwardBatches(ssoId);
        
        
})
})