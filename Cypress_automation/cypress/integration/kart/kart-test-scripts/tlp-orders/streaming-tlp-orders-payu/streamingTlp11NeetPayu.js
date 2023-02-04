// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a streaming order for class 11[NEET] with PayU payment',()=>{
   
    it('Punch a streaming order for class 11[NEET] with PayU payment',()=>{
        const initialGrade = customerinfo.initialGrade[12]
        const finalGrade = customerinfo.finalGrade[11]
        const selectSubCourse = customerinfo.streamSubCourse[1]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.streamingCustomerDetails(initialGrade,finalGrade,initialValidity,selectSubCourse)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})