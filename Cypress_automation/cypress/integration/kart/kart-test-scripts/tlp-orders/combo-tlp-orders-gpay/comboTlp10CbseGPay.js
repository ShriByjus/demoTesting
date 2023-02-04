// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP CBSE order for grade 10 to 11 with GPay payment',()=>{
   
    it('Punch a combo TLP CBSE order for grade 10 to 11 with GPay payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[11]
        const finalGrade = customerinfo.finalGrade[11]
        const selectSubCoures = customerinfo.streamSubCourse[0];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashComboByjusTlpProductDetails(board,initialGrade,finalGrade,selectSubCoures,initialValidity)
        cy.customerPaymentDetailsGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})