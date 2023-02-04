// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Aakash Byjus TLP STATE order for class 12[NEET] with Payu payment',()=>{
   
    it('Punch a single Aakash Byjus TLP STATE order for class 12[NEET] with Payu payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[15];
        const selectSubCoures = customerinfo.streamSubCourse[1];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashByjusTlpProductDetails(board,initialGrade,selectSubCoures,initialValidity)
        cy.customerPaymentDetailsPayU()
        cy.validateOrderDetails()
    })
})