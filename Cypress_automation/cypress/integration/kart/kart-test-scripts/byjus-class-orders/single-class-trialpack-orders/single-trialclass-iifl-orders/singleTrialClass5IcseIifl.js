// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Byjus trialpack Icse order for class 5 with Iifl payment',()=>{
   
    it('Punch a single byjus trialpack  Icse order for class 5 with Iifl payment',()=>{
        const productCategories = customerinfo.productCategories[1];
        const board = customerinfo.board[1];
        const initialGrade = customerinfo.initialGrade[6];
        const initialValidity = customerinfo.initialValidity;
        const courseType = customerinfo.selectCourseType[0];
        const trialPackCourse = customerinfo.trialPackCourse;
        const paymentMethod = customerinfo.payment_method[0];
        cy.visitKartApp();
        cy.customerBasicDetails();
        cy.customerAddressDetails();
        cy.byjusClassTrialPackProductDetails(productCategories, board,initialGrade,initialValidity, courseType,trialPackCourse,paymentMethod)
        cy.customerPaymentDetailsIifl();
        cy.validateOrderDetails();
        cy.saveOrderId(board, initialGrade);
    })
})