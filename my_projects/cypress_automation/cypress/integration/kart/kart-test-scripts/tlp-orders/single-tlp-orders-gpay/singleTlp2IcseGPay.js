var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP ICSE order for class 2 with GPay payment',()=>{
   
    it('Punch a single TLP ICSE order for class 2 with GPay payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[3]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
    })
})