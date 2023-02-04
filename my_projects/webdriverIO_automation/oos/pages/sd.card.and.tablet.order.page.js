import BasePage from './base.page';
import { getRandomNum } from '../utils/function.js';
let randomVar = getRandomNum(6);

class SdcardandTabletOrderPage extends BasePage {

    get btnSignInWithGoogle() {
        return $("//button[contains(text(),' Sign in with Google')]")
    }
    get btnSignInWithGoogleWMS() {
        return $("//button[contains(text(),' Sign In With Google')]")
    }
    get btnContinueWithGoogle() {
        return $("(//button[@name='googleSignUpButton'])[2]")
    }
    get btnContinueWithGoogleWMS() {
        return $("(//span[text()='Continue with Google'])[2]")
    }
    get tfEnterMailAddress() {
        return $("#identifierId")
    }
    get btnNext() {
        return $("//span[text()='Next']/..")
    }
    get tfEnterPassword() {
        return $("input[type='password']")
    }
    get dashboardTab() {
        return $("a[href='/dashboard']")
    }
    get ordersTab() {
        return $("a[href='/orders']")
    }
    get ssoProductsTab() {
        return $("//p[text()='SSO (Products)']")
    }
    get tfSearchBarSsoProducts() {
        return $("input[name='searchText']")
    }
    btnOpenSSOId(Id) {
        return $("//a[@href='/orders/product-sales-sub-orders/" + Id + "']")
    }
    get skuIDOfTablet() {
        return $("(//td)[10]")
    }
    get skuIDOfSdCard() {
        return $("(//td)[17]")
    }
    get reportsAndJobsTab() {
        return $("i[class='bjs-reports-and-jobs']")
    }
    get uploadTemplatesTab() {
        return $("i[class='bjs-upload-template-icon']")
    }
    get jobInstanceTab() {
        return $("//div[@class='link-content-icon']/..//i[@class='bjs-job-instance-icon']")
    }
    get uploadHistoryTab() {
        return $("//a[text()='Uploads History']")
    }
    get actionButton() {
        return $("(//button[text()='Actions'])[2]")
    }
    get btnupload() {
        return $("(//button[text()='Upload'])[2]")
    }
    get tfJobName() {
        return $("input[name='jobName']")
    }
    get btnChooseFile() {
        return $("input[name='uploadFile']")
    }
    get btnUpload() {
        return $("//button[text()='Upload']")
    }
    verifyJobStatus(jobName) {
        return $("//td[text()='" + jobName + "']/..//td[text()='SUCCEEDED']")
    }
    get inventoryTab() {
        return $("i[class='bjs-inventory1']")
    }
    get btnInventory() {
        return $("i[class='bjs-inventory']")
    }
    get ddToSelectSkuID() {
        return $("span[class='Select-value-label']")
    }
    get tfInventorySearchBar() {
        return $("input[name='searchText']")
    }
    verifyItemStatus(skuID) {
        return $("//td[text()='" + skuID + "']/../td/span[text()='In Stock']")
    }
    get inventoryRequestTab() {
        return $("//p[text()='Inventory Requests']")
    }
    get ddAction() {
        return $("//button[text()='Actions']")
    }
    get ddValueCreateInventoryRequest() {
        return $("//button[text()='Create Inventory Request']")
    }
    get ddSelectWarehouse() {
        return $("//div[text()='Select your warehouse']")
    }
    get ddMarkRequest() {
        return $("//span[text()='No']")
    }
    get ddSelectInventoryCategory() {
        return $("//div[text()='Select inventory category']")
    }
    get ddRequestedBy() {
        return $("//div[text()='Select Requested By']")
    }
    get ddRequestedTo() {
        return $("//div[text()='Select Requested To']")
    }
    get ddSkuType() {
        return $("//div[text()='Select SKU Type']")
    }
    get ddSkuId() {
        return $("//div[text()='Select SKU Id']")
    }
    selectSkuId(skuID) {
        return $("(//div[text()='" + skuID + "'])[2]")
    }
    get tfQuantityTablet() {
        return $("(//input[@name='quantity'])[1]")
    }
    get tfQuantitySdCard() {
        return $("(//input[@name='quantity'])[2]")
    }
    get btnAddSKU() {
        return $("//button[text()='Add SKU']")
    }
    get btnSave() {
        return $("//button[text()='Save']")
    }
    getbtnRequestId(skuId) {
        return $("//td[text()='" + skuId + "']/../td/..//a")
    }
    get cbRequestFulfillmentBatchId() {
        return $("input[id='customCheckbox0']")
    }
    get ddToScanAndApproveRequest() {
        return $("(//button[@type='button'])[23]")
    }
    get btnScanAndApproveRequest() {
        return $("(//button[@type='button'])[24]")
    }
    get btnOkOnScanWarningPopup() {
        return $("//button[text()='Ok']")
    }
    get tfScanAndApproveRequestPopup() {
        return $("//ul/../input[@type='text']")
    }
    get btnValidate() {
        return $("//button[text()='Validate']")
    }
    get btnProceed() {
        return $("//button[text()='Proceed']")
    }
    get btnSendOtp() {
        return $("//button[text()='Send OTP']")
    }
    get btnValidateOtp() {
        return $("//button[text()='Verify OTP']")
    }
    get tfEnterOtp() {
        return $("input[name='otp']")
    }
    get btnAssign() {
        return $("//button[text()='Assign']")
    }
    getVerifyStatusandStage(skuID) {
        return $("//td[text()='" + skuID + "']/../td[text()='fresh_inventory']")
    }
    get btnActions() {
        return $("//button[text()='Actions']")
    }
    get btnAssignOnScanandAssign() {
        return $("(//button[text()='Assign'])[2]")
    }
    get rbSDCard() {
        return $("(//input[@type='radio'])[1]")
    }
    get rbTablet() {
        return $("(//input[@type='radio'])[2]")
    }
    get ddAssignTo() {
        return $("div[class='Select-placeholder']")
    }
    get ddUserEmailId() {
        return $("div[class='Select-placeholder']")
    }
    getVerifyStatus(skuID) {
        return $("//td[text()='" + skuID + "']/../td/span[text()='Assigned']")
    }
    get ddSelectOptionAkshay() {
        return $("//div[text()='akshay.kulkarni1@byjus.com']")
    }
    get btnAddPresentOwner() {
        return $("//span[text()='Add']")
    }
    get ddSelectShipmentUserEmail() {
        return $("//div[text()='Start typing Email Id...']")
    }
    get ddSelectOptionAkshay() {
        return $("//div[text()='akshay.kulkarni1@byjus.com']")
    }
    get ddSelectWarehouseImpersonate() {
        return $("//div[text()='Select the Warehouse']")
    }
    get selectddOptionIBCWarehouse() {
        return $("//div[text()='IBC Knowledge Park Bengaluru']")
    }
    get btnSelectProfile() {
        return $("//a[text()='achieve testing']")
    }
    get ddSelectImpersonate() {
        return $("//a[@href='/users/impersonate']")
    }
    get ddSelectUserEmail() {
        return $("//div[@class='Select-placeholder']")
    }
    get btnImpersonate() {
        return $("//button[text()='Impersonate']")
    }
    get ordersTabImpersonated() {
        return $("//a[@href='/orders']/..//i[@class='bjs-orders']")
    }
    get btnActionsMapInventory() {
        return $("(//div[@title='Actions'])[2]")
    }
    get btnMapInventory() {
        return $("//button[text()='Map Inventory']")
    }
    get cbtoSkuTablet() {
        return $("(//input[@type='checkbox'])[3]")
    }
    get cbtoSkuSdCard() {
        return $("(//input[@type='checkbox'])[4]")
    }
    get ddArrowTablet() {
        return $("(//span[@class='Select-arrow'])[2]")
    }
    get ddArrowSdCard() {
        return $("(//span[@class='Select-arrow'])[3]")
    }
    getddSelectItemIdValue(itemId) {
        return $("//div[text()='" + itemId + "']")
    }
    get btnAssignIventory() {
        return $("//button[text()='Assign Inventory']")
    }
    get cbtoSkuId() {
        return $("input[class='ant-checkbox-input']")
    }
    get btnActionsMarkSetupDone() {
        return $("div[title='Actions']")
    }
    get btnMarkSetupDone() {
        return $("//button[text()='Mark Setup Done']")
    }
    get btnActionsQualityCheck() {
        return $("(//div[@title='Actions'])[2]")
    }
    get ddSelectCreatePackage() {
        return $("(//button[@type='button'])[50]")
    }
    get cbtoScreenWiped() {
        return $("//input[@id='customCheckbox1']")
    }
    get cbtoTabBoxChecked() {
        return $("//input[@id='customCheckbox2']")
    }
    get cbtoVideosPlaying() {
        return $("//input[@id='customCheckbox3']")
    }
    get cbtoAudioAudible() {
        return $("//input[@id='customCheckbox4']")
    }
    get btnCreatePackage() {
        return $("//button[text()='Create Package']")
    }
    get packagesOption() {
        return $("//a[text()='Packages']")
    }
    get btnActionsPackagesTab() {
        return $("(//div[@title='Actions'])[2]")
    }
    get btnCreateShipment() {
        return $("//button[text()='Create Shipment']")
    }
    get ddSelectShipmentMode() {
        return $("(//div[@class='Select-placeholder'])[1]")
    }
    get ddSelectShipmentPartner() {
        return $("//div[@class='Select-placeholder']")
    }
    get ddSelectWarehouseHandoverFromdd() {
        return $("//div[text()='Warehouse handover']")
    }
    get ddSelectPrioritizedLp() {
        return $("(//div[@class='Select-placeholder'])[1]")
    }
    get ddSelectWareHouseInCreateShipement() {
        return $("(//div[@class='Select-placeholder'])[2]")
    }
    get btnCreate() {
        return $("//button[text()='Create']")
    }
    get verifyStatusisShipped() {
        return $("//span[text()='shipped']")
    }
    get shipmentsOption() {
        return $("//a[text()='Shipments']")
    }
    getverifyShipementIdCreated(ssoId) {
        return $("//span[text()='SHO1-" + ssoId + "']")
    }
    get copyAWBNo() {
        return $("(//td[text()])[35]")
    }
    get shipmentsTab() {
        return $("a[href='/shipments']")
    }
    get btnDispatchBatches() {
        return $("//p[text()='Dispatch Batches']")
    }
    get btnScanAWB() {
        return $("button[title='Scan & Assign']")
    }
    get ddSelectScanType() {
        return $("//div[text()='Select Scan Type']")
    }
    get ddSelectDeliveryPartner() {
        return $("//div[text()='Select Delivery Partner']")
    }
    get ddSelectWarehouseHandoverOption() {
        return $("//div[text()='Warehouse Handover']")
    }
    get ddSelectWarehouseCreateDispatchBatch() {
        return $("//div[text()='Select Warehouse']")
    }
    get ddSelectIBCKnowledgeParkOption() {
        return $("//div[text()='IBC Knowledge Park Bengaluru']")
    }
    get ddSelectCustomerType() {
        return $("//div[text()='Select Customer Type']")
    }
    get btnCreateManifest() {
        return $("//button[text()=' Create Manifest']")
    }
    get tfScanBarcodeOrQrCode() {
        return $("input[name='barcode']")
    }
    get btnAdd() {
        return $("//button[text()='Add']")
    }
    get shipmentsOrdersOption() {
        return $("//p[text()='Shipment Orders']")
    }
    get selectddToSearchAWBNo() {
        return $("span[class='Select-value-label']")
    }
    get selectAWBNoOption() {
        return $("//div[text()='AWB No.']")
    }
    getopenShipmentId(ssoId) {
        return $("//a[text()='SHO1-" + ssoId + "']")
    }
    get ddActionToMarkDelivered() {
        return $("(//button[@type='button'])[21]")
    }
    get btnMarkDelivered() {
        return $("//button[text()='Mark Delivered ']")
    }
    get btnOkDeliveryShipmentPopUp() {
        return $("//button[text()='OK']")
    }
    verifyDeliveryStatusIsDelivered(ssoId) {
        return $("//span[text()='#SHO1-SSO1-" + ssoId + "']/../span[text()='delivered']")
    }



