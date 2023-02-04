// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP CBSE order for grade LKG to UKG with GPay payment',()=>{
   
    it('Punch a combo TLP CBSE order for grade LKG to UKG with GPay payment',()=>{
        const board = customerinfo.board[0]
        const initialGrade = customerinfo.initialGrade[0]
        const finalGrade = customerinfo.finalGrade[0]
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