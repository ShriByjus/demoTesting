// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Byjus classes state order for class 5 with pinelabs payment',()=>{
   
    it('Punch a single byjus class state order for class 5 with Pinelabs payment',()=>{
        const productCategories = customerinfo.productCategories[1];
        const productLearningType = customerinfo.productLearningType[0];
        const board = customerinfo.board[2];
        const initialGrade = customerinfo.initialGrade[6];
        const initialValidity = customerinfo.initialValidity;
        const finalGrade = customerinfo.finalGrade[4];
        const trialPackCourse = customerinfo.trialPackCourse;
        const paymentMethod = customerinfo.payment_method[1];
        cy.visitKartApp();
        cy.customerBasicDetails();
        cy.customerAddressDetails();
        cy.siblingByjusClasses(productCategories, productLearningType, board,initialGrade,finalGrade,initialValidity, trialPackCourse, paymentMethod);
        cy.customerPaymentDetailsPinelabs();
        cy.validateOrderDetails();
        cy.saveOrderId(board, initialGrade);
    })
})