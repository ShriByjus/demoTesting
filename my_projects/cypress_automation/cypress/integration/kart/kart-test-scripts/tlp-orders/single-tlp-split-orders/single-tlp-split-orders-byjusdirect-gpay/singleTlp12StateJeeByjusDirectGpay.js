// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Aakash Byjus TLP State order for class 11[JEE] with Byjus Direct as Loan payment and Gpay as Down payment',()=>{

    it('Punch a single Aakash Byjus TLP State order for class 11[JEE] with Byjus Direct as Loan payment and Gpay as Down payment',()=>{
        const board = customerinfo.board[2];
        const initialGrade = customerinfo.initialGrade[15];
        const selectSubCoures = customerinfo.streamSubCourse[0];
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[0];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashByjusTlpProductDetails(board,initialGrade,selectSubCoures,initialValidity,payment_method)
        cy.customerPaymentDetailsByjusDirect()
        cy.customerPaymentDetailsWithByjusGooglePay()
        cy.validateOrderDetails()
    })
})