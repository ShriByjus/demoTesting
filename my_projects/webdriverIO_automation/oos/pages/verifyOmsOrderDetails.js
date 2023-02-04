
const fs = require("fs");
const csv = require('csvtojson');
const path = require('path');
import { waitAndDoClick } from "../utils/function"
import { typeAndEnter } from "../utils/function"
const orderDetailsAndPayments = [];
const salesSkuIds = [];
const shipmentSkus = [];
const skuPrice = [];
const addOnItemsSkus = [];
const addressDetails = [];
const customerDetails = [];
const addOnItemSkus = [];


class verifyOmsOrderDetails {
    get copyUrl() {
        return $("//div[@class='page-body'] / div [1] /p [10] / span [2]")
    }
    get clickOnPaySubmitButton(){
        return $("//button[@type='submit']")
    }
    get waitForCardButton() {
        return $("//h2[contains(text(),'Card')]")
    }
    get enterCardNumber(){
        return $("//input[@id='CardNumber1']")
    }
    get cardHolderName(){
        return $("//input[@id='CardHolderName1']");
    }
    get cardDate(){
        return $("//input[@id='CardDate1']")
    }
    get cvvFormate(){
        return $("//input[@id='CVVFormatter1']")
    }
    get submitPayButton(){
        return $("(//button[@class='svn normal full w-100 svelte-1eic4fv'])[1]")
    }
    get enterOtp(){
        return $("//input[@id='cardotp']");
    }
    get razorpayUrl() {
        return $("//div[@class='page-body'] / div [1] /p [12] /span[2] /div/div/div")
    }
    get byjusPayOne() {
        return $("//div[@class='page-body'] / div [1] /p [2] /span[2]")
    }
    get enterReferenceID() {
        return $("input[name='referenceId']")
    }
    get clickOnPay() {
        return $(".caret")
    }
    get selectFilter(){
        return $("//button[contains(text(),'Apply Filter')]")
    }
    get impersonate() {
        return $("//a[contains(text(),'shrinath.mirashi@byjus.com')]")
    }
    get selectImpersonate() {
        return $("//a[contains(text(),'Impersonate')]");
    }
    get enterImpersonateEmailID() {
        return $("//input[@name='impersonateUser']");
    }
    get clicknOnImpersonateButton(){
        return $("//button[contains(text(),'Impersonate')]")
    }
    get validateImpersonateUser(){
        return $("//li[@class='dropdown nav-item']")
    }












    get ordersTab() {
        return $("a[href='/orders']")
    }
    get salesOrdersTab() {
        return $("//p[text()='Sales Orders']")
    }
    get ssoProductsTab() {
        return $("//p[text()='SSO (Products)']")
    }
    get enterSSOId(){
        return $("input[placeholder='Enter the exact value']")
    }
    get clickonActionButton(){
        return $("//div[@title='Actions']//i[@class='fa fa-bars']")
    }
    get selectRaisePriorityOption(){
        return $("div[title='Actions'] button:nth-child(2)")
    }
    get selectPriorityLevel(){
        return $("(//div[@class='Select-placeholder'][normalize-space()='Please start typing'])[1]")
    }
    get selectPrioritySource(){
        return $("(//div[@class='Select-placeholder'][normalize-space()='Please start typing'])[2]")
    }
    get selectPriorityReason(){
        return $("(//div[@class='Select-placeholder'][normalize-space()='Please start typing'])[3]")
    }
    get selectPrioritySaveButton(){
        return $("//button[contains(text(),'Save')]")
    }
    get selectConfirmOption(){
        return $("//button[normalize-space()='Confirm Order']")
    }
    get clickonOK(){
        return $("//button[contains(text(),'Ok')]")
    }
    get tfSearchBarSsoProducts() {
        return $("input[name='searchText']")
    }
    get clickOnSSOTab(){
        return $("ul[class='nav nav-tabs'] li:nth-child(6) a")
    }
    get tabletId(){
        return $("(//tr)[15]/td[3]")
    }
    btnOpenSSOId(Id) {
        return $("//a[@href='/orders/product-sales-sub-orders/" + Id + "']")
    }
    btnOpenSalesOrderId(salesOrder) {
        return $("//a[text()='" + salesOrder + "']")
    }
    get OpenSalesOrderId() {
        return $("//a[@class='btn-link text-decoration-none']")
        
    }
    get status() {
        return $("//span[@class='text-uppercase badge bg-success']");
    }
   