    async loginHomePage(username, password) {
        // while method called after using new window function it requirs time to load the page
        await browser.pause(5000);
        let googleSignInBtnDisplayed = await this.btnSignInWithGoogle.isDisplayed({ timeout: 5000 });
        if (googleSignInBtnDisplayed) {
            await this.btnSignInWithGoogle.click();
            await this.btnContinueWithGoogle.click();
            if (await this.tfEnterMailAddress.isDisplayed({ timeout: 5000 })) {
                await this.tfEnterMailAddress.setValue(username);
                await this.btnNext.click();
                await this.tfEnterPassword.waitForDisplayed({ timeout: 5000 });
                await this.tfEnterPassword.setValue(password);
                await this.btnNext.click();
            }
        }
        await this.dashboardTab.waitForDisplayed({ timeout: 120000 });
    }

    async changeSKUandItemIDOnCSVFileandUpload(tabletSkuID, sdCardskuID) {

        const fs = require("fs");
        const csv = require('csvtojson');
        const { Parser } = require('json2csv');
        const path = require('path');
        const filePath = path.join(process.cwd(), process.env.ADD_INVENTORY_FILE);
        const addInvenotry = await csv().fromFile(filePath);
        addInvenotry[0].skuId = tabletSkuID,
            addInvenotry[0].itemId = tabletSkuID + randomVar
        addInvenotry[0].serialNumber = "90909" + randomVar
        addInvenotry[0].imeiNumber = "909099090" + randomVar
        addInvenotry[1].skuId = sdCardskuID,
            addInvenotry[1].itemId = sdCardskuID + randomVar
        let tabletItemId = addInvenotry[0].itemId
        let sdCardItemId = addInvenotry[1].itemId
        const addInvenotryInCsv = new Parser({ fields: ["skuId", "itemId", "batchId", "warehouseId", "category", "serialNumber", "imeiNumber"] }).parse(addInvenotry);
        fs.writeFileSync(filePath, addInvenotryInCsv);
        await this.btnChooseFile.waitForClickable({ timeout: 60000 });
        await this.btnChooseFile.setValue(filePath);
        await this.btnUpload.click();
        return { tabletItemId, sdCardItemId };
    }

