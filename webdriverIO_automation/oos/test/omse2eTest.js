import SdcardandTabletOrderPage from '../pages/sd.card.and.tablet.order.page';
import mongoconnect from '../utils/mongoconnect';
import { AllureUtil as allure } from "../utils/allure.util";

describe('Verify OMS test cases', async () => {

    beforeEach('Opening the OMS portal', async () => {
        allure.startStep("Maximize the window");
        await browser.maximizeWindow();
        allure.startStep('Open Byjus OMS page');
        await SdcardandTabletOrderPage.openOMSPage();
        allure.startStep('Login to the Home page', true);
        await SdcardandTabletOrderPage.loginHomePage(process.env.USER_EMAIL_ACHIEVETESTING, process.env.PWD_ACHIEVETESTING);
    })

    it('E2E flow for SD card', async () => {
        allure.startStep('Open SSO Id and copy Sku Id');
        let skuID = await SdcardandTabletOrderPage.openSSOIdandCopySkuIdByjusClasses();
        allure.startStep('Address of window is stoted in a variable');
        const handles = await browser.getWindowHandles();
        allure.startStep('Change status to In stock');
        let itemId = await SdcardandTabletOrderPage.changeStatusToInStockByjusClasses(skuID.sdCardSkuID, skuID.tabletSkuID);
        allure.startStep('Create Inventory request');
        await SdcardandTabletOrderPage.createInventoryRequestByjusClasses();

        allure.startStep('Scan Item and Approve Request');
        await SdcardandTabletOrderPage.scanItemandApproveRequestForTabletByjusClasses(itemId.tablet_itemID);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let otpTablet = await mongoconnect.getOtpFromDBForTabletByjusClasses(itemId.tablet_itemID);
        allure.startStep('verify Otp for Scan and Approve request');
        await SdcardandTabletOrderPage.verifyOtpForScanandApproverequestForTabletByjusClasses(otpTablet);

        await SdcardandTabletOrderPage.scanItemandApproveRequestForSd_CardByjusClasses(itemId.sdCard_itemID);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let otpSd_Card = await mongoconnect.getOtpFromDBForSd_CardByjusClasses(itemId.sdCard_itemID);
        allure.startStep('verify Otp for Scan and Approve request');
        await SdcardandTabletOrderPage.verifyOtpForScanandApproverequestForSd_CardByjusClasses(otpSd_Card);

        allure.startStep('Scan item and Assign request');
        await SdcardandTabletOrderPage.scanItemandAssignRequestForTabletByjusClasses(itemId.tablet_itemID);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let assignedOtpTablet = await mongoconnect.getOtpFromDBForTabletByjusClasses(itemId.tablet_itemID);
        allure.startStep('Verify otp for Scan and Assign request and Verify status');
        await SdcardandTabletOrderPage.verifyOtpForScanandAssignrequestandVerifyStatusForTablet(assignedOtpTablet,itemId.tablet_itemID);

        allure.startStep('Scan item and Assign request');
        await SdcardandTabletOrderPage.scanItemandAssignRequestForSd_CardByjusClasses(itemId.sdCard_itemID);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let assignedOtpSd_Card = await mongoconnect.getOtpFromDBForTabletByjusClasses(itemId.sdCard_itemID);
        allure.startStep('Verify otp for Scan and Assign request and Verify status');
        await SdcardandTabletOrderPage.verifyOtpForScanandAssignrequestandVerifyStatusForSd_Card(assignedOtpSd_Card,itemId.sdCard_itemID);


        allure.startStep('Close the WMS window');
        await browser.closeWindow();
        allure.startStep('Switch to OMS portal window');
        await browser.switchToWindow(handles[0]);
        allure.startStep('Impersonate user');
        await SdcardandTabletOrderPage.impersonateUser();
        allure.startStep('Changed the status to packed');
        await SdcardandTabletOrderPage.changeStatusToPackedByjusClasses(itemId.sdCard_itemID, itemId.tablet_itemID);
        allure.startStep('Change the status to Shipped and create dispatch batch');
        await SdcardandTabletOrderPage.changeStatusToShippedandCreateDispatchBatch();
        allure.startStep('Get AWB no from DB');
        const awbnumber = await mongoconnect.getAWBNumberFromDB();
        allure.startStep('Wait for 5 sec to get AWB no from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Change the status to Delivered');
        await SdcardandTabletOrderPage.changeStatusToDelivered(awbnumber);
        allure.endStep();
    })
})


