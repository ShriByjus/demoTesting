// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('error messages validations',()=>{
   
    it('error message validations',()=>{
        const board = customerinfo.board[0]
        const initialGrade = customerinfo.initialGrade[2]
        const finalGrade = customerinfo.finalGrade[3]
        const initialValidity = customerinfo.initialValidity;
        const userClass = customerinfo.userClass;
        const payment_method = customerinfo.payment_method[1];
        const paymentProvider = customerinfo.paymentProvider[0];
        cy.visitKartApp()
        cy.assertCustomerBasicDetails()
        cy.asserAddressDetails()
        cy.assertProductDetails(board,initialGrade,finalGrade,initialValidity)
        cy.assertPaymentDetailsGPay()
        cy.validateOrderDetails()
        cy.saveOrderDetails(board,initialGrade,finalGrade,initialValidity,payment_method,paymentProvider);
        cy.validatejsonFile();
    })
})