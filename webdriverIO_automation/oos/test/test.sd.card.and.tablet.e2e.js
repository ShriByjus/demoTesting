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
        let skuId = await SdcardandTabletOrderPage.openSSOIdandCopySkuId();
        allure.startStep('Address of window is stoted in a variable');
        const handles = await browser.getWindowHandles();
        allure.startStep('Change status to In stock');
        let itemId = await SdcardandTabletOrderPage.changeStatusToInStock(skuId.tabletSkuID, skuId.SdcardSkuID);
        allure.startStep('Create Inventory request');
        await SdcardandTabletOrderPage.createInventoryRequest(skuId.tabletSkuID, skuId.SdcardSkuID);
        allure.startStep('Scan Item and Approve Request');
        await SdcardandTabletOrderPage.scanItemandApproveRequestTablet(skuId.tabletSkuID, itemId.tabletItemId);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let tabletotp1 = await mongoconnect.getOtpFromDB(itemId.tabletItemId);
        allure.startStep('verify Otp for Scan and Approve request');
        await SdcardandTabletOrderPage.verifyOtpForScanandApproverequest(tabletotp1);
        await SdcardandTabletOrderPage.scanItemandApproveRequestSdCard(skuId.SdcardSkuID, itemId.sdCardItemId);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let sdcardotp1 = await mongoconnect.getOtpFromDB(itemId.sdCardItemId);
        allure.startStep('verify Otp for Scan and Approve request');
        await SdcardandTabletOrderPage.verifyOtpForScanandApproverequest(sdcardotp1);
        allure.startStep('Scan item and Assign request');
        await SdcardandTabletOrderPage.scanItemandAssignRequestTablet(skuId.tabletSkuID, itemId.tabletItemId);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let tabletotp2 = await mongoconnect.getOtpFromDB(itemId.tabletItemId);
        allure.startStep('Verify otp for Scan and Assign request and Verify status');
        await SdcardandTabletOrderPage.verifyOtpForScanandAssignrequestandVerifyStatusTablet(tabletotp2, itemId.tabletItemId, skuId.tabletSkuID);
        allure.startStep('Scan item and Assign request');
        await SdcardandTabletOrderPage.scanItemandAssignRequestSdCard(skuId.SdcardSkuID, itemId.sdCardItemId);
        allure.startStep('Wait for 5 sec to get otp from DB');
        //Added wait for 5 sec to get otp from DB and update it in UI
        await browser.pause(5000);
        allure.startStep('Get otp from DB');
        let sdcardotp2 = await mongoconnect.getOtpFromDB(itemId.sdCardItemId);
        allure.startStep('Verify otp for Scan and Assign request and Verify status');
        await SdcardandTabletOrderPage.verifyOtpForScanandAssignrequestandVerifyStatusSdCard(sdcardotp2, itemId.sdCardItemId, skuId.SdcardSkuID);
        allure.startStep('Close the WMS window');
        await browser.closeWindow();
        allure.startStep('Switch to OMS portal window');
        await browser.switchToWindow(handles[0]);
        allure.startStep('Impersonate user');
        await SdcardandTabletOrderPage.impersonateUser();
        allure.startStep('Changed the status to packed');
        await SdcardandTabletOrderPage.changeStatusToPacked(itemId.tabletItemId, itemId.sdCardItemId);
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