import mongoconnect from '../../../../utils/mongoconnect';
import verifyOmsOrderDetails from '../../../../pages/verifyOmsOrderDetails';
import SDcardOrderPage from '../../../../pages/sd.card.order.page';
const { btlpOrderData } = require('../../../../data/btlpOrderData');
const draftOrderMockData = require('../../../../data/byjus-classes/competitive-order/ias/hindi/draftOrder.json');
const salesOrderMockData = require('../../../../data/byjus-classes/competitive-order/ias/hindi/salesOrder.json');
const salesSubOrderMockData = require('../../../../data/byjus-classes/competitive-order/ias/hindi/salesSubOrder.json');
import { AllureUtil as allure } from "../../../../utils/allure.util";
import { sumArray } from '../../../../utils/function';
import { generateSalesOrderId } from '../../../../utils/function';
import { generateSalesSubOrderId } from '../../../../utils/function';
const salesOrderId = generateSalesOrderId();
const salesSubOrderId = generateSalesSubOrderId(salesOrderId)
let count = 1;

describe('Validating Byjus classes Competitive order for Hindi', async () => {


    beforeEach('Punching order through DB', async () => {
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        allure.startStep('Open Byjus OMS page');
        await SDcardOrderPage.openOmsUrl(count, salesSubOrderId);
        allure.startStep('Login to the Home page', true);
        await SDcardOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        count = count + 1;

    })

    it('Adding json to collections for generating the Order Id', async () => {
        allure.startStep("Adding order to Sales order Collection");
        await mongoconnect.addOrderToSalesOrderCollection(salesOrderId, salesOrderMockData);
        allure.startStep("Adding order to Sales Sub order Collection");
        await mongoconnect.addOderToSalesSubOrderCollection(salesOrderId, salesSubOrderId, salesSubOrderMockData);
        allure.startStep("Adding order to draft order Collection");
        await mongoconnect.addOderToDraftOrdersCollection(draftOrderMockData, salesOrderId, salesSubOrderId);
        allure.endStep();
        console.log(salesOrderId);
    })

    it('Verifying the Sales order Id details', async () => {
        allure.startStep("Verifying the Sales order Id details");
        await verifyOmsOrderDetails.verifySalesOrderDetails(salesOrderId, salesSubOrderId);
        allure.endStep();
    })

    it('Verifying changing the status to Confirmed and Verify the order status history', async () => {
        allure.startStep("Verify change status to Confirmed and verify order status history");
        await verifyOmsOrderDetails.changeStatusToConfirmedAndVerifyOrderStatusHistory();
        allure.endStep();
    })

    it('Verifying the order details and payment values from UI are equal to the values in Kart collection', async () => {
        allure.startStep("Copy order details and payments from UI");
        let orderAndPaymentDetailsOms = await verifyOmsOrderDetails.verifyOrderDetailsAndPayments();
        allure.startStep("Get order details and payments from draft order collection");
        let orderAndPaymentDetailsKart = await mongoconnect.getOrderAndPaymentDetails(salesOrderId);
        allure.startStep("Validate the payment value on sales order page is equal to Sku sub total amount");
        expect(orderAndPaymentDetailsOms[2]).toEqual(orderAndPaymentDetailsOms[3]);
        allure.startStep("Validate the order details and payment values from UI are equal to the values from DB");
        expect(orderAndPaymentDetailsOms).toEqual(orderAndPaymentDetailsKart);
        allure.endStep();
    })

    it('Verify the Shipemnt skus', async () => {
        allure.startStep("Copy shipment skus from Csv file");
        let shipmentSkusCsv = await verifyOmsOrderDetails.copyingShipmentSkusFromCsv(4, process.env.SHIPMENT_SKUS_BYJUS_CLASSES_CSV);
        allure.startStep("Find out the length of Shipment sku array");
        let shipmentSkuCount = shipmentSkusCsv.skuIds.length;
        allure.startStep("Copy Shipment sku names from UI");
        let shipmentSkus = await verifyOmsOrderDetails.copyShipmentSku(shipmentSkuCount, shipmentSkusCsv.skuIds);
        allure.startStep("Validate the sales sku names");
        expect(shipmentSkus).toEqual(shipmentSkusCsv.skuName);
        allure.endStep();
    })

    it('Verify the sales skus', async () => {
        allure.startStep("Wait for Toggle button to be Clickable");
        await verifyOmsOrderDetails.btnToggleToSalesSku.waitForClickable({ timeout: 30000 });
        allure.startStep("Scroll to Toggle button");
        await verifyOmsOrderDetails.btnToggleToSalesSku.scrollIntoView();
        allure.startStep("Click on Toggle button");
        await verifyOmsOrderDetails.btnToggleToSalesSku.click();
        allure.startStep("Copy shipment skus from Csv file");
        let salesSkusCsv = await verifyOmsOrderDetails.copyingSalesSkusFromCsv(5, process.env.SALES_SKUS_BYJUS_CLASSES_CSV);
        allure.startStep("Find out the length of sales sku array");
        let salesSkuCount = salesSkusCsv.skuIds.length;
        allure.startStep("Copy sales sku names from UI");
        let salesSkus = await verifyOmsOrderDetails.copySalesSkuNames(salesSkuCount, salesSkusCsv.skuIds);
        allure.startStep("Validate the sales sku names");
        expect(salesSkus).toEqual(salesSkusCsv.skuName);
        allure.endStep();
    })

    it('Verify the sum of sku values should match the sub total amount', async () => {
        allure.startStep("Wait for Toggle button to be Clickable");
        await verifyOmsOrderDetails.btnToggleToSalesSku.waitForClickable({ timeout: 30000 });
        allure.startStep("Scroll to Toggle button");
        await verifyOmsOrderDetails.btnToggleToSalesSku.scrollIntoView();
        allure.startStep("Click on Toggle button");
        await verifyOmsOrderDetails.btnToggleToSalesSku.click();
        allure.startStep("Copy shipment skus from Csv file");
        let salesSkusCsv = await verifyOmsOrderDetails.copyingSalesSkusFromCsv(5, process.env.SALES_SKUS_BYJUS_CLASSES_CSV);
        allure.startStep("Find out the length of sales sku array");
        let salesSkuCount = salesSkusCsv.skuIds.length;
        allure.startStep("Copy sales sku price from UI");
        let skuPrice = await verifyOmsOrderDetails.copyPriceOfSku(salesSkuCount, salesSkusCsv.skuIds);
        allure.startStep("Adding all the sales sku price values");
        let sum = await sumArray(skuPrice.skuPrice);
        allure.startStep("Validate the sum of sku values should match the sub total amount");
        expect(sum).toEqual(parseInt(skuPrice.payamentSubTotalAmount));
        allure.endStep();
    })

    it('Verify PID is generated', async () => {
        allure.startStep("Scroll to PID button");
        await verifyOmsOrderDetails.verifyPid.scrollIntoView();
        allure.startStep("Verify the PID is displayed");
        await expect(await verifyOmsOrderDetails.verifyPid.isDisplayed()).toEqual(true);
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
        await verifyOmsOrderDetails.verifyRaisePriorityOption(btlpOrderData.priorityOptions);
        allure.endStep();
    })

    //Skiiped because this feature is under maintanance
    it.skip('Verify editing the Address details', async () => {
        await verifyOmsOrderDetails.openSSOId(salessuborderId);
        const addressDetails = ["411057", "Maharashtra (MH)", "Pune City East", "Pune Address line 1", "Pune Address line 2"];
        await verifyOmsOrderDetails.verifyEditingShippingAddress(addressDetails[0], addressDetails[3], addressDetails[4]);
        let array = await verifyOmsOrderDetails.verifySalesAndCustomerDetails();
        expect(array.addressDetails).toEqual(addressDetails);
    })
})
