// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;    
    })
})

describe('Punch a streaming order for class 12[JEE] with GPay payment',()=>{
   
    it('Punch a streaming order for class 12[JEE] with GPay payment',()=>{
        const initialGrade = customerinfo.initialGrade[13]
        const finalGrade = customerinfo.finalGrade[12]
        const selectSubCourse = customerinfo.streamSubCourse[0]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.streamingCustomerDetails(initialGrade,finalGrade,initialValidity,selectSubCourse)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})