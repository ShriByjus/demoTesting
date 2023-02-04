import mongoconnect from '../../../../../utils/mongoconnect';
import verifyOmsOrderDetails from '../../../../../pages/verifyOmsOrderDetails';
import SDcardOrderPage from '../../../../../pages/sd.card.order.page';
const { btlpOrderData } = require('../../../../../data/btlpOrderData');
const draftOrderMockData = require('../../../../../data/btlpData/singleOrders/grade3/cbse/draftOrderGrade3.json');
const salesOrderMockData = require('../../../../../data/btlpData/singleOrders/grade3/cbse/salesOrderGrade3.json');
const salesSubOrderMockData = require('../../../../../data/btlpData/singleOrders/grade3/cbse/salesSubOrderGrade3.json');
import { AllureUtil as allure } from "../../../../../utils/allure.util";
import { sumArray } from '../../../../../utils/function';
import { generateSalesOrderId } from '../../../../../utils/function';
import { generateSalesSubOrderId } from '../../../../../utils/function';
const salesOrderId = generateSalesOrderId();
console.log(salesOrderId)
const salesSubOrderId = generateSalesSubOrderId(salesOrderId)
console.log(salesSubOrderId)
let count = 0;

describe('Validating grade 3 Single order', async () => {

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
    }) 

    it('Verify PID is generated', async () => {
        allure.startStep("Scroll to PID button");
        await verifyOmsOrderDetails.verifyPid.scrollIntoView();
        allure.startStep("Verify the PID is displayed");
        await expect(await verifyOmsOrderDetails.verifyPid.isDisplayed()).toEqual(true);
        allure.endStep();
    })

    it('Verify the shipment skus and skus name', async () => {
        let generateSalesAndShipmentSkuIdAndNames = await verifyOmsOrderDetails.copySalesAndShipmentSkuIdAndNamesFromUI();
        await verifyOmsOrderDetails.toggleToSalesSku.click();
        let shipmentSku = await mongoconnect.getshipmentSkuFromDB(salesOrderId);
        allure.startStep("Validate the shipment sku's");
        expect(generateSalesAndShipmentSkuIdAndNames.copyTableIdCard).toEqual(shipmentSku.shipmentTabletSku);
        expect(generateSalesAndShipmentSkuIdAndNames.copySdCardId).toEqual(shipmentSku.shipmentSdCardSku);
        allure.startStep("Validatation done for shipment sku's");
        allure.startStep("Validate the shipment sku's names");
        let shipmentSkuName = await mongoconnect.getshipmentSkuNameFromDB(salesOrderId);
        expect(generateSalesAndShipmentSkuIdAndNames.copyTableName).toEqual(shipmentSkuName.shipmentTabletSku);
        expect(generateSalesAndShipmentSkuIdAndNames.copySdCardName).toEqual(shipmentSkuName.shipmentSdCardSku);
        allure.startStep("Validatation done for shipment sku's names");
        allure.endStep();
    })

    it('Verify Shipment Items Status', async() => {
        let shipmentSkuStatus = await mongoconnect.getshipmentTabletStatusFromDB(salesOrderId);
        allure.startStep("Validatating shipment items status");
        expect(shipmentSkuStatus.copyTabletSkuStatus).toEqual('mapping_pending');
        expect(shipmentSkuStatus.copySdCardSkuStatus).toEqual('mapping_pending');
        allure.startStep("Validatation of shipment items status is done");
    })

    it('Verify add on line items details [skuID , SkuName & Invoive Price' , async() =>{
        let booksSkuID = await verifyOmsOrderDetails.copyBooksSkuIdFromUI();
        let addOnLineItemsDetails = await mongoconnect.getBooksSkuIDFromDB(salesOrderId);
        allure.startStep("Validatating add on line items details");
        expect(booksSkuID.bookSkuId).toEqual(addOnLineItemsDetails.getBooksSkuID);
        expect(booksSkuID.booksSkuName).toEqual(addOnLineItemsDetails.gatBooksSkuName);
        expect(booksSkuID.booksInvoicePrice).toEqual(addOnLineItemsDetails.getBooksInvoicePrice);
        allure.startStep("Validatation of add on line items details is done");

    })

    it('Verify the sales skus and skus names', async () => {
        let generateSalesSkuIdAndNames = await verifyOmsOrderDetails.copySalesSkuIdAndNamesFromUI();
        let salesSkuId = await mongoconnect.getsalesSkuFromDB(salesOrderId);
        allure.startStep("Validate the sales sku's");
        expect(generateSalesSkuIdAndNames.copySdCardFromUI).toEqual(salesSkuId.salesSdCard);
        expect(generateSalesSkuIdAndNames.copyTableFromUI).toEqual(salesSkuId.salesTablet);
        allure.startStep("Validatation done for sales sku's");
        allure.startStep("Validate the shipment sku's names");
        let salesSkuName = await mongoconnect.getsalesSkuNameFromDB(salesOrderId);
        expect(generateSalesSkuIdAndNames.copySdCardNameFromUI).toEqual(salesSkuName.salesSdCardSkuName);
        expect(generateSalesSkuIdAndNames.copyTabletNameFromUI).toEqual(salesSkuName.salesTabletSkuName);
        allure.startStep("Validatation done for sales sku's names");
        allure.endStep();
    })

    it('Verify price of each line items equals to sub-total', async() => {
       let copySdCardAndTabletlineItemsPrice =  await verifyOmsOrderDetails.copySdCradAndTabletLineItemsPrice();
       console.log('each line item price' + copySdCardAndTabletlineItemsPrice.sum);
       console.log('sub total' + copySdCardAndTabletlineItemsPrice.payamentSubTotalAmount);
       expect(copySdCardAndTabletlineItemsPrice.sum).toEqual(copySdCardAndTabletlineItemsPrice.payamentSubTotalAmount);       
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
