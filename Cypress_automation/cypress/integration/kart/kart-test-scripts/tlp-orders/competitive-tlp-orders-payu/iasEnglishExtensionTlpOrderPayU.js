// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a IAS English Extension TLP order for Payu payment',()=>{
   
    it('Punch a IAS English Extension TLP order for Payu payment',()=>{
        const competitiveCourse = customerinfo.competitiveCourse[1];
        const selectedLanguage = customerinfo.selectLanguage[1];
        const competitiveType = customerinfo.competitiveType[1];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.iasCustomerDetails(competitiveCourse,selectedLanguage,competitiveType,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})