    async openSSOIdandCopySkuId() {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await this.ordersTab.click();
        await this.ssoProductsTab.click();
        await this.tfSearchBarSsoProducts.setValue("SSO1-2205130654320103");
        await browser.keys("Enter");
        await this.btnOpenSSOId("SSO1-2205130654320103").click();
        let tabletSkuID = await this.skuIDOfTablet.getText();
        let SdcardSkuID = await this.skuIDOfSdCard.getText();
        return { tabletSkuID, SdcardSkuID };
    }

    async changeStatusToInStock(tabletSkuID, sdCardskuID) {
        await browser.newWindow(process.env.WMS_BYJUS_URL);
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(8000);
        let googleSignInBtnDisplayed = await this.btnSignInWithGoogleWMS.isDisplayed({ timeout: 5000 });
        if (googleSignInBtnDisplayed) {
            await this.btnSignInWithGoogleWMS.click();
            await this.btnContinueWithGoogleWMS.click();
            if (await this.tfEnterMailAddress.isDisplayed({ timeout: 5000 })) {
                await this.tfEnterMailAddress.setValue(username);
                await this.btnNext.click();
                await this.tfEnterPassword.waitForDisplayed({ timeout: 5000 });
                await this.tfEnterPassword.setValue(password);
                await this.btnNext.click();
            }
        }
        await this.reportsAndJobsTab.waitForDisplayed({ timeout: 10000 });
        await this.reportsAndJobsTab.click();
        await this.uploadTemplatesTab.click();
        await this.actionButton.click();
        await this.btnupload.click();
        let jobName = "Job_ID" + randomVar;
        await this.tfJobName.setValue(jobName);
        let itemID = await this.changeSKUandItemIDOnCSVFileandUpload(tabletSkuID, sdCardskuID);
        await browser.refresh();
        await this.reportsAndJobsTab.click();
        await this.jobInstanceTab.click();
        await this.uploadHistoryTab.click();
        try { await this.verifyJobStatus(jobName).waitForDisplayed({ timeout: 10000 }) }
        catch { }
        if (await this.verifyJobStatus(jobName).isDisplayed() == false) {
            // Added hard wait after discussing that it should be followed
            await browser.pause(30000);
            await browser.refresh();
            await this.uploadHistoryTab.click();
            if (await this.verifyJobStatus(jobName).isDisplayed() == false) {
                // Added hard wait after discussing that it should be followed
                await browser.pause(30000);
                await browser.refresh();
                await this.uploadHistoryTab.click();
                if (await this.verifyJobStatus(jobName).isDisplayed() == false) {
                    // Added hard wait after discussing that it should be followed
                    await browser.pause(20000);
                    await browser.refresh();
                    await this.uploadHistoryTab.click();
                    await this.verifyJobStatus(jobName).waitForDisplayed({ timeout: 10000 });
                    if (await this.verifyJobStatus(jobName).isDisplayed() == false) {
                        // Added hard wait after discussing that it should be followed
                        await browser.pause(20000);
                        await browser.refresh();
                        await this.uploadHistoryTab.click();
                        await this.verifyJobStatus(jobName).waitForDisplayed({ timeout: 10000 });
                    }
                }
            }

        }
        await this.inventoryTab.waitForClickable({ timeout: 30000 });
        await this.inventoryTab.click();
        await this.btnInventory.click();
        await this.ddToSelectSkuID.click();
        await browser.keys(["S", "k", "u", "Tab"]);
        await this.tfInventorySearchBar.setValue(tabletSkuID);
        await browser.keys("Enter");
        await this.verifyItemStatus(tabletSkuID).waitForDisplayed({ timeout: 60000 });
        // Wait for clearing the previous value
        await browser.pause(2000);
        await this.tfInventorySearchBar.clearValue();
        await this.tfInventorySearchBar.setValue(sdCardskuID);
        await browser.keys("Enter");
        await this.verifyItemStatus(sdCardskuID).waitForDisplayed({ timeout: 60000 });
        return itemID;
    }

