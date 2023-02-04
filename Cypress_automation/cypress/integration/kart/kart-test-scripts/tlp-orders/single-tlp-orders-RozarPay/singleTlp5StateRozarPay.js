var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP STATE order for class 5 with RazorPay payment',()=>{
   
    it('Punch a single TLP STATE order for class 5 with RazorPay payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[4]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity)
        cy.customerPaymentDetailsRazorPay()
        cy.validateOrderDetails()
    })
})