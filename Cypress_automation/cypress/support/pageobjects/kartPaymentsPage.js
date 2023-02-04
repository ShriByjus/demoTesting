class kartPaymentsPage {

    get paymentProviderDropdown() {
        return cy.get('div.ant-select-selection__rendered');
    }
    get selectEMIPayment() {
        return cy.get('ul.ant-select-dropdown-menu > li[label=Avanse]');
    }
    get selectIiflEMIPayment(){
        return cy.get('ul.ant-select-dropdown-menu > li[label=IIFL]');
    }

    get selectPayU() {
        return cy.get('ul.ant-select-dropdown-menu > li[label=PayU]');
    }

    get paymentCheque()
    {
        return cy.get('ul.ant-select-dropdown-menu > li[label=Cheque]');
    }

    get selectByjusAssure() {
        return cy.get('li').contains('Byjus Assure');
    }

    get selectByjusDirect() {
        return cy.get('li').contains('Byjus Nach(Direct)');
    }

    get selectByjusAdvantage() {
        return cy.get('li').contains('Byjus Advantage');
    }
    
    get paymentGooglePay()
    {
        return cy.get('li').contains('Google Pay');
    }

    get paymentRazorPay()
    {
        return cy.get('li').contains('Razorpay');
    }

    get paymentPinelabs()
    {
        return cy.get('li').contains('Pine Labs');
    }

    get paymentShopse()
    {
        return cy.get('li').contains('Shopse');
    }

    get paymentPaytm()
    {
        return cy.get('ul.ant-select-dropdown-menu > li[label=Paytm]');
    }

    get selectAbfl() {
        return cy.get('li').contains('ABFL');
    }

    get paymentPhonepe()
    {
        return cy.get('ul.ant-select-dropdown-menu > li[label=PhonePe]');
    }

    get chequeNumber()
    {
        return cy.get('#referenceId');
    }

    get selectAvanseProvider() {
        return cy.get('ul.ant-select-dropdown-menu > li[label=Avanse]');
    }

    get selectEMIIciciPayment() {
        return cy.get('ul.ant-select-dropdown-menu > li[label=ICICI]');
    }
    
    get selectEMIFullertonPayment(){
        return cy.get('ul.ant-select-dropdown-menu > li[label=Fullerton]');
    }

    get selectEMIKotakPayment(){
        return cy.get('ul.ant-select-dropdown-menu > li[label=Kotak]');
    }

    get selectEMIBajajPayment(){
        return cy.get('ul.ant-select-dropdown-menu > li[label=Bajaj]');
    }

    get selectBank()
    {
        return cy.get('input[id="bank"]')
    }

    get addDownPayment()
    {
        return cy.get('#isRenderDownPayment');
    }

    get referenceIdEmiInput() {
        return cy.get(':nth-child(1) > #referenceId');
    }

    get referenceIdDownPaymentInput() {
        return cy.get(':nth-child(5) > .card-body > .ant-form > :nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #referenceId');
    }

    get referenceIdWithByjusDownPayment() {
        return cy.get(':nth-child(6) > .card-body > .ant-form > :nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #referenceId');
    }

    get amountEmiInput() {
        return cy.get('#amount');
    }

    get amountDownPaymentInput() {
        return cy.get(':nth-child(5) > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > #amount');
    }

    get amountWithByjusDownPayment() {
        return cy.get(':nth-child(6) > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-number > .ant-input-number-input-wrap > #amount');
    }

    get uploadCheque()
    {
        return cy.get('input[type="file"]');
    }

    get referenceIdInput() {
        return cy.get('#referenceId');
    }

    get amountInput() {
        return cy.get('#amount');
    }

    get createOrderButton() {
        return cy.get('.next-btn');
    }

    get validatefinalPrice(){
        return cy.get('.ant-btn');
    }

    get reviewOrderCheckbox() {
        return cy.get('.ant-checkbox');
    }
    get reviewOrderConfirmButton() {
        return cy.get('.ant-btn-primary');
        
    }
    get selectOMSRadioButton() {
       return cy.get('[value="oms"]');
    }
    get remarksInput() {
        return cy.get('#remark');

    } get proceedButton() {
        return cy.get('.ant-btn');

    }
    get confirmCheckbox(){
        return cy.get('.ant-modal-body > .ant-checkbox-wrapper > :nth-child(2)');
    }
    get paymentProvideErrorMessage(){
        return cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get txdIdErrorMessage(){
        return cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get amountErrorMessage(){
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get paymentDetailErrorMessage(){
        return cy.get('.ant-alert');
    }
    get createOrderButton(){
        return cy.contains('Create Order');
    }
    get discardOrderButton(){
        return  cy.get(':nth-child(3) > .ant-btn');
    }
    get validateReviewOrdePage(){
        return cy.get('#rcDialogTitle2');
    }
    get validateRemarkField(){
        return cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get validateOrderPlaform(){
        return cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
        
    }
    get validateFormValue(){
        return cy.get('.ant-message-custom-content > span');
    }
    get validatePaymentPage(){
        return cy.get('.bg-primary');
    }
    get validateProductLabel(){
        return cy.get('.ant-drawer-title');
    }
    get validateProductDetails(){
        return cy.get('.ant-drawer-body');
    }
    get closedDrower(){
        return cy.get('.ant-drawer-body > div > .ant-btn');
    }
    get validateOrderDecsionPage(){
        return cy.get('.card-header');
    }
    
}

export default kartPaymentsPage