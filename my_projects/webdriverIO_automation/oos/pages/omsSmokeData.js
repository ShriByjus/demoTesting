import BasePage from './base.page';
import { getRandomNum } from '../utils/function.js';
import { waitAndDoClick } from "../utils/function"
import { typeAndEnter } from "../utils/function"
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

    get impersonateOrderTab(){
        return $("(//i[@class='bjs-orders'])[1]")
    }
    get ssoProductsTab() {
        return $("//p[text()='SSO (Products)']")
    }
    get enterSSOId(){
        return $("input[placeholder='Enter the exact value']")
    }
    get enterSRId(){
        return $("input[placeholder='Enter the exact value']")
    }
    btnOpenSSOId(Id) {
        return $("//a[@href='/orders/product-sales-sub-orders/" + Id + "']")
    }
    btnOpenSRId(Id) {
        return $("a[href='/cancel-and-returns/sales-returns/" + Id + "']")
       
    }
    btnOpenSHOId(Id){
        return $("a[href='/shipments/shipment-orders/" + Id + "']")
    }
    get clickonActionButton(){
        return $("//div[@title='Actions']//i[@class='fa fa-bars']")
    }
    get selectConfirmOption(){
        return $("//button[normalize-space()='Confirm Order']")
    }
    get clickonOK(){
        return $("//button[contains(text(),'Ok')]")
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
    get selectLp() {
        return $("//div[text()='6D IBC Knowledge Park Bengaluru']")
    }
    get ddSelectWarehouseImpersonate() {
        return $("//div[text()='Select the Warehouse']")
    }
    get selectddOptionIBCWarehouse() {
        return $("//div[text()='IBC Knowledge Park Bengaluru']")
    }
    get btnSelectProfile() {
        return $("//a[contains(text(),'ShrinathMotappa Mirashi')]")

    }
    get ddSelectImpersonate() {
        return $("//a[@href='/users/impersonate']")
    }
    get ddSelectUserEmail() {
        return $("//div[@class='Select-placeholder']")
    }
    get select6IbcKnowledgePark() {
        return $("//div[text()='6D IBC Knowledge Park Bengaluru']")
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
    get btnSeUpInventory() {
        return $("//button[text()='Mark Setup Done']")
    }
    get setUpDoneOk(){
        return $("//button[contains(text(),'Ok')]")
    }
    get okToDelivered(){
        return $("//button[contains(text(),'OK')]")
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
        return $("(//input[@type='checkbox'])[1]")
    }
    get selectSetupActionButton(){
        return $("(//div[@title='Actions'])[2]")
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
        return $("//button[text()='Create Package']")
    }
    get btnCreatePackage() {
        return $("(//button[normalize-space()='Create Package'])[1]")
    }
    get createPackageButton(){
        return  $("(//button[contains(text(),'Create Package')])[1]")
    }
    get selectPackageSkuId(){
        return $("//div[contains(text(),'Please start typing')]")
    }
    get waitForPackedStatus(){
        return $("//span[contains(text(),'PACKED')]")
    }
    get selectShipmentPartner(){
        return $("//div[text()='Please start typing']")
    }
    get ddSelectOptionAkshay() {
        return $("//div[text()='supriya.v1@byjus.com']")
    }
    get selectPresentOwner() {
        return $("//div[text()='supriya.v1@byjus.com']")
    }
    get checkBoxOne(){
        return  $("//input[@id='customCheckbox1']")
    }
    get checkBoxTwo(){
        return  $("//input[@id='customCheckbox2']")
    }
    get checkBoxThree(){
        return  $("//input[@id='customCheckbox3']")
    }
    get checkBoxFour(){
        return  $("//input[@id='customCheckbox4']")
    }
    get qualityCheck(){
        return $$("//div[@class='col-md-5']//form")
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
    get waitForCreateManifest(){
        return $("(//button[normalize-space()='Create Manifest'])[1]")
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
    get btnShipmentOrderModule() {
        return $("//p[contains(text(),'Shipment Orders')]")
    }
    get waitForShipmentTruck(){
        return $("button[title='Track Shipment']")
    }
    get clickOnShipmentActionButton(){
        return $("//div[@title='Actions']//i[@class='fa fa-bars']")
    }
    get markAsDelivered(){
        return $("//button[normalize-space()='Mark Delivered']")
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
    get selectDsipatchLp() {
        return $("//div[text()='6D IBC Knowledge Park Bengaluru']")
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
        return $("(//button[normalize-space()='Add'])[1]")
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
    get confirmButton(){
        return $("//span[contains(text(),'NOT CONFIRMED')]")
    }

   // Reveres Flow
   get clicOnSR()
    {
        return $("//i[@class='bjs-sales-return']")
    }
    get selectSRModule()
    {
        return $("//p[contains(text(),'Sales Returns')]")
    }
    get clickOnCreateSRButton()
    {
        return $("//a[@id='createRequest']")
    }
    get enterSO_ID()
    {
        return $("//input[@name='salesOrderId']")
    }
    get clickOnSerach()
    {
        return $("//button[normalize-space()='Search']")
    }
    get clickOnActionButtonSR()
    { 
        return $("//button[@class='btn btn-outline-success']")
    }
    get waitForPrevios(){
        return $("(//button[@type='button'][normalize-space()='Previous'])[1]")
    }
    get orderType()
    { 
        return $("//body//div[@id='root']//div[@class='row']//div[@class='row']//div[@class='row']//div[@class='row']//div[2]//div[1]")
    }
    get PaymentMethod()
    { 
        return $("//body//div[@id='root']//div[@class='col-md-12']//div[@class='col-md-12']//div[3]//div[1]")
    }
    get PaymentSplit()
    { 
        return $("//div[@class='col-md-12']//div//div[4]//div[1]")
    }
    get totalDownPay()
    { 
        return $("//body//div[@id='root']//div[@class='row']//div[@class='row']//div[5]//div[1]")
    }
    get activeCashBck()
    { 
        return $("//div[6]//div[1]")
    }
    get retainAmount()
    {
        return $("//input[@name='retainedAmount']")
    }
    get paymentStatus()
    {
        return $("//input[@name='paymentStatus']")
    }
    get customerRefundAmount()
    {
        return $("//input[@name='customerRefundAmount']")
    }
    get selectProductReturnType()
    {
        return $("(//div[@class='Select-placeholder'][normalize-space()='Enter the value'])[1]")
    }
    get selectServiceReturnType()
    {
        return $("(//div[@class='Select-placeholder'][normalize-space()='Enter the value'])[2]")
    }
    get selectWareHouse() 
    {
        return $("//div[contains(text(),'Select the Warehouse')]")
    }
    get otherChargesRefund(){
        return $("input[name='otherChargesRefund']")
    }
    get byjusWallet(){
        return $("//input[@name='walletTransfer']")
    }
    get selectBankDetails()
    {
        return $("(//span[normalize-space()='Bank Details Awaited'])[1]")
    }
    get selectSalesReturnReasons()
    {
        return $("(//div[@class='Select-placeholder'])[1]")
    }
    get selectSalesSubReason()
    {
        return $("(//span[@class='Select-arrow-zone'])[5]")
    }
    get selectInventorySkipQa(){
        return $("//div[contains(text(),'Please start typing')]")
    }
    get selectServiceOne()
    {
        return $("(//input[@type='checkbox'])[3]")
    }
    get selectServiceTwo()
    {
        return $("(//input[@type='checkbox'])[4]")
    }
    get selectServiceThree()
    {
        return $("(//input[@type='checkbox'])[5]")
    }
    get selectServiceFoure()
    {
        return $("(//input[@type='checkbox'])[6]")
    }
    get clickOnSRNextButton()
    {
        return $("(//button[@type='button'][normalize-space()='Next'])[1]")
    }


    get currentOrderValue()
    {
        return $("//div[@role='alert']//div[@class='row']//div[1]//div[1]")
    }
    get typeOfRefund()
    {
        return $("//div[@role='alert']//div[2]//div[1]")
    }
    get initiationDate()
    {
        return $("//div[@role='alert']//div[3]//div[1]")
    }
    get retainedAmount()
    {
        return $("//div[@role='alert']//div[4]//div[1]")
    }
    get FPRP()
    {
        return $("//div[@role='alert']//div[5]//div[1]")
    }
    get customerRefundProvision()
    {
        return $("//div[@role='alert']//div[6]//div[1]")
    }
    get clickOnSubmitButton()
    {
        return $("button[class='btn-margin mr-1 btn btn-success']")
    }
    get clickOnSubmitButtonNext()
    {
        return $("(//button[normalize-space()='Submit'])[1]")
    }
    get clickOnSaveRequestButton()
    {
        return $("//button[contains(text(),'Save Request')]")
    }
    get clickOnSRAction(){
        return $("(//button[normalize-space()='Actions'])[1]")
    }
    get selectApprove(){
        return $("(//button[normalize-space()='Approve'])[1]")
    }
    get selectSRApprove(){
        return $("//button[contains(text(),'Approve')]")
    }
    get selectSoId()
    {
        return $("//span[@class='Select-arrow-zone']")
    }
    get enterSoId()
    {
        return $("input[placeholder='Enter the exact value']")
    }
    get viewSoId()
    {
        return $("//tbody//tr//td[2]")
    }
    get clickOnActionButton()
    {
        return $("(//button[normalize-space()='Actions'])[1]")
    }
    get clickOnApproveOption()
    {
        return $("(//button[normalize-space()='Approve'])[1]")
    }
    get validateShoStatus()
    {
        return $("//span[@class='badge badge-dark']")
    }
    get clickOnApproveButton()
    {
        return $("(//button[contains(text(),'Approve')])[1]")
    }
    get validateSrStatus()
    {
        return $("//span[@class='status-label badge badge-info']")
    }

    //page objects of Inward batches screen 
    get clickOnInwardBathc()
    {
        return $("//p[contains(text(),'Inward Batches')]")
    }
    get clickOnInwardBathcButton()
    {
        return $("//button[normalize-space()='Create Inward Batch']")
    }
    get selectInwardType(){
        return $("(//div[@class='Select-placeholder'][normalize-space()='Please start typing'])[1]")
    }
    get selectLP()
    {
        return $("(//div[@class='Select-placeholder'][normalize-space()='Please start typing'])[2]")
    }
    get selectWH()
    {
        return $("(//div[@class='Select-placeholder'][normalize-space()='Please start typing'])[3]")
    }
    get clickOnCreateButton()
    {
        return $("//button[normalize-space()='Create']")
    }
    get enterAWBNum()
    {
        return $("//input[@placeholder='Scan Barcode/QRCode and press enter']")
    }
    get clickOnAddButton()
    {
        return $("//button[normalize-space()='Add']")
    }

    get addCustomer()
    {
        return $("//input[@name='customerName']")
    }
    get addPhoneNumber()
    {
        return $("//input[@name='number']")
    }
    get addZipcode()
    {
        return $("//input[@name='zipcode']")
    }
    get addByjusRN()
    {
        return $("//input[@name='byjusReceiptNumber']")
    }
    get clickOnSaveButton()
    {
        return $("//button[normalize-space()='Save']")
    }
    get selectInventoryModule(){
        return $("//i[@class='bjs-inventory1']")
    }
    get clickOnCreateManifest()
    {
        return $("//button[normalize-space()='Create Manifest']")
    }
    get clickOk()
    {
        return $("(//button[normalize-space()='Ok'])[1]")
    }

    //WMS login pageObjects
    get userNameWms()
    {
        return $("//input[@id='identifierId']")
    }
    get passwaordWms()
    {
        return  $("//input[@name='password']")
    }
    get signInWithGoogleWms()
    {
        return  $("//button[normalize-space()='Sign In With Google']")
    }
    get signInWithGoogleTwoWms()
    {
        return  $("(//button[@name='googleSignUpButton'])[2]")
    }
    get clickNextButtonWms()
    {
        return $("//span[normalize-space()='Next']")
    }


   // WMS pageObjects 
   get wmsWarehouse(){
       return $("(//div[@class='Select-placeholder'])[1]")
   }
   get omsWarehouse(){
    return $("//div[text()='Please start typing']")
}
   get clickOnSaveButton(){
       return $("//button[contains(text(),'Save')]")
   }
    get selectInventoryModule()
    {
        return $("(//i[@class='bjs-inventory1'])[1]")
    }
    get selectInwadrPackage()
    {
        return $("(//p[normalize-space()='Inward Packages'])[1]")
    }
    get selectAWBNumberInIB()
    {
        return $("//span[@class='Select-arrow-zone']")
    }
    get enterAWBNumber()
    {
        return $("//input[@placeholder='Enter comma seperated values']")
    }
     get selectInwardPackId()
    {
        return $("body.header-fixed:nth-child(2) div.app div.app div.app-body main.main div.box-content.container-fluid div.card div.card-body div.row div.col-sm-12 div.react-bs-table-container:nth-child(3) div.react-bs-table.react-bs-table-bordered div.react-bs-container-body table.table.table-striped.table-bordered.table-hover.table-sm tbody:nth-child(2) tr:nth-child(1) td:nth-child(2) > a:nth-child(1)")
    }
    get clickOnMappingButton()
    {
        return $("//button[contains(text(),'Map Inventory')]")
    }
    get enterItemIdOne()
    {
        return $("(//input[@name='itemId'])[1]")
    }
    get enterItemIdTwo()
    {
        return $("(//input[@name='itemId'])[2]")
    }
    get enterItemIThree()
    {
        return $("(//input[@name='itemId'])[3]")
    }
    get clickOnAddButton()
    {
        return $("//button[normalize-space()='Add']")
    }
    get clickOnSaveInwardButton()
    {
        return $("(//button[normalize-space()='Save'])[1]")
    }
    get clickOnInwardConfirmButton()
    {
        return $("//button[contains(text(),'Confirm')]")
    }
     clickOnInwardSkuIds(inwardSkuId){
        return $("//button[contains(text(),'" + inwardSkuId + "')]")
    }

    selectSkuId(sdCardSkuID) {
        return $("(//div[text()='" + sdCardSkuID + "'])[2]")
    }

    get clickOnTablet()
    {
        return $("tbody tr:nth-child(2) td:nth-child(2) button:nth-child(1)")
     }
     get clickOnAssociateSR(){
         return $("//button[contains(text(),'Associate sales return')]")
     }
    get clickOnSdCard()
    {
        return $("tbody tr:nth-child(3) td:nth-child(2) button:nth-child(1)")
        
    }
    get qcAccept()
    {
        return $("button[class='btn-margin mr-1 btn btn-success']")
    }
    get clickOnSecond()
    {
        return $("tbody tr:nth-child(3) td:nth-child(2) button:nth-child(1)")
    }
    get clickOnThird()
    {
        return $("tbody tr:nth-child(4) td:nth-child(2) button:nth-child(1)")
    }
    get scrollForAssociateSR()
    {
        return $("//button[normalize-space()='Associate sales return']")
    }
    get clickOnCheckBox()
    {
        return $(".custom-radio")
    }
    get clickOnInwardSaveButton()
    {
        return $("(//button[normalize-space()='Save'])[1]")
    }



    get tabletQcCheckZero()
    {
       return $("label[for='customCheckbox0']")
      }
    get tabletQcCheckOne()
    {
        return $("label[for='customCheckbox1']")
    }
    get tabletQcCheckTwo()
    {
        return $("label[for='customCheckbox2']")
    }
    get tabletQcCheckThree()
    {
        return $("label[for='customCheckbox3']")
    }
    get tabletQcCheckFour()
    {
        return $("label[for='customCheckbox4']")
    }
    get tabletQcCheckFive()
    {
        return $("label[for='customCheckbox5']")
    }
    get tabletQcCheckSix()
    {
        return $("label[for='customCheckbox6']")
    }
    get tabletQcCheckSeven()
    {
        return $("label[for='customCheckbox7']")
    }
    get tabletQcCheckEight()
    {
        return $("label[for='customCheckbox8']")
    }

    get sdCardQcCheckZero()
    {
        return $("label[for='customCheckbox0']")
    }
    get sdCardQcCheckOne()
    {
        return $("label[for='customCheckbox1']")
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

    async selectOmsWarehouse(awbnumber,ssoId){
        await this.clickOnSaveButton.waitForDisplayed({ timeout: 12000 });
        await browser.pause(5000);
        await this.omsWarehouse.click();
        await browser.pause(2000);
        // await this.selectPresentOwner.click();
        // await typeAndEnter("6D IBC Knowledge Park Bengaluru")
        // await browser.pause(2000);
        await browser.keys(["6","d","_","I","B","C", "Tab"]);

    }

    async openSSOIdAndConfirm(ssoId) {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await waitAndDoClick(this.ordersTab)
        await waitAndDoClick(this.ssoProductsTab)
        await waitAndDoClick(this.enterSSOId);
        await typeAndEnter('SSO1-' + ssoId)
        await this.btnOpenSSOId('SSO1-' + ssoId).click();
        await this.clickonActionButton.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.clickonActionButton)
        await this.selectConfirmOption.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.selectConfirmOption);
        await waitAndDoClick(this.clickonOK);
        await browser.pause(5000);
    }
    async openSSOIdAndConfirmForUpgradeOrder(ssoId) {
        await this.ordersTab.waitForDisplayed({ timeout: 10000 })
        await waitAndDoClick(this.ordersTab)
        await waitAndDoClick(this.ssoProductsTab)
        await waitAndDoClick(this.enterSSOId);
        await typeAndEnter('SSO1-' + ssoId)
        await this.btnOpenSSOId('SSO1-' + ssoId).click();
        await browser.pause(5000);
    }

    async addPresentOwner(){
        await this.btnAddPresentOwner.click();
        await browser.pause(2000);
        await this.ddSelectShipmentUserEmail.click();
        await browser.pause(2000);
        // await this.selectPresentOwner.click();
        browser.keys(["S", "u", "p","r","i","y","a",".","v","1", "Tab"]);
        await browser.pause(5000);
        await browser.keys("Enter");
        await this.ddSelectWarehouseImpersonate.click();
        await browser.pause(2000);
        await typeAndEnter("Lexington Towers Bengaluru")
        await this.btnOkOnScanWarningPopup.click();
        await this.btnActionsMapInventory.waitForDisplayed({ timeout: 60000 });
    }

    async impersonateUser() {
        await this.btnSelectProfile.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.ddSelectImpersonate.click();
        await browser.pause(2000);
        await this.ddSelectUserEmail.click();
        await browser.pause(2000);
        // await this.selectPresentOwner.click();
        browser.keys(["S", "u", "p","r","i","y","a",".","v","1", "Tab"]);
        await browser.pause(5000);
        await browser.keys("Enter");
        await this.btnImpersonate.click();
        await this.dashboardTab.waitForDisplayed({ timeout: 120000 });
    }

    async openSSOIdAndMapp(ssoId) {
        await browser.pause(2000);
        await this.impersonateOrderTab.waitForDisplayed({ timeout: 10000 })
        await waitAndDoClick(this.impersonateOrderTab)
        await waitAndDoClick(this.ssoProductsTab)
        await waitAndDoClick(this.enterSSOId);
        await typeAndEnter('SSO1-' + ssoId)
        await this.btnOpenSSOId('SSO1-' + ssoId).click();
    }

    async changeStatusToPacked() {
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.btnActionsMapInventory.click();
        await this.btnMapInventory.click();
        // await browser.pause(5000);
        $("(//input[@type='checkbox'])[3]").click();
        await browser.pause(5000);
        await browser.keys(["Tab"]);
        await browser.pause(5000);
        await browser.keys("TL7MZZKX")
        await browser.pause(5000);
        await browser.keys("Enter");

        $("(//input[@type='checkbox'])[4]").click();
        await browser.pause(5000);
        await browser.keys(["Tab"]);
        await browser.pause(5000);
        await browser.keys("S4JM0506")
        await browser.pause(5000);
        await browser.keys("Enter");
        await this.btnAssignIventory.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(5000);
        await browser.refresh();
        await browser.pause(5000);
        await this.cbtoSkuId.click();
        await this.selectSetupActionButton.click();
        await this.btnSeUpInventory.click();
        await this.setUpDoneOk.click();
        // await browser.reload();
        await browser.pause(5000);
        await this.cbtoSkuId.click();
        await browser.pause(5000);
        await this.selectSetupActionButton.click();
        await this.btnCreatePackage.click();
        await browser.pause(8000);
        await this.selectPackageSkuId.waitForDisplayed({timeout :5000})
        await this.selectPackageSkuId.click();
        await typeAndEnter("Pre-K Tablet Package LKG - UKG + SD card V2")
        // await this.qualityCheck.click();
        await browser.pause(5000);
       
        await this.checkBoxOne.click();
        await this.checkBoxTwo.click();
        await this.checkBoxThree.click();
        await this.checkBoxFour.click();
        await this.createPackageButton.waitForDisplayed({timeout :5000})
        await this.createPackageButton.click();
        await this.waitForPackedStatus.waitForDisplayed({timeout :8000})
        await browser.pause(5000);
        

    }

    async changeStatusToPackedOrderType() {
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(2000);
        await this.btnActionsMapInventory.click();
        await this.btnMapInventory.click();
        // await browser.pause(5000);
       $("label[class='ant-checkbox-wrapper']").click();
        await browser.pause(3000);
        await browser.keys(["Tab"]);
        await browser.pause(3000);
        await browser.keys("TSXMZZKX")
        await browser.pause(3000);
        await browser.keys("Enter");
        await this.btnAssignIventory.click();
        // Takes time to load tried waitforDisplayed and waitforClickable
        await browser.pause(3000);
        await browser.refresh();
        await browser.pause(3000);
        await this.cbtoSkuId.click();
        await this.selectSetupActionButton.click();
        await this.btnSeUpInventory.click();
        await this.setUpDoneOk.click();
        // await browser.reload();
        await browser.pause(3000);
        await this.cbtoSkuId.click();
        await browser.pause(3000);
        await this.selectSetupActionButton.click();
        await this.btnCreatePackage.click();
        await browser.pause(8000);
        await this.selectPackageSkuId.waitForDisplayed({timeout :5000})
        await this.selectPackageSkuId.click();
        await typeAndEnter("Pre-K Tablet Package LKG - UKG + SD card V2")
        // await this.qualityCheck.click();
        await browser.pause(5000);
       
        await this.checkBoxOne.click();
        await this.checkBoxTwo.click();
        await this.checkBoxThree.click();
        await this.checkBoxFour.click();
        await this.createPackageButton.waitForDisplayed({timeout :5000})
        await this.createPackageButton.click();
        await this.waitForPackedStatus.waitForDisplayed({timeout :8000})
        await browser.pause(5000);
        

    }

    async createShipment(){
        await this.packagesOption.waitForClickable({ timeout: 60000 });
        await this.packagesOption.click();
        await this.cbtoSkuId.click();
        await this.btnActionsPackagesTab.click();
        await this.btnCreateShipment.click();
        await this.ddSelectShipmentPartner.click();
        await this.ddSelectWarehouseHandoverFromdd.scrollIntoView();
        await this.ddSelectWarehouseHandoverFromdd.click();
        await this.selectShipmentPartner.click();
        await this.selectLp.click();
        await this.btnCreate.click();
        await this.verifyStatusisShipped.waitForDisplayed({ timeout: 20000 });
        await this.shipmentsOption.waitForClickable({ timeout: 20000 });
        await this.shipmentsOption.click();

    }

    async createDispatchBatchBtlp(awbnumber) {
        await this.shipmentsTab.click();
        await this.btnDispatchBatches.click();
        await this.btnScanAWB.scrollIntoView();
        await this.btnScanAWB.click();
        // await this.ddSelectScanType.click();
        // await typeAndEnter("Barcode Scanner")
        await this.ddSelectDeliveryPartner.click();
        await this.ddSelectWarehouseHandoverOption.scrollIntoView();
        await this.ddSelectWarehouseHandoverOption.click();
        await this.ddSelectWarehouseCreateDispatchBatch.click();

        await this.selectDsipatchLp.scrollIntoView();
        await this.selectDsipatchLp.click();
        await this.ddSelectCustomerType.click();
        await typeAndEnter("Business")
        await this.btnCreate.click();

        await this.btnCreateManifest.waitForDisplayed({timeout :5000})
        await this.tfScanBarcodeOrQrCode.waitForDisplayed({timeout :5000})
        await this.tfScanBarcodeOrQrCode.waitForClickable({timeout :5000})
        await this.tfScanBarcodeOrQrCode.setValue(awbnumber);
        await browser.pause(5000);
        await this.btnAdd.click();
        await browser.pause(2000);
        await this.btnAdd.click();
        await this.btnCreateManifest.waitForDisplayed({timeout :5000})
        await this.btnCreateManifest.click();
        await this.setUpDoneOk.click();
        await this.btnScanAWB.waitForDisplayed({timeout :5000})
     }

     async changeTheSatatusToDelivered(ssoId){
        await browser.pause(2000);
        await waitAndDoClick(this.ordersTab)
        await this.shipmentsTab.click();
        await this.btnShipmentOrderModule.waitForDisplayed({timeout :5000})
        await this.btnShipmentOrderModule.waitForClickable({timeout :5000})
        await this.btnShipmentOrderModule.click();
        await waitAndDoClick(this.enterSSOId);
        await typeAndEnter('SHO1-SSO1-' + ssoId)
        await this.btnOpenSHOId('SHO1-SSO1-' + ssoId).click();
        await this.waitForShipmentTruck.waitForDisplayed({timeout :5000})
        await this.clickOnShipmentActionButton.waitForDisplayed({timeout:5000})
        await waitAndDoClick(this.clickOnShipmentActionButton)
        await this.markAsDelivered.waitForDisplayed({timeout:5000})
        await browser.pause(5000);
        await waitAndDoClick(this.markAsDelivered);
        await browser.pause(5000);
        await this.okToDelivered.click();
        // await waitAndDoClick(this.okToDelivered);
        await this.waitForShipmentTruck.waitForDisplayed({timeout :5000})
        await this.clicOnSR.waitForClickable({ timeout: 5000 });
       await this.clicOnSR.click();
       await browser.pause(5000);

 }

//Reveres Flow

async goAndClickOnSalesReturn(ssoId){
       await this.clicOnSR.waitForClickable({ timeout: 5000 });
       await this.clicOnSR.click();
       await this.selectSRModule.waitForClickable({ timeout: 5000 });
       await this.selectSRModule.click();
       await this.clickOnCreateSRButton.waitForClickable({ timeout: 5000 });
       await this.clickOnCreateSRButton.click();
       await this.enterSO_ID.waitForClickable({ timeout: 5000 });
       await this.enterSO_ID.click();
       await this.enterSO_ID.setValue("SO-" + ssoId)
       await this.clickOnSerach.waitForClickable({ timeout: 5000 });
       await this.clickOnSerach.click();
       await browser.pause(5000);
       await this.clickOnActionButtonSR.click();
       await this.waitForPrevios.waitForDisplayed({timeout :5000})
}
    async salesReturnAmountSection(){
        await this.retainAmount.waitForClickable({timeout :5000})
        await this.retainAmount.setValue("0")
        await browser.pause(8000);
        await this.selectProductReturnType.waitForClickable({timeout :5000})
        await this.selectProductReturnType.click();
        await typeAndEnter("Full Return")
        // browser.keys(["F", "u", "l","l", "Tab"]);

        // await this.selectServiceReturnType.waitForClickable({timeout :5000})
        // await this.selectServiceReturnType.click();

        // await typeAndEnter("Full Deactivation")
        // // browser.keys(["F", "u", "l","l", "Tab"]);
        await browser.pause(5000);
        await browser.keys(["Tab"]);
        await browser.pause(5000);
        browser.keys(["F", "u", "l","l", "Tab"]);
        // await typeAndEnter("Full Deactivation")
        await browser.keys("Enter");

        browser.pause(5000)
        await this.selectWareHouse.waitForClickable({timeout :5000})
        await this.selectWareHouse.click();
        await browser.pause(5000);
        await typeAndEnter("6D IBC Knowledge Park Bengaluru")
        // browser.keys(["M", "T", "L", "Tab"]);

        await browser.pause(2000);
        $("(//input[@type='checkbox'])[2]").click();
        await browser.pause(2000);
        $("(//input[@type='checkbox'])[3]").click();

        await this.otherChargesRefund.setValue("1000")
        browser.pause(2000)
        await this.byjusWallet.setValue("0")
        await this.selectBankDetails.waitForClickable({timeout :5000})
        await this.selectBankDetails.click();
        browser.pause(5000)
    
    }
    async salesReturnAmountSectionForComplementaryOrder(){
        await this.retainAmount.waitForClickable({timeout :5000})
        await this.retainAmount.setValue("0")
        await browser.pause(5000);
        await waitAndDoClick(this.selectProductReturnType);
        // await this.selectProductReturnType.click();
        await typeAndEnter("Nil")
        // browser.keys(["F", "u", "l","l", "Tab"]);
        await browser.pause(5000);
        // await this.selectServiceReturnType.waitForClickable({timeout :5000})
        // await this.selectServiceReturnType.click();
        await browser.keys(["Tab"]);
        await browser.pause(5000);
        browser.keys(["F", "u", "l","l", "Tab"]);
        // await typeAndEnter("Full Deactivation")
        await browser.keys("Enter");
        // browser.keys(["F", "u", "l","l", "Tab"]);

        browser.pause(5000);
        await browser.pause(2000);
        $("(//input[@class='ant-checkbox-input'])[1]").click();
        await browser.pause(2000);
    
        await this.otherChargesRefund.setValue("1000")
        browser.pause(2000)
        await this.byjusWallet.setValue("0")
        await this.selectBankDetails.waitForClickable({timeout :5000})
        await this.selectBankDetails.click();
        browser.pause(5000)
    
    }
    async salesReturnAmountSectionForUpgradeOrder(){
        await this.retainAmount.waitForClickable({timeout :5000})
        await this.retainAmount.setValue("0")
        await browser.pause(8000);
        await this.selectProductReturnType.waitForClickable({timeout :5000})
        await this.selectProductReturnType.click();
        await typeAndEnter("Full Return")
        // browser.keys(["F", "u", "l","l", "Tab"]);

        // await this.selectServiceReturnType.waitForClickable({timeout :5000})
        // await this.selectServiceReturnType.click();

        // await typeAndEnter("Full Deactivation")
        // // browser.keys(["F", "u", "l","l", "Tab"]);
        await browser.pause(4000);
        await browser.keys(["Tab"]);
        await browser.pause(4000);
        browser.keys(["F", "u", "l","l", "Tab"]);
        // await typeAndEnter("Full Deactivation")
        await browser.keys("Enter");

        browser.pause(4000)
        await this.selectWareHouse.waitForClickable({timeout :5000})
        await this.selectWareHouse.click();
        await browser.pause(4000);
        await typeAndEnter("6D IBC Knowledge Park Bengaluru")
        // browser.keys(["M", "T", "L", "Tab"]);

        await browser.pause(1000);
        let myCheckboxes =  $("(//input[@type='checkbox'])")
        console.log(myCheckboxes);
        $("(//input[@type='checkbox'])[2]").click();
        await browser.pause(1000);
        $("(//input[@type='checkbox'])[3]").click();
        await browser.pause(1000);
        $("(//input[@type='checkbox'])[4]").click();

        await this.otherChargesRefund.setValue("1000")
        browser.pause(2000)
        await this.byjusWallet.setValue("0")
        await this.selectBankDetails.waitForClickable({timeout :5000})
        await this.selectBankDetails.click();
        browser.pause(5000)
    
    }
    async statusConfirmedForComplementaryOrder(salesSubOrderId) {
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
    }
    async selectSalesReturnReason(){
        await this.selectSalesReturnReasons.waitForClickable({timeout :5000})
        await this.selectSalesReturnReasons.click();
        await typeAndEnter("BYJU’S Initiated")
        // browser.keys(["O","r","d","e","r", "Tab"]);
        await browser.pause(4000);
        await browser.keys(["Tab"]);
        await browser.pause(2000);
        browser.keys(["L", "o", "a","n", "Tab"]);
        // await typeAndEnter("Full Deactivation")
        await browser.keys("Enter");
        // await this.selectSalesSubReason.waitForDisplayed({timeout :5000})
        // await this.selectSalesSubReason.click();
        // await browser.pause(5000);
        // await typeAndEnter("Loan Verification Failed")
        // browser.keys(["L","o","a","n", "Tab"]);
    }
    async skipInventoryQaNo(){
        await this.selectInventorySkipQa.waitForDisplayed({timeout :5000})
        await this.selectInventorySkipQa.waitForClickable({timeout :5000})
        await this.selectInventorySkipQa.click();
        await browser.pause(5000);
        await typeAndEnter("No");
    }
    async selectProductsAndServices(ssoId){
        await this.clickOnSRNextButton.click();
        await this.clickOnSubmitButtonNext.waitForClickable({timeout :5000})
        await this.clickOnSubmitButtonNext.click();
        await this.clickOnSaveRequestButton.waitForDisplayed({timeout :5000})
        // await this.clickOnSaveRequestButton.click()
        await waitAndDoClick(this.clickOnSaveRequestButton);
        // await browser.debug();
        await waitAndDoClick(this.enterSRId);
        await typeAndEnter('SR1-' + ssoId) 
        await this.btnOpenSRId('SR1-' +ssoId).click();

        await waitAndDoClick(this.clickOnSRAction)
        await waitAndDoClick(this.selectApprove);
        await waitAndDoClick(this.selectSRApprove);
        await browser.pause(2000);
    }    

    async createInwardBatches(ssoId){
            // $("//i[@class='bjs-shipment-orders']").click();
            // browser.pause(5000)   
            $("//i[@class='bjs-sales-return']").click();
            await this.clickOnInwardBathc.waitForDisplayed({timeout :6000})
            await this.clickOnInwardBathc.click();
            await this.clickOnInwardBathcButton.waitForDisplayed({timeout :5000})
            await this.clickOnInwardBathcButton.click();
            await browser.pause(5000);
            await this.selectInwardType.click()
            await typeAndEnter('Customer to Warehouse') 
            await browser.pause(5000);
            // await this.selectLP.click()
            // browser.keys(["D","H","L", "Tab"]);

            await browser.keys(["Tab"]);
            await browser.pause(5000);
            browser.keys(["D","H","L", "Tab"]);

            // await this.selectWH.click();
            // await browser.pause(2000);
            // browser.keys(["I","n","d", "Tab"]);

            await browser.pause(5000);
            await browser.keys(["Tab"]);
            await browser.pause(5000);
            browser.keys(["I","n","d", "Tab"]);

            await this.clickOnCreateButton.waitForDisplayed({timeout :5000})
            await this.clickOnCreateButton.click();
            await this.enterAWBNum.waitForDisplayed({timeout :5000})
            await this.enterAWBNum.click();
            await this.enterAWBNum.setValue(ssoId)
            await this.clickOnAddButton.waitForDisplayed({timeout :5000})
            await this.clickOnAddButton.click();
    
            await this.addCustomer.waitForDisplayed({timeout :5000})
            await this.addCustomer.click();
            await this.addCustomer.setValue("Test")
    
            await this.addPhoneNumber.waitForDisplayed({timeout :5000})
            await this.addPhoneNumber.click();
            await this.addPhoneNumber.setValue("9898989898")
    
            await this.addZipcode.waitForDisplayed({timeout :5000})
            await this.addZipcode.click();
            await this.addZipcode.setValue("909090")
    
            await this.addByjusRN.waitForDisplayed({timeout :5000})
            await this.addByjusRN.click();
            await this.addByjusRN.setValue("BR-" + ssoId);
    
            await browser.keys(["Tab"]);
            await browser.pause(5000);
            await browser.keys("Enter");

            await browser.pause(5000);
            await this.clickOnCreateManifest.waitForDisplayed({timeout :5000})
            await this.clickOnCreateManifest.click();
            await browser.pause(5000)
            await waitAndDoClick(this.clickOk)
            await this.clickOk.click({ x: 30 });
            await browser.pause(5000)
    }

    async logInToWms(username, password){
        await waitAndDoClick(this.signInWithGoogleWms)
        //   await this.signInWithGoogleWms.waitForClickable({ timeout: 5000 });
        //   await this.signInWithGoogleWms.click();
        await waitAndDoClick(this.signInWithGoogleTwoWms)
        //   await this.signInWithGoogleTwoWms.waitForClickable({ timeout: 5000 });
        //   await this.signInWithGoogleTwoWms.click();
          await this.userNameWms.setValue(username)
          await this.clickNextButtonWms.click();
          await this.passwaordWms.waitForDisplayed({ timeout: 5000 });
          await this.passwaordWms.setValue(password)
          await this.clickNextButtonWms.waitForClickable({ timeout: 5000 });
          await this.clickNextButtonWms.click();
        //   await this.dashboardTab.waitForDisplayed({ timeout: 120000 });
    }

    async selectWmsWarehouse(awbnumber,ssoId){
        await this.ddSelectUserEmail.waitForClickable({ timeout: 80000 });
        await this.ddSelectUserEmail.click(); 
        await browser.pause(5000);
        await typeAndEnter("6d_ibc_knowledge_park_bengaluru")
        await browser.pause(5000);
        await this.btnSave.click();
        await this.dashboardTab.waitForDisplayed({ timeout: 120000 });

        await waitAndDoClick(this.selectInventoryModule)
        await waitAndDoClick(this.selectInwadrPackage)
        await this.selectAWBNumberInIB.waitForClickable({timeout :5000});
        await this.selectAWBNumberInIB.click();
        await typeAndEnter("AWB Number")
        await this.enterAWBNumber.waitForClickable({timeout :5000});
        await this.enterAWBNumber.click();
        await this.enterAWBNumber.setValue(ssoId);
        await browser.keys('Enter')
        await this.selectInwardPackId.click();

    }

    async QcCheckWms(tabletItemID,sdCardItemID){
         await waitAndDoClick(this.clickOnMappingButton)
         await waitAndDoClick(this.enterItemIdOne)
         await this.enterItemIdOne.setValue(tabletItemID)
         
        await browser.keys(["Tab"]);
        await browser.pause(5000);
         await waitAndDoClick(this.clickOnAddButton)
         await waitAndDoClick(this.enterItemIdTwo)
         await this.enterItemIdTwo.setValue(sdCardItemID)
         await browser.keys(["Tab"]);
         await browser.pause(5000);
         await waitAndDoClick(this.clickOnSaveInwardButton)
         await browser.pause(5000);
         await this.clickOnInwardConfirmButton.click({ x: 30 })
       
         //QA Checking for Tablet
         await browser.pause(5000);
        await this.clickOnTablet.scrollIntoView();
        await this.clickOnTablet.waitForDisplayed({timeout :5000})
        await this.clickOnTablet.click();
        await this.tabletQcCheckZero.click();
        await this.tabletQcCheckOne.click();
        await this.tabletQcCheckTwo.click();
        await this.tabletQcCheckThree.click();
        await this.tabletQcCheckFour.click();
        await this.tabletQcCheckFive.click();
        await this.tabletQcCheckSix.click();
        await this.tabletQcCheckSeven.click();
        await this.tabletQcCheckEight.click();
        await this.qcAccept.waitForClickable({timeout :5000});
        await this.qcAccept.click();
        await browser.pause(5000);

        //QA Checking for SdCrad
         await this.clickOnSdCard.waitForDisplayed({timeout :5000})
         await this.clickOnSdCard.click();
         await this.sdCardQcCheckZero.click();
         await this.sdCardQcCheckOne.click();
         await this.qcAccept.waitForClickable({timeout :5000});
         await this.qcAccept.click();
         await browser.pause(5000)
         await $("//i[@class='fa fa-calendar']").scrollIntoView();
         await this.clickOnAssociateSR.waitForDisplayed({timeout :5000})
         await this.clickOnAssociateSR.click();
         await browser.pause(5000)
         await this.clickOnCheckBox.click();
         await browser.pause(5000)
         await waitAndDoClick(this.clickOnInwardSaveButton)
         await this.clickOnInwardSaveButton.click({ x: 30 });
         await browser.pause(5000)
        
    }

}
export default new OMShomepages();
