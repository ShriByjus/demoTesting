import mongoconnect from '../utils/mongoconnect';
import verifyOmsOrderDetails from '../pages/verifyOmsOrderDetails';
// import postgresConnect from '../utils/postgresConnect';
import SDcardOrderPage from '../pages/sd.card.order.page';

// const { byjusSalesOrderSdCard } = require('../data/byjus.sales.sd.card.order');
// const { byjusSalesSubOrderSdCard } = require('../data/byjus.sales.sub.sd.card.order');
// const salesOrderMockData = require('../data/salesOrder.json');
// const salesSubOrderMockData = require('../data/salesSubOrder.json');
const draftOrderMockData = require('../data/btlpData/singleOrders/draftOrderUkg.json');
const salesOrderMockData = require('../data/btlpData/singleOrders/salesOrderUkg.json');
const salesSubOrderMockData = require('../data/btlpData/singleOrders/salesSubOrderUkg.json');
import { AllureUtil as allure } from "../utils/allure.util";
import { sumArray } from '../utils/function';


const salesSkuIds = ["DDLKNA23", "SBXMGZ"];
const shipmentSkuId = ["SBXMGZUC", "D1NALKLK"];

let salesorderId;
let salessuborderId;
let draftOrderId;

describe('Testing order creation by adding Joson files directly to DB', async () => {

    beforeEach('Punching order through DB', async () => {
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        allure.startStep('Open Byjus OMS page');
        await SDcardOrderPage.openOMSPage();
        allure.startStep('Login to the Home page', true);
        await SDcardOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
        salesorderId = await mongoconnect.addOrderToSalesOrderCollection(salesOrderMockData);
        salessuborderId = await mongoconnect.addOderToSalesSubOrderCollection(salesSubOrderMockData);
        draftOrderId = await mongoconnect.addOderToDraftOrdersCollection(draftOrderMockData, salesorderId, salessuborderId);


        console.log("&&&&&&&&&&&&&&" + salessuborderId);
        console.log("&&&&&&&&&&&&&&" + salesorderId);
        console.log("&&&&&&&&&&&&&&" + draftOrderId);



    })


    it('Order details and Payments', async () => {
        await verifyOmsOrderDetails.openSSOId(salessuborderId);
        let orderAndPaymentDetailsOms = await verifyOmsOrderDetails.verifyOrderDetailsAndPayments();
        let orderAndPaymentDetailsKart = await mongoconnect.getOrderAndPaymentDetails(salesorderId);
        expect(orderAndPaymentDetailsOms[2]).toEqual(orderAndPaymentDetailsOms[3]);
        expect(orderAndPaymentDetailsOms).toEqual(orderAndPaymentDetailsKart)
    })

    it.skip('Verify Shipment Sku', async () => {
        await verifyOmsOrderDetails.openSSOId("SSO1-2209131656230699");
        let shipmentSkuCount = shipmentSkuId.length;
        let shipmentSkus = await verifyOmsOrderDetails.copyShipmentSku(shipmentSkuCount, shipmentSkuId);
        console.log("***********" + shipmentSkus);

    })

    it.skip('Verify Sales Sku', async () => {
        await verifyOmsOrderDetails.openSSOId("SSO1-2209131656230699");
        await verifyOmsOrderDetails.btnToggleToSalesSku.click();
        let salesSkuCount = salesSkuIds.length;
        let salesSkus = await verifyOmsOrderDetails.copySalesSkuNames(salesSkuCount, salesSkuIds);
        console.log("***********" + salesSkus);

    })

    it.skip('Verify Sku Price', async () => {
        await verifyOmsOrderDetails.openSSOId("SSO1-2209131656230699");
        await verifyOmsOrderDetails.btnToggleToSalesSku.click();
        let salesSkuCount = salesSkuIds.length;
        let skuPrice = await verifyOmsOrderDetails.copyPriceOfSku(salesSkuCount, salesSkuIds);
        let sum = await sumArray(skuPrice);
        console.log("*********" + sum)

    })
    it.skip('Verify AddOn Items Sku', async () => {
        await verifyOmsOrderDetails.openSSOId("SSO1-2209131656230699");
        await verifyOmsOrderDetails.btnToggleToSalesSku.click();
        let salesSkuCount = salesSkuIds.length;
        let salesSkus = await verifyOmsOrderDetails.copySalesSkuNames(salesSkuCount, salesSkuIds);
        console.log("***********" + salesSkus);

    })
    it.skip('Verify Address details', async () => {
        await verifyOmsOrderDetails.openSSOId("SSO1-2209161002240097");
        let addressDetails = await mongoconnect.getAddressDetails("SO-2209161002240097");
        let customerDetails = await mongoconnect.getCustomerDetails("SO-2209161002240097");
        // addressDetailsArr.push(addressDetails);
        await browser.pause(3000);
        let array = await verifyOmsOrderDetails.verifySalesAndCustomerDetails();
        console.log("%%%%%%%%" + addressDetails);
        console.log("%%%%%" + array.addressDetails);
        expect(array.addressDetails).toEqual(addressDetails);
        expect(array.customerDetails).toEqual(customerDetails);


    })

    it.only('Verify editing the Address details', async () => {
        await verifyOmsOrderDetails.openSSOId(salessuborderId);
        const addressDetails = ["411057", "Maharashtra (MH)", "Pune City East", "Pune Address line 1", "Pune Address line 2"];

        await verifyOmsOrderDetails.verifyEditingShippingAddress(addressDetails[0], addressDetails[3], addressDetails[4]);
        let array = await verifyOmsOrderDetails.verifySalesAndCustomerDetails();
        console.log("%%%%%" + array.addressDetails);
        expect(array.addressDetails).toEqual(addressDetails);


    })



})



