// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a streaming order for class 9 with GPay payment',()=>{
   
    it('Punch a streaming order for class 9 with GPay payment',()=>{
        const initialGrade = customerinfo.initialGrade[10]
        const finalGrade = customerinfo.finalGrade[9]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.streamingCustomerDetails(initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})