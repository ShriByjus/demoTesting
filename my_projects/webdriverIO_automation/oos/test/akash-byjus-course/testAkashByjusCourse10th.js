import mongoconnect from '../../utils/mongoconnect';
import verifyOmsOrderDetails from '../../pages/verifyOmsOrderDetails';
import SDcardOrderPage from '../../pages/sd.card.order.page';
const { btlpOrderData } = require('../../data/btlpOrderData');
const draftOrderMockData = require('../../data/akash-byjus-course/akash-byjus-live-program/10th-standard/draftOrder.json');
const salesOrderMockData = require('../../data/akash-byjus-course/akash-byjus-live-program/10th-standard/salesOrder.json');
const salesSubOrderMockData = require('../../data/akash-byjus-course/akash-byjus-live-program/10th-standard/salesSubOrder.json');
import { AllureUtil as allure } from "../../utils/allure.util";
import { sumArray } from '../../utils/function';
import { generateSalesOrderId } from '../../utils/function';
import { generateSalesSubOrderId } from '../../utils/function';
const salesOrderId = generateSalesOrderId();
console.log(salesOrderId)
const salesSubOrderId = generateSalesSubOrderId(salesOrderId)
console.log(salesSubOrderId)
let count = 0;

describe('Validating Aakash Byjus Courses single order for 10th standard', async () => {

    it('Adding json to collections for generating the Order Id', async () => {
        allure.startStep("Adding order to Sales order Collection");
        await mongoconnect.addOrderToSalesOrderCollectionForSmokeTest(salesOrderId, salesOrderMockData);
        allure.startStep("Adding order to Sales Sub order Collection");
        await mongoconnect.addOrderToSalesSubOrderCollectionForSmokeTest(salesOrderId, salesSubOrderId, salesSubOrderMockData);
        allure.startStep("Adding order to draft order Collection");
        await mongoconnect.addOderToDraftOrdersCollection(draftOrderMockData, salesOrderId, salesSubOrderId);
        allure.endStep();
    })

    it('log in into oms', async () => {
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        allure.startStep('Open Byjus OMS page');
        await SDcardOrderPage.openOMSPage();
        console.log("Opened oms page");
        allure.startStep('Login to the Home page', true);
        await SDcardOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        console.log("Login completed");
    })

    it('Verifying the Sales order Id details', async () => {
        allure.startStep("Verifying the Sales order Id details");
        await verifyOmsOrderDetails.openSoIdVerifyDetails(salesOrderId, salesSubOrderId);
        // console.log("verified sales order");
        // let id = $("(//tr)[15]/td[3]").getText(); getText
        // let ids = $("(//tr)[15]/td[4]").getText();
        // console.log('success or undefined?' + id);
        // console.log('success or undefined?' + ids);

        // let status = $("//span[@class='text-uppercase badge bg-success']").getText();
        // console.log('success or undefined?' + status);
        // let id = $("(//td)[27]").getText();
        // let ids = $("(//td)[28]").getText();
    }) 

    it('Verify PID is generated', async () => {
        allure.startStep("Scroll to PID button");
        await verifyOmsOrderDetails.verifyPid.scrollIntoView();
        allure.startStep("Verify the PID is displayed");
        await expect(await verifyOmsOrderDetails.verifyPid.isDisplayed()).toEqual(true);
        allure.endStep();
    })

    it('Verify the shipment skus and skus name', async () => {
        let shipmentSkuTablet = btlpOrderData.shipmentSkuAakashByjusCourses[2]
        let shipmentSkuSdCard = btlpOrderData.shipmentSkuAakashByjusCourses[3]
        let shipmentSkuTabletName = btlpOrderData.shipmentSkuNamesForAakashByjusCourses[2]
        let shipmentSkuSdCardName = btlpOrderData.shipmentSkuNamesForAakashByjusCourses[3]
        await verifyOmsOrderDetails.toggleToSalesSku.click();
        let shipSdCardSku = await mongoconnect.getshipmentSdCradSkuFromDB(salesOrderId);
        let shipTabletSku = await mongoconnect.getshipmentTabletSkuFromDB(salesOrderId);
        console.log(shipSdCardSku);
        console.log(shipTabletSku);
        allure.startStep("Validate the shipment sku's");
        expect(shipmentSkuTablet).toEqual(shipTabletSku);
        expect(shipmentSkuSdCard).toEqual(shipSdCardSku);
        allure.startStep("Validatation done for shipment sku's");
        allure.startStep("Validate the shipment sku's names");
        let shipSdCardSkuName = await mongoconnect.getshipmentSdCradSkuNameFromDB(salesOrderId);
        let shipTabletSkuName = await mongoconnect.getshipmentTabletSkuNameFromDB(salesOrderId);
        expect(shipmentSkuTabletName).toEqual(shipTabletSkuName);
        expect(shipmentSkuSdCardName).toEqual(shipSdCardSkuName);
        allure.startStep("Validatation done for shipment sku's names");
        allure.endStep();
    })

    it('Verify the sales skus and skus names', async () => {
        let salesSkuSdCard = btlpOrderData.salesSkuForAakashByjusCourses[3]
        let salesSkuTablet = btlpOrderData.salesSkuForAakashByjusCourses[2]
        let salesSkuSdCardName = btlpOrderData.salesSkuNamesForAakashByjusCourses[3]
        let salesSkuTabletName = btlpOrderData.salesSkuNamesForAakashByjusCourses[2]
        let tabletSku = await mongoconnect.getsalesSdCradSkuFromDB(salesOrderId);
        let sdCardSku = await mongoconnect.getsalesTabletSkuFromDB(salesOrderId);
        console.log(sdCardSku);
        console.log(tabletSku);
        allure.startStep("Validate the sales sku's");
        expect(salesSkuTablet).toEqual(tabletSku);
        expect(salesSkuSdCard).toEqual(sdCardSku);
        allure.startStep("Validatation done for sales sku's");
        allure.startStep("Validate the shipment sku's names");
        let salesTabletSkuName = await mongoconnect.getsalesSdCradSkuNameFromDB(salesOrderId);
        let salesSdCardSkuName = await mongoconnect.getsalesTabletSkuNameFromDB(salesOrderId);
        expect(salesSkuTabletName).toEqual(salesTabletSkuName);
        expect(salesSkuSdCardName).toEqual(salesSdCardSkuName);
        allure.startStep("Validatation done for shipment sku's names");
        allure.endStep();
    })
   
    it('Verifying changing the status to Confirmed and Verify the order status history', async () => {
        allure.startStep("Verify change status to Confirmed and verify order status history");
        await verifyOmsOrderDetails.statusConfirmedAndVerifyOrderStatusHistory(salesSubOrderId);
        allure.endStep();
    })

    it('Verifying the order details and payment values from UI are equal to the values in Kart collection', async () => {
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        await verifyOmsOrderDetails.openSoIdVerifyDetails(salesOrderId, salesSubOrderId);
        allure.startStep("Copy order details and payments from UI");
        let orderAndPaymentDetailsOms = await verifyOmsOrderDetails.verifyOrderDetailsAndPayments();
        allure.startStep("Get order details and payments from draft order collection");
        let orderAndPaymentDetailsKart = await mongoconnect.getOrderAndPaymentDetails(salesOrderId);
        allure.startStep("Validate the payment value on sales order page is equal to Sku sub total amount");
        expect(orderAndPaymentDetailsOms[2]).toEqual(orderAndPaymentDetailsOms[3]);
        allure.startStep("Validate the order details and payment values from UI are equal to the values from DB");
        expect(orderAndPaymentDetailsOms[2]).toEqual(orderAndPaymentDetailsKart[2]);
        allure.endStep();
    })

    it('Verify sales and customer details', async () => {
        allure.startStep("Get address details from draft order Id collection");
        let addressDetails = await mongoconnect.getAddressDetails(salesOrderId);
        allure.startStep("Get customer details from draft order Id collection");
        let customerDetails = await mongoconnect.getCustomerDetails(salesOrderId);
        allure.startStep("Copy sales and customer details from UI");
        let array = await verifyOmsOrderDetails.verifySalesAndCustomerDetails();
        allure.startStep("Validate the address details from UI matches with details from draft order collection");
        expect(array.addressDetails).toEqual(addressDetails);
        allure.startStep("Validate the customer details from UI matches with details from draft order collection");
        expect(array.customerDetails).toEqual(customerDetails);
        allure.endStep();
    })

    it('Verify raise priority option', async () => {
        allure.startStep("Verify raise priority option");
        await verifyOmsOrderDetails.raisePriorityAndVerify(salesSubOrderId);
        allure.endStep();
    })

})
