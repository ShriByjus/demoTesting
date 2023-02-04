// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a streaming order for class 11 and class 12[JEE+NEET] with PayU payment',()=>{
   
    it('Punch a streaming order for class 11 and class 12[JEE+NEET] with PayU payment',()=>{
        const initialGrade = customerinfo.initialGrade[12]
        const finalGrade = customerinfo.finalGrade[12]
        const selectSubCourse = customerinfo.streamSubCourse[2]
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[1];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.streamingCustomerDetails(initialGrade,finalGrade,initialValidity,selectSubCourse,payment_method)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})