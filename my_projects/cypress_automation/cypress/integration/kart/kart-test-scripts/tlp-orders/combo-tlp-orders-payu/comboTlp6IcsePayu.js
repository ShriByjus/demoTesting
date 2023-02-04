// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP ICSE order for grade 6 to 7 with Payu payment',()=>{
   
    it('Punch a combo TLP ICSE order for grade 6 to 7 with Payu payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[5]
        const finalGrade = customerinfo.finalGrade[6]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.comboCustomerProductsDetails(board,initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
    })
})