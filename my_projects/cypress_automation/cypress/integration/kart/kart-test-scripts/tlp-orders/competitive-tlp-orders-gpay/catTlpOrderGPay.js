// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a CAT TLP order for Gpay payment',()=>{
   
    it('Punch a CAT TLP order for Gpay payment',()=>{
        const competitiveCourse = customerinfo.competitiveCourse[0];
        const competitiveType = customerinfo.competitiveType[0];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.catCustomerDetails(competitiveCourse,competitiveType,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})