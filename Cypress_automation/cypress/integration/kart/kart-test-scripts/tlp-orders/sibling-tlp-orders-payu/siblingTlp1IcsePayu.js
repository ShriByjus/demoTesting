// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a sibling TLP ICSE order for class 1 with Payu payment',()=>{
   
    it('Punch a sibling TLP ICSE order for class 1 with Payu payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[0]
        const finalGrade = customerinfo.finalGrade[0]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.siblingCustomerProductsDetails(board,initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
    })
})