    async createInventoryRequest(tabletSkuID, sdCardskuID) {
        await this.inventoryTab.click();
        await this.inventoryRequestTab.click();
        await this.ddAction.click();
        await this.ddValueCreateInventoryRequest.click();
        await this.ddSelectWarehouse.waitForClickable({ timeout: 20000 });
        await this.ddSelectWarehouse.click();
        await browser.keys(["Tab"]);
        await this.ddMarkRequest.click();
        await browser.keys(["Y", "e", "s", "Tab"]);
        await this.ddSelectInventoryCategory.click();
        await browser.keys(["Tab"]);
        await this.ddRequestedBy.click();
        await browser.keys(["Tab"]);
        await this.ddRequestedTo.click();
        await browser.keys(["Tab"]);
        await this.ddSkuType.click();
        await browser.keys(["T", "a", "b", "l", "e", "t", "Tab"]);
        await this.ddSkuId.click();
        await browser.keys(tabletSkuID);
        await this.selectSkuId(tabletSkuID).click();
        await this.tfQuantityTablet.setValue("1");
        await this.btnAddSKU.click();
        await this.ddSkuType.click();
        await browser.keys(["Tab"]);
        await this.ddSkuId.click();
        await browser.keys(sdCardskuID);
        await this.selectSkuId(sdCardskuID).click();
        await this.tfQuantitySdCard.setValue("1");
        await this.btnSave.click();

    }

