// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Byjus classes Icse order for class 6 with Bajaj payment',()=>{
   
    it('Punch a single byjus class Icse order for class 6 with Bajaj payment',()=>{
        const productCategories = customerinfo.productCategories[1];
        const board = customerinfo.board[0];
        const initialGrade = customerinfo.initialGrade[7];
        const initialValidity = customerinfo.initialValidity;
        const courseType = customerinfo.selectCourseType[2];
        const paymentMethod = customerinfo.payment_method[1];
        cy.visitKartApp();
        cy.customerBasicDetails();
        cy.customerAddressDetails();
        cy.customerByjusClassProductDetails(productCategories, board,initialGrade,initialValidity, courseType, paymentMethod)
        cy.customerPaymentDetailsBajaj();
        cy.validateOrderDetails();
        cy.saveOrderId(board, initialGrade);
    })
})