// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Byjus classes State order for class 5 with Pinelabs payment',()=>{
   
    it('Punch a single byjus class State order for class 5 with Pinelabs payment',()=>{
        const productCategories = customerinfo.productCategories[1];
        const board = customerinfo.board[1];
        const initialGrade = customerinfo.initialGrade[6];
        const initialValidity = customerinfo.initialValidity;
        const courseType = customerinfo.selectCourseType[2];
        const paymentMethod = customerinfo.payment_method[1];
        cy.visitKartApp();
        cy.customerBasicDetails();
        cy.customerAddressDetails();
        cy.customerByjusClassProductDetails(productCategories, board,initialGrade,initialValidity, courseType, paymentMethod)
        cy.customerPaymentDetailsPinelabs();
        cy.validateOrderDetails();
        cy.saveOrderId(board, initialGrade);
    })
})