    async scanItemandApproveRequestTablet(tabletSkuID, tabletItemId) {
        await this.getbtnRequestId(tabletSkuID).waitForClickable({ timeout: 20000 });
        await this.getbtnRequestId(tabletSkuID).click();
        await this.cbRequestFulfillmentBatchId.click();
        await this.ddToScanAndApproveRequest.click();
        await this.btnScanAndApproveRequest.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.tfScanAndApproveRequestPopup.setValue(tabletItemId);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.btnSendOtp.click();
    }
    async scanItemandApproveRequestSdCard(sdCardskuID, sdCardItemId) {
        await this.inventoryTab.click();
        await this.inventoryRequestTab.click();
        await this.getbtnRequestId(sdCardskuID).waitForClickable({ timeout: 20000 });
        await this.getbtnRequestId(sdCardskuID).click();
        await this.cbRequestFulfillmentBatchId.click();
        await this.ddToScanAndApproveRequest.click();
        await this.btnScanAndApproveRequest.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.tfScanAndApproveRequestPopup.setValue(sdCardItemId);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.btnSendOtp.click();
    }

    async verifyOtpForScanandApproverequest(otp1) {
        await this.btnValidateOtp.click();
        await this.tfEnterOtp.setValue(otp1);
        await this.btnAssign.click();

    }

