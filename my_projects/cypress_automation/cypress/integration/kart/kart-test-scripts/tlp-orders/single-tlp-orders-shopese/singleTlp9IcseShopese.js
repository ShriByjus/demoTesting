var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single TLP ICSE order for class 9 with Shopese payment',()=>{
   
    it('Punch a single TLP ICSE order for class 9 with Shopese payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[8]
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.customerProductDetails(board,initialGrade,initialValidity)
        cy.customerPaymentDetailsShopse()
        cy.validateOrderDetails()
    })
})