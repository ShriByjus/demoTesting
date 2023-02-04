// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a IAS English TLP order with Gpay payment',()=>{
   
    it('Punch a IAS English TLP order with Gpay payment',()=>{
        const competitiveCourse = customerinfo.competitiveCourse[1];
        const selectedLanguage = customerinfo.selectLanguage[1];
        const competitiveType = customerinfo.competitiveType[0];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.iasCustomerDetails(competitiveCourse,selectedLanguage,competitiveType,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})