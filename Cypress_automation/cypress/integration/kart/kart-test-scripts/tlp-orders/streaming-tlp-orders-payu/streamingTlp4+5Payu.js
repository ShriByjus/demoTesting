// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a streaming order for class 4 till class 10 with PayU payment',()=>{
   
    it('Punch a streaming order for class 4 till class 10 with PayU payment',()=>{
        const initialGrade = customerinfo.initialGrade[5]
        const finalGrade = customerinfo.finalGrade[5]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.streamingCustomerDetails(initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})