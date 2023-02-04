// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a TLP sibling order with CBSE class 2 and class 5 for second sibling using GPay payment',()=>{
   
    it('Punch a TLP sibling order with CBSE class 2 and class 5 for second sibling using GPay payment',()=>{
        const board = customerinfo.board[0]
        const initialGrade = customerinfo.initialGrade[3]
        const finalGrade = customerinfo.finalGrade[3]
        const secondSiblingInitialGrade = customerinfo.initialGrade[6]
        const secondSiblingFinalGrade = customerinfo.finalGrade[7]
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