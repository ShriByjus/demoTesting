// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Byjus classes Icse order for class 6-8 with Phonepe payment',()=>{
   
    it('Punch a single byjus class Icse order for class 6-8 with Phonepe payment',()=>{
        const productCategories = customerinfo.productCategories[1];
        const board = customerinfo.board[1];
        const initialGrade = customerinfo.initialGrade[7];
        const finalGrade = customerinfo.finalGrade[7]
        const initialValidity = customerinfo.initialValidity;
        const courseType = customerinfo.selectCourseType[2];
        const trialPackCourses = customerinfo.trialPackCourse;
        const paymentMethod = customerinfo.payment_method[1];
        cy.visitKartApp();
        cy.customerBasicDetails();
        cy.customerAddressDetails();
        cy.customerByjusClassProductDetailsCombo(productCategories, board,initialGrade,finalGrade,initialValidity,trialPackCourses, paymentMethod)
        cy.customerPaymentDetailsPhonepe();
        cy.validateOrderDetails();
        cy.saveOrderId(board, initialGrade);
    })
})