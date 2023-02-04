class kartAddressDetailsPage {

    get address1Input() {
        return cy.get('#addressLine1', { timeout: 20000 });
    }

    get address2Input() {
        return cy.get('#addressLine2');
    }

    get zipcodeInput() {
        return cy.get('#zipcode');
    }

    get form() {
        return cy.get('.ant-form');
    }

    get nextButton() {
        return cy.get('.next-btn');
    }

    get addressLineOneErrorMessage(){
        return cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get addresslineTwoErrorMessage(){
        return cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get addresszipcodeErrorMessage(){
        return cy.get(':nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get addresStateErrorMessage(){
        return cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get addressCityErrorMessage(){
        return cy.get(':nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get validateDirectSaleCheckBox(){
        return cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control');
    }
    get validateAddressPage(){
            return cy.get('.ant-col-md-20 > .card > .card-header');
    }
}

export default kartAddressDetailsPage