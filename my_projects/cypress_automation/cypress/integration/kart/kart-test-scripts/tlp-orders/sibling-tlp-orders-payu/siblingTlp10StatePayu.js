// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a sibling TLP STATE order for class 10 with Payu payment',()=>{
   
    it('Punch a sibling TLP STATE order for class 10 with Payu payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[9]
        const finalGrade = customerinfo.finalGrade[9]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.siblingCustomerProductsDetails(board,initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
    })
})