    get ddConfirmOrder() {
        return $("//div[@title='Actions']/button")
    }
    get btnConfirmOrder() {
        return $("//button[text()='Confirm Order']")
    }
    get btnOk() {
        return $("//button[text()='Ok']")
    }
    get btnOrderStatusHistory() {
        return $("//button[@title='Order status history']")

    }
    get verifyStatusIsConfirmed() {
        return $("//div[@class='text-uppercase']/span[text()='confirmed']")
    }

    get customerName() {
        return $("//div[@class='mb-1']/a")
    }
    get payamentAmount() {
        return $("//td[@class='align-middle text-right']/span")
    }
    get payamentSubTotalAmount() {
        return $("//td[@colspan='1']/span")
    }
    //td[@colspan='1']/span
    get btnToggleToSalesSku() {
        return $("button[title='Toggle to sales SKUs']")
       
    }
    get toggleToSalesSku() {
        return $("//i[@class='fa bjs-toggle fa-flip-horizontal']")
       
    }
    get btnToggleToShipmentSku() {
        return $("//button/i[@class='fa bjs-toggle']")
    }
    get subOrdersTab() {
        return $("//a[text()='Sub Orders (1)']")
    }
    getShipmentSkuName(skuId) {
        return $("//td[text()='" + skuId + "']/following-sibling::td")
    }

    getSalesSkuName(salesSkuId) {
        return $("//td[text()='" + salesSkuId + "']/following-sibling::td/following-sibling::td")
    }
    getAddOnItemSkuName(addOnSkuId) {
        return $("(//td[text()='" + addOnSkuId + "']/following-sibling::td)[1]")
    }
    getSkuPrice(salesSkuName) {
        return $("//td[text()='" + salesSkuName + "']/../td/span[text()]")
    }

    get country() {
        return $("(//div[@class='Select-value']/span)[2]")
    }
   
    //copiying shipment sku & names from UI

    get copyTabletSkuIdFromUI() {
        return $("//tr[@class='m-0 p-0'] [1] / td [3]");
    }
    get copyTableSkuNameFromUI() {
        return $("//tr[@class='m-0 p-0'] [1] / td [4]");
    }
    get copyTableStatusFromUI() {
        return $("//tr[@class='m-0 p-0'] [1] / td [7]");
    }

    get copySdCardFromUI() {
        return $("//tr[@class='m-0 p-0'] [3] / td [2]");
    }
    get copySdCardNameFromUI() {
        return $("//tr[@class='m-0 p-0'] [3] / td [3]");
    }
    get copySdCardStatusFromUI() {
        return $("//tr[@class='m-0 p-0'] [3] / td [6]");
    }

    //Copiying sales sku & names from db

    get copySalesSdCardFromUI() {
        return $("//tr[@class='m-0 p-0'] [1] / td [2]");
    }
    get copySalesSdCardNameFromUI() {
        return $("//tr[@class='m-0 p-0'] [1] / td [4]");
    }
    get copySalesTabletSkuIdFromUI() {
        return $("//tr[@class='m-0 p-0'] [2] / td [1]");
    }
    get copySalesTableSkuNameFromUI() {
        return $("//tr[@class='m-0 p-0'] [2] / td [3]");
    }
   
    //Copiying line items price
    
   get copySdCardPriceFromUI(){
       return $("//tr[@class='m-0 p-0'] [1] / td [5]")
   }

