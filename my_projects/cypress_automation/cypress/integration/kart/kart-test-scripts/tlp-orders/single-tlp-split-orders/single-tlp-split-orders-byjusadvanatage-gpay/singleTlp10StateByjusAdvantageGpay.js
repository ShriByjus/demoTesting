// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP STATE order for class 10 with Byjus Advantage as Loan payment and Gpay as Down payment',()=>{

    it('Punch a single TLP STATE order for class 10 with Byjus Advantage as Loan payment and Gpay as Down payment',()=>{
        const board = customerinfo.board[2];
        const initialGrade = customerinfo.initialGrade[11];
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[0];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity,payment_method)
        cy.customerPaymentDetailsByjusAdvantage()
        cy.customerPaymentDetailsWithByjusGooglePay()
        cy.validateOrderDetails()
    })
})