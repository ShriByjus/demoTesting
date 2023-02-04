// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a TLP sibling order with state board class 1 and class 4 for second sibling using GPay payment',()=>{
   
    it('Punch a TLP sibling order with state board class 1 and class 4 for second sibling using GPay payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[2]
        const finalGrade = customerinfo.finalGrade[2]
        const secondSiblingInitialGrade = customerinfo.initialGrade[5]
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
