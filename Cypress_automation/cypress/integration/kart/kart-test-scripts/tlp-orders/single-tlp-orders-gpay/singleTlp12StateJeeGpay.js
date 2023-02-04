// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Aakash Byjus TLP CBSE STATE for class 12[JEE] with GPay payment',()=>{
   
    it('Punch a single Aakash Byjus TLP CBSE STATE for class 12[JEE] with GPay payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[13];
        const selectSubCoures = customerinfo.streamSubCourse[0];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashByjusTlpProductDetails(board,initialGrade,selectSubCoures,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
    })
})