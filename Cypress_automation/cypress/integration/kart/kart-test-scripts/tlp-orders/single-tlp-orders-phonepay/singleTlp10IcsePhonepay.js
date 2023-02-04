var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP ICSE order for class 10 with PhonePay payment',()=>{
   
    it('Punch a single TLP ICSE order for class 10 with PhonePay payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[9]
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[1];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity,payment_method)
        cy.customerPaymentDetailsPhonepe()
        cy.validateOrderDetails()
    })
})