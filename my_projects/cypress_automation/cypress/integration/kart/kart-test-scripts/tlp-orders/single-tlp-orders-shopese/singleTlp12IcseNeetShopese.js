// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Aakash Byjus TLP ICSE order for class 12[NEET] with Shopese payment',()=>{
   
    it('Punch a single Aakash Byjus TLP ICSE order for class 12[NEET] with Shopese payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[15];
        const selectSubCoures = customerinfo.streamSubCourse[1];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashByjusTlpProductDetails(board,initialGrade,selectSubCoures,initialValidity)
        cy.customerPaymentDetailsShopse()
        cy.validateOrderDetails()
    })
})