   get copyTabletPriceFromUI(){
       return $("//tr[@class='m-0 p-0'] [2] / td [4]")
   }

   //Copiying books sku id
   get copyBooksSkuId(){
       return $("//div[@class='order-details-metadata'] /div [4] //table[@class='table table-sm'] /tbody/tr/td[2]")
   }
   get copyBooksSkuName(){
       return $("//div[@class='order-details-metadata'] /div [4] //table[@class='table table-sm'] /tbody/tr/td[3]")
   }
   get coypBookInvoicePrice(){
       return $("//div[@class='order-details-metadata'] /div [4] //table[@class='table table-sm'] /tbody/tr/td[4]")
   }





    getAddressDetails(value) {
        return $("//div[@class='mb-3']/input[@name='" + value + "']")
    }
    getCustomerDetails(index) {
        return $(`(//div[@class='col-md-12']/p)[${index}]`)
    }
    get selectEyeIcon() {
        return $("(//i[@class='fa fa-eye-slash'])[1]")
    }
    get btnSalesAndCustomerDetails() {
        return $("//a[text()='Sales and Customer Details']")
    }
    get btnEdit() {
        return $("//span[text()='Edit']")
    }
    get btnCrossToCloseAddressPopup() {
        return $("(//i[@class='fa fa-times'])[2]")
    }
    get salesOrder() {
        return $("(//div[@class='mb-1']/a)[2]")
    }
    get btnUpdate() {
        return $("//div[@class='text-right empty-row']/button[text()='Update']")
    }
    get verifyPid() {
        return $("//td[@class='align-middle text-uppercase']//a")
    }
    get btnCloseOrderStatusPopUp() {
        return $("//button[@class='ant-drawer-close']/i")
    }
    get btnRaisePriority() {
        return $("//button[text()='Raise Priority']")
    }
    get ddRaisePriority() {
        return $(`(//div[@class='Select-placeholder'])[1]`)
    }
    getselectPriorityddValue(value) {
        return $("//div[text()='" + value + "']")
    }
    get btnSave() {
        return $("//button[text()='Save']")
    }
    get verifyPriorityIsSet() {
        return $("//span[@type='priority']")
    }
    getverifySalesSubOrderId(salesSubOrderId) {
        return $("//a[text()='" + salesSubOrderId + "']")
    }
    get btnDetailsTab() {
        return $("//a[text()='Details']")
    }
    salesSubOrderId(salesSubOrder) {
        return $("//span[text()='#" + salesSubOrder + "']")
    }
    // get ddSelectUserEmail() {
    //     return $("//div[@class='Select-placeholder']")
    // }
    // get select6IbcKnowledgePark() {
    //     return $("//div[text()='6D IBC Knowledge Park Bengaluru']")
    // }

    // async selectWarehouse() {
    //     await this.ddSelectUserEmail.waitForClickable({ timeout: 60000 });
    //     await this.ddSelectUserEmail.click();
    //     await browser.keys(["6", "d"]);
    //     await this.select6IbcKnowledgePark.click();
    //     await this.btnSave.click();
    // }

