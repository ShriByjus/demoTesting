var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP STATE order for class 5 with Cheque payment',()=>{
   
    it('Punch a single TLP STATE order for class 5 with Cheque payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[6]
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