// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP CBSE order for class LKG with Cheque payment',()=>{
   
    it('Punch a single TLP CBSE order for class LKG with Cheque payment',()=>{
        const board = customerinfo.board[0]
        const initialGrade = customerinfo.initialGrade[0]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity)
        cy.customerPaymentDetailsCheque()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})