// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a combo TLP State order for grade 9 to 12 with Byjus Advantage as Loan payment and Gpay as Down payment',()=>{
   
    it('Punch a combo TLP State order for grade 9 to 12 with Byjus Advantage as Loan payment and Gpay as Down payment',()=>{
        const board = customerinfo.board[2]
        const initialGrade = customerinfo.initialGrade[10]
        const finalGrade = customerinfo.finalGrade[12]
        const selectSubCoures = customerinfo.streamSubCourse[1];
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[0];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashComboByjusTlpProductDetails(board,initialGrade,finalGrade,selectSubCoures,initialValidity,payment_method)
        cy.customerPaymentDetailsByjusAssure()
        cy.customerPaymentDetailsWithByjusGooglePay()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})