    async copyingSalesSkusFromCsv(indexValue, fileName) {
        const filePath = path.join(process.cwd(), fileName);
        const btlpCsv = await csv().fromFile(filePath);
        let skuId = btlpCsv[indexValue].skuId
        let skuNames = btlpCsv[indexValue].skuName
        var skuIds = skuId.split(',');
        for (var i = 0; i < skuIds.length; i++) {
            skuIds[i] = skuIds[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var skuName = skuNames.split(',');
        for (var i = 0; i < skuName.length; i++) {
            skuName[i] = skuName[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        return { skuIds, skuName };
    }

    async copyingShipmentSkusFromCsv(indexValue, fileName) {
        const filePath = path.join(process.cwd(), fileName);
        const btlpCsv = await csv().fromFile(filePath);
        let skuId = btlpCsv[indexValue].skuId
        let skuNames = btlpCsv[indexValue].skuName
        var skuIds = skuId.split(',');
        for (var i = 0; i < skuIds.length; i++) {
            skuIds[i] = skuIds[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var skuName = skuNames.split(',');
        for (var i = 0; i < skuName.length; i++) {
            skuName[i] = skuName[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        return { skuIds, skuName };
    }

    async copyingAddOnItemsSkusFromCsv(indexValue, fileName) {
        const filePath = path.join(process.cwd(), fileName);
        const addOnItemsCsv = await csv().fromFile(filePath);
        let skuId = addOnItemsCsv[indexValue].skuId
        let skuNames = addOnItemsCsv[indexValue].skuName
        var skuIds = skuId.split(',');
        for (var i = 0; i < skuIds.length; i++) {
            skuIds[i] = skuIds[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        var skuName = skuNames.split(',');
        for (var i = 0; i < skuName.length; i++) {
            skuName[i] = skuName[i].replace(/^\s*/, "").replace(/\s*$/, "");
        }
        return { skuIds, skuName };
    }

    async verifySalesOrderDetails(salesOrder, salesSubOrderId) {
        await this.ordersTab.waitForClickable({ timeout: 10000 });
        await this.ordersTab.click();
        await this.salesOrdersTab.click();
        await this.tfSearchBarSsoProducts.setValue(salesOrder);
        await this.btnOpenSalesOrderId(salesOrder).click();
        await this.subOrdersTab.click();
        await this.getverifySalesSubOrderId(salesSubOrderId).waitForDisplayed({ timeout: 20000 })
    }

    async openSoIdVerifyDetails(salesOrder, salesSubOrderId) {
        await this.ordersTab.waitForClickable({ timeout: 10000 });
        await this.ordersTab.click();
        await this.salesOrdersTab.click();
        await this.tfSearchBarSsoProducts.click();
        await typeAndEnter(salesOrder)
        await this.btnOpenSalesOrderId(salesOrder).click();
        await browser.pause(5000);

    //    let copySdCard = await this.copySdCardFromUI.getText();
    //     console.log(copySdCard);

       
    
    //     let copyTableIdCard = await this.copyTabletSkuIdFromUI.getText();
    //     console.log(copyTableIdCard);
    //     let copyTableNameCard = await this.copyTableSkuNameFromUI.getText();
    //     console.log(copyTableNameCard);
    //     let copyTableStatuCard = await this.copyTableStatusFromUI.getText();
    //     console.log(copyTableStatuCard);

    //     let copySdIdCard = await this.copySdCardFromUI.getText();
    //     console.log(copySdIdCard);
    //     let copySdNameCard = await this.copySdCardNameFromUI.getText();
    //     console.log(copySdNameCard);
    //     let copySdStausCard = await this.copySdCardStatusFromUI.getText();
    //     console.log(copySdStausCard);

    //   return {copySdStausCard,copyTableNameCard,copyTableStatuCard,copySdIdCard,copySdNameCard,copySdStausCard};
    }
    async openSoIdAndVerifySSO(ssoId) {
        await this.ordersTab.waitForClickable({ timeout: 10000 });
        await this.ordersTab.click();
        await this.salesOrdersTab.click();
        await this.tfSearchBarSsoProducts.click();
        await typeAndEnter('SO-' + ssoId)
        await this.btnOpenSalesOrderId('SO-' + ssoId).click();
        await browser.pause(5000);
    }
    async statusConfirmation(ssoId){
        await this.clickOnSSOTab.waitForClickable({timeout : 3000})
        await this.clickOnSSOTab.click();
        await browser.pause(1000);
        await this.OpenSalesOrderId.click();
        await browser.pause(3000);
        await this.clickonActionButton.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.clickonActionButton)
        await this.selectConfirmOption.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.selectConfirmOption);
        await waitAndDoClick(this.clickonOK);
        await browser.pause(5000);


    }

    async copySalesAndShipmentSkuIdAndNamesFromUI() {
        let copyTableIdCard = await this.copyTabletSkuIdFromUI.getText();
        let copyTableName = await this.copyTableSkuNameFromUI.getText();
        let copyTableStatus = await this.copyTableStatusFromUI.getText();
        let copySdCardId = await this.copySdCardFromUI.getText();
        let copySdCardName = await this.copySdCardNameFromUI.getText();
        let copySdCardStatus = await this.copySdCardStatusFromUI.getText();

      return {copyTableIdCard,copyTableName,copyTableStatus,copySdCardId,copySdCardName,copySdCardStatus};

    }

    async copySalesSkuIdAndNamesFromUI() {
        let copySdCardFromUI = await this.copySalesSdCardFromUI.getText();
        let copySdCardNameFromUI = await this.copySalesSdCardNameFromUI.getText();
        let copyTableFromUI = await this.copySalesTabletSkuIdFromUI.getText();
        let copyTabletNameFromUI = await this.copySalesTableSkuNameFromUI.getText();

        return {copySdCardFromUI,copySdCardNameFromUI,copyTableFromUI,copyTabletNameFromUI};
    }

    async copySdCradAndTabletLineItemsPrice(){
        let copySdCardPriceFromUI = await this.copySdCardPriceFromUI.getText();
        let sdCardPrice = copySdCardPriceFromUI.split(" ")
        let copyRealSdCardPrice = sdCardPrice[1];
        let getSdCardPrice = copyRealSdCardPrice.replace('.00', '');
        console.log(getSdCardPrice);

        let copyTabletPriceFromUI = await this.copyTabletPriceFromUI.getText();
        let tabletPrice = copyTabletPriceFromUI.split(" ")
        let copyRealTablePrice = tabletPrice[1];
        let getTabletPrice = copyRealTablePrice.replace('.00', '');
        console.log(getTabletPrice);

        let sum = parseInt(getSdCardPrice) + parseInt(getTabletPrice);
        console.log(' sum of values is ' + sum);

        let payamentSubTotalAmount = await this.payamentSubTotalAmount.getText();
        payamentSubTotalAmount = payamentSubTotalAmount.replace('.00', '');
        payamentSubTotalAmount = parseInt(payamentSubTotalAmount.replace('INR ', ''));
    
        return{sum, payamentSubTotalAmount}
    }

    async copyBooksSkuIdFromUI(){
        let bookSkuId = await this.copyBooksSkuId.getText();
        let booksSkuName = await this.copyBooksSkuName.getText();
        let booksInvoicePrice = await this.coypBookInvoicePrice.getText();
        booksInvoicePrice = booksInvoicePrice.replace('.00', '');
        booksInvoicePrice = parseInt(booksInvoicePrice.replace('INR ', ''));
        
        return{bookSkuId,booksSkuName,booksInvoicePrice};
    }

    async changeStatusToConfirmedAndVerifyOrderStatusHistory() {
        await this.subOrdersTab.click();
        await this.getverifySalesSubOrderId(salesSubOrderId).waitForDisplayed({ timeout: 20000 })
        await this.getverifySalesSubOrderId(salesSubOrderId).click();
        await this.ddConfirmOrder.waitForClickable({ timeout: 30000 });
        await this.ddConfirmOrder.click();
        await this.btnConfirmOrder.click();
        await this.btnOk.click();
        await this.btnOrderStatusHistory.waitForClickable({ timeout: 30000 });
        await this.btnOrderStatusHistory.click();
        await this.verifyStatusIsConfirmed.waitForDisplayed({ timeout: 30000 });
        await browser.setWindowSize(1200, 662);
        await this.btnCloseOrderStatusPopUp.waitForClickable({ timeout: 30000 });
        await this.btnCloseOrderStatusPopUp.click();
    }

    async statusConfirmedAndVerifyOrderStatusHistory(salesSubOrderId) {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await waitAndDoClick(this.ordersTab)
        await waitAndDoClick(this.ssoProductsTab)
        await waitAndDoClick(this.enterSSOId);
        await typeAndEnter(salesSubOrderId)
        await this.btnOpenSSOId(salesSubOrderId).click();
        await this.clickonActionButton.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.clickonActionButton)
        await this.selectConfirmOption.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.selectConfirmOption);
        await waitAndDoClick(this.clickonOK);
        await browser.pause(2000);
        await this.btnOrderStatusHistory.waitForClickable({ timeout: 30000 });
        await this.btnOrderStatusHistory.click();
        await this.verifyStatusIsConfirmed.waitForDisplayed({ timeout: 30000 });
        await browser.setWindowSize(1200, 662);
        await this.btnCloseOrderStatusPopUp.waitForClickable({ timeout: 30000 });
        await this.btnCloseOrderStatusPopUp.click();
    }

    async verifyOrderDetailsAndPayments() {
        await this.customerName.waitForClickable({ timeout: 30000 });
        let customerName = await this.customerName.getText();
        let salesOrder = await this.salesOrder.getText();
        salesOrder = salesOrder.replace(' confirmed', '');
        salesOrder = salesOrder.substring(0, 19);
        let payamentAmount = await this.payamentAmount.getText();
        payamentAmount = payamentAmount.replace('INR ', '');
        await this.btnToggleToSalesSku.click();
        let payamentSubTotalAmount = await this.payamentSubTotalAmount.getText();
        payamentSubTotalAmount = payamentSubTotalAmount.replace('.00', '');
        payamentSubTotalAmount = payamentSubTotalAmount.replace('INR ', '');
        orderDetailsAndPayments.push(customerName, salesOrder, payamentAmount, payamentSubTotalAmount);
        return orderDetailsAndPayments;
    }

    async copyShipmentSku(shipmentSkuCount, shipmentSkuIdarr) {
        for (let i = 0; i < shipmentSkuCount; i++) {
            let skuName = await this.getShipmentSkuName(shipmentSkuIdarr[i]).getText();
            shipmentSkus.push(skuName);

        }
        return shipmentSkus;
    }

    async copySalesSkuNames(salesSkuCount, salesSkuIdarry) {
        for (let i = 0; i < salesSkuCount; i++) {
            let skuName = await this.getSalesSkuName(salesSkuIdarry[i]).getText();
            salesSkuIds.push(skuName);

        }
        return salesSkuIds;
    }

    async copyAddOnItemsSkuNames(salesOrder, addOnItemsSkuCount, addOnItemsArry) {
        await this.ordersTab.waitForClickable({ timeout: 10000 });
        await this.ordersTab.click();
        await this.salesOrdersTab.click();
        await this.tfSearchBarSsoProducts.setValue(salesOrder);
        await this.btnOpenSalesOrderId(salesOrder).click();
        for (let i = 0; i < addOnItemsSkuCount; i++) {
            let skuName = await this.getAddOnItemSkuName(addOnItemsArry[i]).getText();
            addOnItemsSkus.push(skuName);
        }
        return addOnItemsSkus;
    }

    async copyPriceOfSku(salesSkuCount, salesSkuIdarry) {
        for (let i = 0; i < salesSkuCount; i++) {
            let price = await this.getSkuPrice(salesSkuIdarry[i]).getText();
            let finalPrice = parseInt(price.slice(4));
            skuPrice.push(finalPrice);

        }
        let payamentSubTotalAmount = await this.payamentSubTotalAmount.getText();
        payamentSubTotalAmount = payamentSubTotalAmount.replace('.00', '');
        payamentSubTotalAmount = payamentSubTotalAmount.replace('INR ', '');
        return { skuPrice, payamentSubTotalAmount };
    }

    async verifySalesAndCustomerDetails() {
        await this.btnSalesAndCustomerDetails.waitForClickable({ timeout: 30000 });
        await this.btnSalesAndCustomerDetails.click();
        await browser.pause(1000);
        await this.selectEyeIcon.click();
        await this.btnEdit.click();
        await browser.pause(1000);
        let country = await this.country.getText();
        addressDetails.push(country);
        const customerAddress = ["zipcode", "state", "city", "addressLine1", "addressLine2"];
        for (let i = 0; i < customerAddress.length; i++) {
            let value = await this.getAddressDetails(customerAddress[i]).getAttribute("value");
            addressDetails.push(value);
        }
        await this.btnCrossToCloseAddressPopup.click();
        for (let i = 1; i < 4; i++) {

            let value = await this.getCustomerDetails(i).getText();
            if (value.startsWith("+91")) {
                value = value.slice(0, 14);
            }
            customerDetails.push(value);
        }
        return { addressDetails, customerDetails };
    }

    async verifyEditingShippingAddress(zipcode, addressLine1, addressLine2) {
        await this.btnSalesAndCustomerDetails.waitForClickable({ timeout: 30000 });
        await this.btnSalesAndCustomerDetails.click();
        await this.btnEdit.click();
        const customerAddressFields = ["zipcode", "addressLine1", "addressLine2"];
        const customerAddressvalues = [zipcode, addressLine1, addressLine2];
        let arryIndex = 0;
        for (let i = 0; i < customerAddressFields.length; i++) {
            await this.getAddressDetails(customerAddressFields[i]).waitForClickable({ timeout: 30000 })
            await this.getAddressDetails(customerAddressFields[i]).clearValue();
            await this.getAddressDetails(customerAddressFields[i]).waitForClickable({ timeout: 30000 })
            await this.getAddressDetails(customerAddressFields[i]).setValue(customerAddressvalues[arryIndex])

            arryIndex = arryIndex + 1;
        }
        await this.btnUpdate.click();
    }

    async verifyRaisePriorityOption(priorityOptions) {
        await this.ddConfirmOrder.waitForClickable({ timeout: 30000 });
        await this.ddConfirmOrder.click();
        await this.btnRaisePriority.click();
        let arryIndex = 0;
        for (let i = 1; i < 4; i++) {
            await this.ddRaisePriority.click();
            await this.getselectPriorityddValue(priorityOptions[arryIndex]).click();
            arryIndex = arryIndex + 1;
        }
        await this.btnSave.click();
        await this.verifyPriorityIsSet.waitForDisplayed({ timeout: 30000 })
    }

    async raisePriorityAndVerify(salesSubOrderId){
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await waitAndDoClick(this.ordersTab)
        await waitAndDoClick(this.ssoProductsTab)
        await waitAndDoClick(this.enterSSOId);
        await typeAndEnter(salesSubOrderId)
        await this.btnOpenSSOId(salesSubOrderId).click();
        await this.clickonActionButton.waitForDisplayed({timeout:5000})
        await this.clickonActionButton.click();
        await this.selectRaisePriorityOption.click();
        await this.selectPriorityLevel.click();
        await typeAndEnter("High")
        await browser.pause(2000);
        // await this.selectPrioritySource.click();
        await browser.keys(["Tab"]);
        await browser.pause(2000);
        browser.keys(["S","a","l","e","s", "Tab"]);
        // await typeAndEnter("Sales")
        await browser.pause(2000);
        // await this.selectPriorityReason.click();
        await browser.keys(["Tab"]);
        await browser.pause(2000);
        await typeAndEnter("Delay in confirmation");
        // await typeAndEnter("Delay in dispatch")
        await browser.pause(1000);
        await waitAndDoClick(this.selectPrioritySaveButton)
        await browser.pause(5000);
    }




    async copyRefernceID(){
        let referenceID = await this.byjusPayOne.getText();
        console.log(' ******' + referenceID)
        let sdCardPrice = referenceID.split(":")
        let sdCardPriceid = sdCardPrice[1];
        console.log(sdCardPriceid);
        await browser.pause(5000);
      return{referenceID};
}
    
}
export default new verifyOmsOrderDetails();
