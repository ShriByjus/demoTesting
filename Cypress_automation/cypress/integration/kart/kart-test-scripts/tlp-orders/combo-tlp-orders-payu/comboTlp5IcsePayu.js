// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP ICSE order for grade 5 to 6 with Payu payment',()=>{
   
    it('Punch a combo TLP ICSE order for grade 5 to 6 with Payu payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[4]
        const finalGrade = customerinfo.finalGrade[5]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.comboCustomerProductsDetails(board,initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
    })
})