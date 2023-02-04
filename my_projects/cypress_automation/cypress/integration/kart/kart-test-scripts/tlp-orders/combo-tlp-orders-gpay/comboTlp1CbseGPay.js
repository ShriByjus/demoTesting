// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP CBSE order for grade 1 to 3 with GPay payment',()=>{
   
    it('Punch a combo TLP CBSE order for grade 1 to 3 with GPay payment',()=>{
        const board = customerinfo.board[0]
        const initialGrade = customerinfo.initialGrade[2]
        const finalGrade = customerinfo.finalGrade[3]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.comboCustomerProductsDetails(board,initialGrade,finalGrade,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})