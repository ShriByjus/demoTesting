// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a TLP sibling order with CBSE class 3 and class 6 for second sibling using GPay payment',()=>{
   
    it('Punch a TLP sibling order with CBSE class 3 and class 6 for second sibling using GPay payment',()=>{
        const board = customerinfo.board[0]
        const initialGrade = customerinfo.initialGrade[4]
        const finalGrade = customerinfo.finalGrade[4]
        const secondSiblingInitialGrade = customerinfo.initialGrade[7]
        const secondSiblingFinalGrade = customerinfo.finalGrade[8]
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[1];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.siblingTlpProductDetails(board,initialGrade,finalGrade,initialValidity)
        cy.secondSiblingTlpProductDetails(board,secondSiblingInitialGrade,secondSiblingFinalGrade,initialValidity,payment_method)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})