import BasePage from './base.page';
import { getRandomNum } from '../utils/function.js';
let randomVar = getRandomNum(6);
// let orderID = require("../testData/sales-orders-seed/orderId.json");
// const ssoId = orderID.substring(3);


class SDcardOrderPage extends BasePage {

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
        return $("(//td)[10]")
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
        return $("input[name='file']")
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
        return $("//i[@class='bjs-inventory']")
    }
    get btnInventoryBatches() {
        return $("//p[text()='Inventory Batches']")
    }
    get btnCreateBatch() {
        return $("//button[text()=' Create Batch']")
    }
    get selectSdCard() {
        return $("//div[text()='Sd Card']")
    }
    //div[text()='Sd Card']
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
    get ddSelectIBCWarehouse() {
        return $("//div[text()='IBC Knowledge Park Bengaluru']")
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
    get tfQuantity() {
        return $("input[name='quantity']")
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
    get btnActions() {
        return $("//button[text()='Actions']")
    }
    get btnAssignOnScanandAssign() {
        return $("(//button[text()='Assign'])[2]")
    }
    get rbSDCard() {
        return $("(//input[@type='radio'])[1]")
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
    get btnAddPresentOwner() {
        return $("//span[text()='Add']")
    }
    get ddSelectShipmentUserEmail() {
        return $("//div[text()='Start typing Email Id...']")
    }
    get ddSelectOptionBhoomi() {
        return $("//div[text()='bhoomika.kn@byjus.com']")
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
    get tfSearchBarSsoProducts() {
        return $("input[name='searchText']")
    }
    get selectIbcKnowledgePark() {
        return $("//div[text()='ibc_knowledge_park_bengaluru']")
    }
    selectBatchId(batchId) {
        return $("//a[text()='" + batchId + "']")
    }
    get ddselectAction() {
        return $("//button[text()='Action']")
    }
    get ddselectAproveRequest() {
        return $("//button[text()='Approve Request']")
    }


    verifyStatusIsSuccess(batchId) {
        return $("//span[text()='" + batchId + "']/../span/span[text()='success']")
    }

    verifyStatusIsFailed(batchId) {
        return $("//span[text()='" + batchId + "']/../span/span[text()='failed']")
    }
    get select6IbcKnowledgePark() {
        return $("//div[text()='6D IBC Knowledge Park Bengaluru']")
    }
    //a[text()='IVB-2208260942500036']

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
//         Commented as the team isn't sure about is feature
//         await this.ddSelectUserEmail.waitForClickable({ timeout: 60000 });
//         await this.ddSelectUserEmail.click();
//         await browser.keys(["6","d"]);
//         await this.select6IbcKnowledgePark.click();
//         await this.btnSave.click();
        await this.dashboardTab.waitForDisplayed({ timeout: 120000 });
    }

    async changeSKUandItemIDOnCSVFileandUpload(skuId) {

        const fs = require("fs");
        const csv = require('csvtojson');
        const { Parser } = require('json2csv');
        const path = require('path');
        const filePath = path.join(process.cwd(), process.env.SD_CARD_CSV);
        const sdCardCsv = await csv().fromFile(filePath);
        sdCardCsv[0].skuId = skuId,
            sdCardCsv[0].itemId = skuId + randomVar
        let itemId = sdCardCsv[0].itemId
        let sdCardInCsv = new Parser(sdCardCsv, { header: false });
        fs.appendFileSync(filePath, "\r\n", sdCardInCsv);
        await this.btnChooseFile.waitForClickable({ timeout: 60000 });
        await this.btnChooseFile.setValue(filePath);
        await this.btnCreate.click();
        return itemId;
    }

    async openSSOIdandCopySkuId(salessuborder) {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await this.ordersTab.click();
        await this.ssoProductsTab.click();
        await this.tfSearchBarSsoProducts.setValue(salessuborder);
        await browser.keys("Enter");
        await this.btnOpenSSOId(salessuborder).click();
        let skuID = await this.skuID.getText();
        return skuID;
    }



    async loginToWMSandCreateBatch(skuId, username, password) {
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
        await this.ddSelectWarehouseCreateDispatchBatch.waitForDisplayed({ timeout: 30000 });
        await this.ddSelectWarehouseCreateDispatchBatch.click();
        await browser.keys(['i', 'b', 'c']);
        await this.selectIbcKnowledgePark.click();
        await this.btnSave.click();
        await this.reportsAndJobsTab.waitForDisplayed({ timeout: 30000 });
        await this.inventoryTab.click();
        await this.btnInventoryBatches.click();
        await browser.pause(2000);
        await this.btnCreateBatch.click();
        await this.ddAssignTo.click();
        await this.selectSdCard.click();
        let itemId = await this.changeSKUandItemIDOnCSVFileandUpload(skuId);
        // await this.reportsAndJobsTab.click();
        // await this.uploadTemplatesTab.click();
        // await this.actionButton.click();
        // await this.btnupload.click();

        // let itemID = await this.changeSKUandItemIDOnCSVFileandUpload(skuId);
        // await browser.refresh();
        // await this.reportsAndJobsTab.click();
        // await this.jobInstanceTab.click();
        // await this.uploadHistoryTab.click();
        // try { await this.verifyJobStatus(jobName).waitForDisplayed({ timeout: 10000 }) }
        // catch { }


        // while (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //     //  Added hard wait after discussing that it should be followed
        //     if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == true) {
        //         break;
        //     }
        //     else if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //         await browser.pause(20000);
        //         await browser.refresh();
        //         await this.uploadHistoryTab.click();
        //     }


        // }
        // if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //     // Added hard wait after discussing that it should be followed
        //     await browser.pause(30000);
        //     await browser.refresh();
        //     await this.uploadHistoryTab.click();
        //     if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //         // Added hard wait after discussing that it should be followed
        //         await browser.pause(30000);
        //         await browser.refresh();
        //         await this.uploadHistoryTab.click();
        //         if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //             // Added hard wait after discussing that it should be followed
        //             await browser.pause(20000);
        //             await browser.refresh();
        //             await this.uploadHistoryTab.click();
        //             if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //                 // Added hard wait after discussing that it should be followed
        //                 await browser.pause(20000);
        //                 await browser.refresh();
        //                 await this.uploadHistoryTab.click();
        //                 if (await this.verifyJobStatus(jobName).isDisplayed({ timeout: 10000 }) == false) {
        //                     // Added hard wait after discussing that it should be followed
        //                     await browser.pause(20000);
        //                     await browser.refresh();
        //                     await this.uploadHistoryTab.click();
        //                     await this.verifyJobStatus(jobName).waitForDisplayed({ timeout: 10000 });
        //                 }
        //             }
        //         }
        //     }

        // }


        return itemId;
    }

    async verifyStatusIsInStock(skuId) {
        await this.selectBatchId(batchId).click();
        await this.ddselectAction.click();
        await this.ddselectAproveRequest.click();
        await this.btnOkOnScanWarningPopup.click();
        while (await this.verifyStatusIsSuccess(batchId).isDisplayed({ timeout: 10000 }) == false) {
            if (await this.verifyStatusIsSuccess(batchId).isDisplayed({ timeout: 10000 }) == true) {
                break;
            }
            else if (await this.verifyStatusIsSuccess(batchId).isDisplayed({ timeout: 10000 }) == false) {
                //  Added hard wait after discussing that it should be followed
                await browser.pause(20000);
                await browser.refresh();
            }
            else if (await this.verifyStatusIsFailed(batchId).isDisplayed({ timeout: 10000 }) == true) {
                break;
            }
        }
        await browser.pause(20000);
        await this.inventoryTab.click();
        await this.btnInventory.click();
        await this.ddToSelectSkuID.click();
        await browser.keys(["S", "k", "u", "Tab"]);
        await this.tfInventorySearchBar.setValue(skuId);
        await browser.keys("Enter");
        await this.verifyItemStatus(skuId).waitForDisplayed({ timeout: 60000 });

    }

    async createInventoryRequest(skuID) {
        await this.inventoryTab.click();
        await this.inventoryRequestTab.click();
        await this.ddAction.click();
        await this.ddValueCreateInventoryRequest.click();
        await this.ddSelectWarehouse.waitForClickable({ timeout: 20000 });
        await this.ddSelectWarehouse.click();
        await browser.keys(["I", "B", "C"]);
        await this.ddSelectIBCWarehouse.click();
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
        await browser.keys(["b", "h", "o", "o", "m", "i"]);
        await this.ddSelectOptionBhoomi.click();
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
        await browser.keys(["b", "h", "o", "o", "m", "i"]);
        await this.ddSelectOptionBhoomi.click();
        await this.ddSelectWarehouseImpersonate.click();
        await browser.keys(["I", "B", "C"]);
        await this.selectddOptionIBCWarehouse.click();
        await this.btnOkOnScanWarningPopup.click();
        await this.btnSelectProfile.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(5000);
        await this.ddSelectImpersonate.click();
        await this.ddSelectUserEmail.click();
        await browser.keys(["b", "h", "o", "o", "m", "i"]);
        await this.ddSelectOptionBhoomi.click();
        await this.btnImpersonate.click();
    }

    async changeStatusToPacked(salessuborder, itemId) {
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.ordersTabImpersonated.click();
        await this.ssoProductsTab.click();
        await this.btnOpenSSOId(salessuborder).click();
        await this.btnActionsMapInventory.click();
        await this.btnMapInventory.click();
        await this.cbtoSkuItem.click();
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
        // await this.btnQualityCheck.click();
        // await this.ddSelectUserEmail.click();
        // await browser.keys(["Tab"]);
        await this.btnCreatePackage.click();
        await this.ddSelectShipmentPartner.click();
        await browser.keys(["Tab"]);
        await this.btnCreatePackage.click();
    }

    async changeStatusToShippedandCreateDispatchBatch(salessuborder) {
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
        await this.getverifyShipementIdCreated(salessuborder).waitForDisplayed({ timeout: 20000 });
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

    async changeStatusToDelivered(salessuborder, awbnumber) {
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
        await this.getopenShipmentId(salessuborder).click();
        await this.ddActionToMarkDelivered.waitForClickable({ timeout: 20000 });
        await this.ddActionToMarkDelivered.click();
        await this.btnMarkDelivered.click();
        await this.btnOkDeliveryShipmentPopUp.click();
        await this.verifyDeliveryStatusIsDelivered(salessuborder).waitForDisplayed({ timeout: 20000 });
    }


}
export default new SDcardOrderPage();