    async scanItemandAssignRequestTablet(tabletSkuID, tabletItemId) {
        await this.inventoryTab.waitForClickable({ timeout: 20000 });
        await this.inventoryTab.click();
        await browser.refresh();
        await this.btnInventory.click();
        await this.getVerifyStatusandStage(tabletSkuID).waitForDisplayed({ timeout: 20000 });
        await this.btnActions.click();
        await this.btnAssign.click();
        await this.rbTablet.click();
        await this.tfScanAndApproveRequestPopup.setValue(tabletItemId);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.ddAssignTo.click();
        await browser.keys(["S", "e", "t", "u", "p", "Tab"]);
        await this.ddUserEmailId.click();
        await this.ddSelectOptionAkshay.click();
        await this.btnSendOtp.click();
    }

    async scanItemandAssignRequestSdCard(sdCardskuID, sdCardItemId) {
        await this.inventoryTab.waitForClickable({ timeout: 20000 });
        await this.inventoryTab.click();
        await browser.refresh();
        await this.btnInventory.click();
        await this.getVerifyStatusandStage(sdCardskuID).waitForDisplayed({ timeout: 20000 });
        await this.btnActions.click();
        await this.btnAssign.click();
        await this.rbSDCard.click();
        await this.tfScanAndApproveRequestPopup.setValue(sdCardItemId);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.ddAssignTo.click();
        await browser.keys(["S", "e", "t", "u", "p", "Tab"]);
        await this.ddUserEmailId.click();
        await this.ddSelectOptionAkshay.click();
        await this.btnSendOtp.click();
    }

    async verifyOtpForScanandAssignrequestandVerifyStatusTablet(otp2, tabletItemId, tabletSkuID) {
        await this.tfEnterOtp.waitForDisplayed({ timeout: 20000 });
        await this.tfEnterOtp.setValue(otp2);
        await this.btnAssignOnScanandAssign.click();
        await this.tfInventorySearchBar.setValue(tabletItemId);
        await browser.keys("Enter");
        await this.getVerifyStatus(tabletSkuID).waitForDisplayed({ timeout: 20000 });
        // await this.tfInventorySearchBar.clearValue();
        // await this.tfInventorySearchBar.setValue(sdCardItemId);
        // await browser.keys("Enter");
        // await this.getVerifyStatus(sdCardskuID).waitForDisplayed({ timeout: 20000 });
    }

    async verifyOtpForScanandAssignrequestandVerifyStatusSdCard(otp2, sdCardItemId, sdCardskuID) {
        await this.tfEnterOtp.waitForDisplayed({ timeout: 20000 });
        await this.tfEnterOtp.setValue(otp2);
        await this.btnAssignOnScanandAssign.click();
        await this.tfInventorySearchBar.setValue(sdCardItemId);
        await browser.keys("Enter");
        await this.getVerifyStatus(sdCardskuID).waitForDisplayed({ timeout: 20000 });
    }

    async impersonateUser() {
        await this.btnAddPresentOwner.click();
        await this.ddSelectShipmentUserEmail.click();
        await this.ddSelectOptionAkshay.click();
        await this.ddSelectWarehouseImpersonate.click();
        await browser.keys(["I", "B", "C"]);
        await this.selectddOptionIBCWarehouse.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.btnSelectProfile.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.ddSelectImpersonate.click();
        await this.ddSelectUserEmail.click();
        await browser.keys(["a", "k", "s", "h", "a", "y"]);
        await this.ddSelectOptionAkshay.click();
        await this.btnImpersonate.click();
    }

