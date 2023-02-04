// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP ICSE order for grade 1 to 4 with Byjus Advantage as Loan payment and Gpay as Down payment',()=>{
   
    it('Punch a combo TLP ICSE order for grade 1 to 4 with Byjus Advantage as Loan payment and Gpay as Down payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[2]
        const finalGrade = customerinfo.finalGrade[4]
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[0];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.comboCustomerProductsDetails(board,initialGrade,finalGrade,initialValidity,payment_method)
        cy.customerPaymentDetailsByjusAssure()
        cy.customerPaymentDetailsWithByjusGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})