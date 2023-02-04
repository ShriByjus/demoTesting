// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Byjus classes Cbse order for class 5 with Avanse payment',()=>{
   
    it('Punch a single byjus class Cbse order for class 5 with Avanse payment',()=>{
        const productCategories = customerinfo.productCategories[1];
        const board = customerinfo.board[0];
        const initialGrade = customerinfo.initialGrade[6];
        const initialValidity = customerinfo.initialValidity;
        const courseType = customerinfo.selectCourseType[2];
        const selectSchool = customerinfo.selectSchool[0];
        const selectLanguage = customerinfo.selectLanguage[0];
        const paymentMethod = customerinfo.payment_method[0];
        cy.visitKartApp();
        cy.customerBasicDetails();
        cy.customerAddressDetails();
        cy.customerByjusClassProductDetails(productCategories, board,initialGrade,initialValidity, courseType, selectSchool,selectLanguage, paymentMethod)
        cy.customerPaymentDetailsAvanse();
        cy.validateOrderDetails();
        cy.saveOrderId(board, initialGrade);
    })
})