    async changeStatusToPacked(tabletItemId, sdCardItemId) {
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.ordersTabImpersonated.click();
        await this.ssoProductsTab.click();
        await this.tfSearchBarSsoProducts.setValue("SSO1-2205130654320103");
        await browser.keys("Enter");
        await this.btnOpenSSOId("SSO1-2205130654320103").click();
        await this.btnActionsMapInventory.click();
        await this.btnMapInventory.click();
        await browser.pause(5000);
        await this.cbtoSkuTablet.click();
        await browser.pause(5000);
        await this.ddArrowTablet.click();
        await this.getddSelectItemIdValue(tabletItemId).scrollIntoView();
        await this.getddSelectItemIdValue(tabletItemId).click();
        await browser.pause(5000);
        await this.cbtoSkuSdCard.click();
        await browser.pause(5000);
        await this.ddArrowSdCard.click();
        await this.getddSelectItemIdValue(sdCardItemId).scrollIntoView();
        await this.getddSelectItemIdValue(sdCardItemId).click();
        await this.btnAssignIventory.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.cbtoSkuId.click();
        await this.btnActionsMarkSetupDone.click();
        await this.btnMarkSetupDone.click();
        await this.btnOkOnScanWarningPopup.click();
        await browser.refresh();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.cbtoSkuId.click();
        await this.btnActionsQualityCheck.click();
        await this.ddSelectCreatePackage.click();
        await this.ddSelectUserEmail.click();
        await browser.keys(["Tab"]);
        await this.cbtoScreenWiped.click();
        await this.cbtoTabBoxChecked.click();
        await this.cbtoVideosPlaying.click();
        await this.cbtoAudioAudible.click();
        await this.btnCreatePackage.waitForClickable({ timeout: 30000 });
        await this.btnCreatePackage.click();
        await browser.pause(10000);
    }

    async changeStatusToShippedandCreateDispatchBatch() {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await this.ordersTab.click();
        await this.ssoProductsTab.click();
        await this.tfSearchBarSsoProducts.setValue("SSO1-2205130641130368");
        await browser.keys("Enter");
        await this.btnOpenSSOId("SSO1-2205130641130368").click();
        await this.packagesOption.waitForClickable({ timeout: 60000 });
        await this.packagesOption.click();
        await this.cbtoSkuId.click();
        await this.btnActionsPackagesTab.click();
        await this.btnCreateShipment.click();
        await this.ddSelectShipmentPartner.click();
        await this.ddSelectWarehouseHandoverFromdd.scrollIntoView();
        await this.ddSelectWarehouseHandoverFromdd.click();
        await this.btnCreate.click();
        await this.verifyStatusisShipped.waitForDisplayed({ timeout: 20000 });
        await this.shipmentsOption.waitForClickable({ timeout: 20000 });
        await this.shipmentsOption.click();
        await this.getverifyShipementIdCreated("SSO1-2205130641130368").waitForDisplayed({ timeout: 20000 });
        await this.shipmentsTab.click();
        await this.btnDispatchBatches.click();
        await this.btnScanAWB.scrollIntoView();
        await this.btnScanAWB.click();
        await this.ddSelectScanType.click();
        await browser.keys(["B", "a", "r", "c", "o", "d", "e", "Tab"]);
        await this.ddSelectDeliveryPartner.click();
        await this.ddSelectWarehouseHandoverOption.scrollIntoView();
        await this.ddSelectWarehouseHandoverOption.click();
        await this.ddSelectWarehouseCreateDispatchBatch.click();
        await this.ddSelectIBCKnowledgeParkOption.scrollIntoView();
        await this.ddSelectIBCKnowledgeParkOption.click();
        await this.ddSelectCustomerType.click();
        await browser.keys(["I", "n", "d", "i", "v", "i", "d", "Tab"]);
        await this.btnCreate.click();
    }

    async changeStatusToDelivered(awbnumber) {
        await this.tfScanBarcodeOrQrCode.setValue(awbnumber);
        await this.btnAdd.click();
        await this.btnCreateManifest.click();
        await this.btnOkOnScanWarningPopup.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.shipmentsTab.click();
        await this.shipmentsOrdersOption.waitForDisplayed({ timeout: 20000 });
        await this.shipmentsOrdersOption.waitForClickable({ timeout: 20000 });
        await this.shipmentsOrdersOption.click();
        await this.selectddToSearchAWBNo.click();
        await this.selectAWBNoOption.click();
        await this.tfInventorySearchBar.setValue(awbnumber);
        await this.getopenShipmentId("SSO1-2205130641130368").click();
        await this.ddActionToMarkDelivered.waitForClickable({ timeout: 20000 });
        await this.ddActionToMarkDelivered.click();
        await this.btnMarkDelivered.click();
        await this.btnOkDeliveryShipmentPopUp.click();
        await this.verifyDeliveryStatusIsDelivered("SSO1-2205130641130368").waitForDisplayed({ timeout: 20000 });
    }


}
export default new SdcardandTabletOrderPage();

