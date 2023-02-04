import BasePage from '../pages/base.page';
import { getRandomNum } from '../../oos/utils/function.js';
let randomVar = getRandomNum(6);
// let orderID = require("../../oos/testData/sales-orders-seed/orderId.json");
// const ssoId = orderID.substring(3);


class OMShomepages extends BasePage {
    get omsHomePage(){
        return $("https://dev-oms.byjusorders.com/dashboard/sales")
    }

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
    btnOpenSSOId(Id) {
        return $("//a[@href='/orders/product-sales-sub-orders/" + Id + "']")
    }
    get skuID() {
        return $("(//td)[37]")     
    }

    get tablet_skuID() {
        // return $("(//td)[37]")
        return $("//td[normalize-space()='TL7WZZKX']")
    }
    get sdCard_skuID() {
        // return $("(//td)[38]")
        return $("//td[normalize-space()='S4JM0506']")
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
    get ddTabletType() {
        return $("//div[text()='Select SKU Type']")
    }
    get ddSkuId() {
        return $("//div[text()='Select SKU Id']")
    }
    get ddTabletId() {
        return $("//div[text()='Select SKU Id']")
    }
    selectSkuId(sdCardSkuID) {
        return $("(//div[text()='" + sdCardSkuID + "'])[2]")
    }
    selectTabletId(tabletSkuID) {
        return $("(//div[text()='" + tabletSkuID + "'])[2]")
    }
    get tfQuantity() {
        return $("input[name='quantity']")
    }
    get addSkuButton() {
        return $("button[title='Add SKUs']")
    }
    get btnSave() {
        return $("//button[text()='Save']")
    }
    getbtnRequestId(email) {
        return $("//td[text()='" + email + "']/../td/..//a")
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
    VerifyStatusandStageByjusTablet(tablet_itemID) {
        return $("//td[text()='" + tablet_itemID + "']/../td[text()='fresh_inventory']") 
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
    VerifyStatusByjusTablet(tablet_itemID) {
        return $("//td[text()='" + tablet_itemID + "']/../td/span[text()='Assigned']")
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
    get cbtoSkuItem() {
        return $("(//input[@type='checkbox'])[2]")
    }
    get ddArrow() {
        return $("(//span[@class='Select-arrow'])[2]")
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
    get btnQualityCheck() {
        return $("//button[text()='Quality Check']")
    }
    get btnCreatePackage() {
        return $("//button[text()='Create Package']")
    }
    get verifyStatusisPacked() {
        return $("(//span[text()='packed'])[11]")
    }
    ////////
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
    get clearSerachFilter() {
        return  $(".Select-clear");
    }
    get clickOnRequestId() {
        return  $("td[tabindex='2']")
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

    async changeSKUandItemIDOnCSVFileandUpload(skuID) {

        const fs = require("fs");
        const csv = require('csvtojson');
        const { Parser } = require('json2csv');
        const path = require('path');
        const filePath = path.join(process.cwd(), process.env.ADD_INVENTORY_FILE);
        const addInvenotry = await csv().fromFile(filePath);
        addInvenotry[0].skuId = skuID,
            addInvenotry[0].itemId = skuID + randomVar
        let itemID = addInvenotry[0].itemId
        const addInvenotryInCsv = new Parser({ fields: ["skuId", "itemId", "batchId", "warehouseId", "category", "serialNumber", "imeiNumber"] }).parse(addInvenotry);
        fs.writeFileSync(filePath, addInvenotryInCsv);
        await this.btnChooseFile.waitForClickable({ timeout: 60000 });
        await this.btnChooseFile.setValue(filePath);
        await this.btnUpload.click();
        return itemID;
    }
        

    async openSSOIdandCopySkuId() {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await this.ordersTab.click();
        await this.ssoProductsTab.click();
        await this.btnOpenSSOId("SSO1-" + ssoId).click();
        let skuID = await this.skuID.getText();
        return skuID;
    }

    async changeStatusToInStock(skuID) {
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
        let itemID = await this.changeSKUandItemIDOnCSVFileandUpload(skuID);
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
        await this.inventoryTab.click();
        await this.btnInventory.click();
        await this.ddToSelectSkuID.click();
        await browser.keys(["S", "k", "u", "Tab"]);
        await this.tfInventorySearchBar.setValue(skuID);
        await browser.keys("Enter");
        await this.verifyItemStatus(skuID).waitForDisplayed({ timeout: 60000 });
        return itemID;
    }

    async createInventoryRequest(skuID) {
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
        await browser.keys(["Tab"]);
        await this.ddSkuId.click();
        await browser.keys(skuID);
        await this.selectSkuId(skuID).click();
        await this.tfQuantity.setValue("1");
        await this.btnSave.click();
    }

    async scanItemandApproveRequest(itemId) {
        await this.getbtnRequestId("achievetesting@byjus.com").waitForClickable({ timeout: 20000 });
        await this.getbtnRequestId("achievetesting@byjus.com").click();
        await this.cbRequestFulfillmentBatchId.click();
        await this.ddToScanAndApproveRequest.click();
        await this.btnScanAndApproveRequest.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.tfScanAndApproveRequestPopup.setValue(itemId);
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

    async scanItemandAssignRequest(itemId, skuID) {
        await this.inventoryTab.waitForClickable({ timeout: 20000 });
        await this.inventoryTab.click();
        await browser.refresh();
        await this.btnInventory.click();
        await this.getVerifyStatusandStage(skuID).waitForDisplayed({ timeout: 20000 });
        await this.btnActions.click();
        await this.btnAssign.click();
        await this.rbSDCard.click();
        await this.tfScanAndApproveRequestPopup.setValue(itemId);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.ddAssignTo.click();
        await browser.keys(["S", "e", "t", "u", "p", "Tab"]);
        await this.ddUserEmailId.click();
        await this.ddSelectOptionAkshay.click();
        await this.btnSendOtp.click();
    }

    async verifyOtpForScanandAssignrequestandVerifyStatus(otp2, skuID, itemId) {
        await this.tfEnterOtp.waitForDisplayed({ timeout: 20000 });
        await this.tfEnterOtp.setValue(otp2);
        await this.btnAssignOnScanandAssign.click();
        await this.tfInventorySearchBar.setValue(itemId);
        await browser.keys("Enter");
        await this.getVerifyStatus(skuID).waitForDisplayed({ timeout: 20000 });
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

    async changeStatusToPacked(itemId) {
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.ordersTabImpersonated.click();
        await this.ssoProductsTab.click();
        await this.btnOpenSSOId("SSO1-" + ssoId).click();
        await this.btnActionsMapInventory.click();
        await this.btnMapInventory.click();
        // await this.cbtoSkuItem.click();
        await this.ddArrow.waitForClickable({ timeout: 20000 });
        await this.ddArrow.click();
        await this.getddSelectItemIdValue(itemId).scrollIntoView();
        await this.getddSelectItemIdValue(itemId).click();
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
        await this.btnQualityCheck.click();
        await this.ddSelectUserEmail.click();
        await browser.keys(["Tab"]);
        await this.btnCreatePackage.click();
    }

    async changeStatusToShippedandCreateDispatchBatch() {
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
        await this.getverifyShipementIdCreated("SSO1-" + ssoId).waitForDisplayed({ timeout: 20000 });
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
        await this.getopenShipmentId("SSO1-" + ssoId).click();
        await this.ddActionToMarkDelivered.waitForClickable({ timeout: 20000 });
        await this.ddActionToMarkDelivered.click();
        await this.btnMarkDelivered.click();
        await this.btnOkDeliveryShipmentPopUp.click();
        await this.verifyDeliveryStatusIsDelivered(ssoId).waitForDisplayed({ timeout: 20000 });
    }



    

    //Functions for byjus classes
    async changeSKUandItemIDByjusClassesOnCSVFileandUpload(sdCardSkuID, tabletSkuID) {
        const fs = require("fs");
        const csv = require('csvtojson');
        const { Parser } = require('json2csv');
        const path = require('path');
        const filePath = path.join(process.cwd(), process.env.ADD_INVENTORY_FILE_BYJUS_CLASSES);
        const addInvenotry = await csv().fromFile(filePath);

        addInvenotry[0].skuId = sdCardSkuID,
            addInvenotry[0].itemId = sdCardSkuID + randomVar
        var sdCard_itemID = addInvenotry[0].itemId

        addInvenotry[1].skuId = tabletSkuID,
        addInvenotry[1].itemId = tabletSkuID + randomVar
        var tablet_itemID = addInvenotry[1].itemId

        let tabletSerialNumber = "787436";
        let imeiNumber = "989645342"
        addInvenotry[1].serialNumber = tabletSerialNumber+randomVar;
        addInvenotry[1].imeiNumber = imeiNumber+randomVar;

        const addInvenotryInCsv = new Parser({ fields: ["skuId", "itemId", "batchId", "warehouseId", "category", "serialNumber", "imeiNumber"] }).parse(addInvenotry);
        fs.writeFileSync(filePath, addInvenotryInCsv);
        await this.btnChooseFile.waitForClickable({ timeout: 60000 });
        await this.btnChooseFile.setValue(filePath);
        await browser.pause(3000);
        await this.btnUpload.click();
        await browser.pause(3000);
        console.log(sdCard_itemID);
        console.log(tablet_itemID)
        return { sdCard_itemID,tablet_itemID };
    }

    async openSSOIdandCopySkuIdByjusClasses() {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await this.ordersTab.click();
        await this.ssoProductsTab.click();
        // await this.btnOpenSSOId("SSO1-" + ssoId).click();

         let search = $("input[placeholder='Enter the exact value']");
         search.waitForDisplayed({ timeout: 10000 });
         search.click();
               search.setValue("SSO1-" + ssoId);
               browser.pause(5000)
               browser.keys('Enter')
        //        browser.pause(5000)
            // $("td[tabindex='2']").click()
        await this.btnOpenSSOId("SSO1-" + ssoId).click();
        var sdCardSkuID = await this.sdCard_skuID.getText();
        var tabletSkuID = await this.tablet_skuID.getText(); 
        console.log(sdCardSkuID);
        console.log(tabletSkuID);
        return { sdCardSkuID, tabletSkuID };
        
    }

    async changeStatusToInStockByjusClasses(sdCardSkuID, tabletSkuID) {
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
        await this.reportsAndJobsTab.waitForClickable({ timeout: 6000 });
        await this.reportsAndJobsTab.click();
        await this.uploadTemplatesTab.click();
        await this.actionButton.click();
        await this.btnupload.click();
        let jobName = "Job_ID" + randomVar;
        await this.tfJobName.setValue(jobName);
        let itemID = await this.changeSKUandItemIDByjusClassesOnCSVFileandUpload(sdCardSkuID, tabletSkuID);
        await browser.refresh();
        await this.reportsAndJobsTab.click();
        await this.jobInstanceTab.click();
        await this.uploadHistoryTab.click();
        try { await this.verifyJobStatus(jobName).waitForDisplayed({ timeout: 10000 }) }
        catch { }
        if (await this.verifyJobStatus(jobName).isDisplayed() == false) {
            // Added hard wait after discussing that it should be followed
            await browser.pause(20000);
            await browser.refresh();
            await this.uploadHistoryTab.click();
            if (await this.verifyJobStatus(jobName).isDisplayed() == false) {
                // Added hard wait after discussing that it should be followed
                await browser.pause(20000);
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
        await this.inventoryTab.click();
        await this.btnInventory.click();
        await this.ddToSelectSkuID.click();
        await browser.keys(["S", "k", "u", "Tab"]);
        await this.tfInventorySearchBar.setValue(sdCardSkuID, tabletSkuID);
        await browser.keys("Enter");
        await this.verifyItemStatus(sdCardSkuID, tabletSkuID).waitForDisplayed({ timeout: 60000 });
        return itemID;
    }

    async createInventoryRequestByjusClasses() {
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
        await browser.pause(1500);
        await this.ddSkuType.click();  
        await browser.keys(["Tab"]);
        await browser.pause(1500);
        await this.ddSkuId.click();
        await browser.keys('S4JM0506')
        await browser.keys('Enter')
        await this.tfQuantity.setValue("1");
        await this.btnSave.click();
        await browser.pause(5000);

       //this is for tablet
       await this.reportsAndJobsTab.waitForDisplayed({ timeout: 10000 });
        await this.reportsAndJobsTab.waitForClickable({ timeout: 6000 });
        await this.reportsAndJobsTab.click();
        await browser.pause(3000);
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
        await browser.pause(1500);
        await this.ddTabletType.click(); 
        await browser.keys("Tablet") 
        await browser.pause(1500);
        await browser.keys(["Tab"]);
        await this.ddTabletId.click();
        await browser.keys('TL7WZZKX')
        await browser.pause(2000);
        await browser.keys("Enter");
        await this.tfQuantity.setValue("1");
        await this.btnSave.click();
        await browser.pause(3000);
        

    }
    async scanItemandApproveRequestForTabletByjusClasses(tablet_itemID) {
        await this.getbtnRequestId("achievetesting@byjus.com").waitForClickable({ timeout: 20000 });
        await this.getbtnRequestId("achievetesting@byjus.com").click();
        await this.cbRequestFulfillmentBatchId.click();
        await this.ddToScanAndApproveRequest.click();
        await this.btnScanAndApproveRequest.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.tfScanAndApproveRequestPopup.setValue(tablet_itemID);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.btnSendOtp.click();

    }

    async verifyOtpForScanandApproverequestForTabletByjusClasses(otp1) {
        await this.btnValidateOtp.click();
        await this.tfEnterOtp.setValue(otp1);
        await this.btnAssign.click();

    }

    async scanItemandApproveRequestForSd_CardByjusClasses(sdCard_itemID) {
        await this.reportsAndJobsTab.waitForDisplayed({ timeout: 10000 });
        await this.reportsAndJobsTab.waitForClickable({ timeout: 6000 });
        await this.reportsAndJobsTab.click();
        await this.inventoryTab.click();
        await this.inventoryRequestTab.click();
        await this.clearSerachFilter.waitForDisplayed({ timeout: 3000 });
        await this.clearSerachFilter.click(); 
        await browser.pause(2000)
        await browser.keys(["A", "s", "s", "Tab"]);
        await browser.keys(["Tab"]);
        await browser.keys('S4JM0506')
        await browser.keys("Enter");
        await this.clickOnRequestId.waitForDisplayed({ timeout: 3000 });
        await this.clickOnRequestId.click()
        await this.cbRequestFulfillmentBatchId.click();
        await this.ddToScanAndApproveRequest.click();
        await this.btnScanAndApproveRequest.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.tfScanAndApproveRequestPopup.setValue(sdCard_itemID);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.btnSendOtp.click();

    }

    async verifyOtpForScanandApproverequestForSd_CardByjusClasses(otp1) {
        await this.btnValidateOtp.click();
        await this.tfEnterOtp.setValue(otp1);
        await this.btnAssign.click();

    }

    async scanItemandAssignRequestForTabletByjusClasses(tablet_itemID) {
        await this.VerifyStatusandStageByjusTablet(tablet_itemID).waitForDisplayed({ timeout: 20000 });
        await this.btnActions.click();
        await this.btnAssign.click();
        await this.rbTablet.click();
        await this.tfScanAndApproveRequestPopup.setValue(tablet_itemID);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.ddAssignTo.click();
        await browser.keys(["S", "e", "t", "u", "p", "Tab"]);
        await this.ddUserEmailId.click();
        await this.ddSelectOptionAkshay.click();
        await this.btnSendOtp.click();
    }

    async verifyOtpForScanandAssignrequestandVerifyStatusForTablet(otp2, tablet_itemID) {
        await this.tfEnterOtp.waitForDisplayed({ timeout: 20000 });
        await this.tfEnterOtp.setValue(otp2);
        await this.btnAssignOnScanandAssign.click();
        await browser.pause(2000)
        await this.tfInventorySearchBar.setValue(tablet_itemID);
        await browser.keys("Enter");
        await this.getVerifyStatus(tablet_itemID).waitForDisplayed({ timeout: 20000 });
    }
    async scanItemandAssignRequestForSd_CardByjusClasses(sdCard_itemID) {
        await browser.refresh();
        // await this.btnInventory.click();
        await this.VerifyStatusandStageByjusTablet(sdCard_itemID).waitForDisplayed({ timeout: 20000 });
        await this.btnActions.click();
        await this.btnAssign.click();
        await this.rbSDCard.click();
        await this.tfScanAndApproveRequestPopup.setValue(sdCard_itemID);
        await browser.keys("Enter");
        await this.btnValidate.click();
        await this.btnProceed.click();
        await this.ddAssignTo.click();
        await browser.keys(["S", "e", "t", "u", "p", "Tab"]);
        await this.ddUserEmailId.click();
        await this.ddSelectOptionAkshay.click();
        await this.btnSendOtp.click();
    }

    async verifyOtpForScanandAssignrequestandVerifyStatusForSd_Card(otp2, sdCard_itemID) {
        await this.tfEnterOtp.waitForDisplayed({ timeout: 20000 });
        await this.tfEnterOtp.setValue(otp2);
        await this.btnAssignOnScanandAssign.click();
        await this.tfInventorySearchBar.setValue(sdCard_itemID);
        await browser.keys("Enter");
        await this.getVerifyStatus(sdCard_itemID).waitForDisplayed({ timeout: 20000 });
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

    async changeStatusToPackedByjusClasses(sdCard_itemID,tablet_itemID) {
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.ordersTabImpersonated.click();
        await this.ssoProductsTab.click();
        await this.btnOpenSSOId("SSO1-" + ssoId).click();
        await this.btnActionsMapInventory.click();
        await this.btnMapInventory.click();
        // await this.cbtoSkuItem.click();

        // const selectSku = $$("tbody tr td label")
        // console.log(selectSku)
        //  for( let i=0;i<selectSku.length;i++){
        //     selectSku[i].click();
        //  }
        $("//tbody/tr[1]/td[1]/label[1]/span[1]/input[1]").click();
        await browser.keys(["Tab"]);
        await browser.keys(sdCard_itemID)
        await browser.pause(2000);
        await browser.keys("Enter");
        $("//tbody/tr[2]/td[1]/label[1]/span[1]/input[1]").click();
        await browser.keys(["Tab"]);
        await browser.keys(tablet_itemID)
        await browser.pause(2000);
        await browser.keys("Enter");

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
        await this.btnQualityCheck.click();
        await this.ddSelectUserEmail.click();
        await browser.keys(["Tab"]);
        await this.btnCreatePackage.click();
    }




}
export default new OMShomepages();