// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP STATE order for class LKG with Shopese payment',()=>{
   
    it('Punch a single TLP STATE order for class LKG with Shopese payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[0]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity)
        cy.customerPaymentDetailsShopse()
        cy.validateOrderDetails()
    })
})