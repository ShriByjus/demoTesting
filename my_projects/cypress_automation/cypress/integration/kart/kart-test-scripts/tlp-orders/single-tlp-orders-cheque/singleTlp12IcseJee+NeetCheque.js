// const userData = require('../../../fixtures/kart.json')
var customerinfo
before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;
    })
})

describe('Punch a single Aakash Byjus TLP ICSE order for class 12[JEE+NEET] with Cheque payment',()=>{
   
    it('Punch a single Aakash Byjus TLP ICSE order for class 12[JEE+NEET] with Cheque payment',()=>{
        const board = customerinfo.board[1]
        const initialGrade = customerinfo.initialGrade[13];
        const selectSubCoures = customerinfo.streamSubCourse[2];
        const initialValidity = customerinfo.initialValidity;
        cy.visitKartApp()
        cy.customerBasicDetails()
        cy.customerAddressDetails()
        cy.akashByjusTlpProductDetails(board,initialGrade,selectSubCoures,initialValidity)
        cy.customerPaymentDetailsCheque()
        cy.validateOrderDetails()
        cy.saveOrderDetails()
    })
})