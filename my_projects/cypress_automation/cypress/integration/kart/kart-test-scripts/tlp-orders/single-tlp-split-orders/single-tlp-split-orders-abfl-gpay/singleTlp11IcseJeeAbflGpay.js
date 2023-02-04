// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Aakash Byjus TLP ICSE order for class 11[JEE] with Abfl as Loan payment and Gpay as Down payment',()=>{

    it('Punch a single Aakash Byjus TLP ICSE order for class 11[JEE] with Abfl as Loan payment and Gpay as Down payment',()=>{
        const board = customerinfo.board[1];
        const initialGrade = customerinfo.initialGrade[14];
        const selectSubCoures = customerinfo.streamSubCourse[0];
        const initialValidity = customerinfo.initialValidity;
        const payment_method = customerinfo.payment_method[0];
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashByjusTlpProductDetails(board,initialGrade,selectSubCoures,initialValidity,payment_method)
        cy.customerPaymentDetailsAbfl()
        cy.customerPaymentDetailsWithNonByjusGooglePay()
        cy.validateOrderDetails()
    })
})