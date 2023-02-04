//<reference types="cypress" />
// import 'cypress-wait-until'

const faker = require('faker');
const RandomNumUtil = require('../lib/RandomUtil');
const payuMockData = require('../data/payu.json');
const userDetails = require('../../../fixtures/kart.json');


import kartCustomerDetailsPage from "../../../support/pageObjects/kartCustomerDetailsPage";
import kartAddressDetailsPage from "../../../support/pageobjects/kartCustomerAddressDetailsPage";
import productDetailsPage from "../../../support/pageobjects/kartProductPage";
import paymentDetailsPage from "../../../support/pageobjects/kartPaymentsPage";
import orderSuccessPage from "../../../support/pageobjects/kartOrderSuccessPage";



const boards = userDetails.board
const classes = userDetails.initialGrade
boards.forEach((board) => {
    classes.forEach((userClass) => {
        describe('Punch a single TLP order with Razorpay payment', function () {
            global.parentname = faker.name.findName();
            var studentname = faker.name.findName();
            global.phone = faker.phone.phoneNumber('89########');
            var email = faker.internet.email();
        
            const customerDetails = new kartCustomerDetailsPage();
            const addressDetails = new kartAddressDetailsPage();
            const productDetails = new productDetailsPage();
            const paymentDetails = new paymentDetailsPage();
            const orderSuccessDetails = new orderSuccessPage();
        
            const generateProspectId = () => {
                const randomNumber = RandomNumUtil();
                const prospectId = `CYPRESS${randomNumber}`;
                return prospectId;
            }
            const prospectId = generateProspectId();
            var url = `https://dev-middleware.byjusorders.com/payment?directSalesBy=%20&appointmentBookedBy=Meghana%20Negi&studentName=Shubham%20singh&studentEmail=ranideep@gmail.com&studentMobile=${phone}&accessKey=u$r345dfdff0767605294d91b80ac914f62&secretKey=b56b69cd8b4c4be11fbac035bb5b17f4198059f0&accountNumber=24692&prospectId=${prospectId}&typeOfSales=DS%20Sales&SourceCampaign=%20&SourceOfLead=%20&LeadSource=%20&SourceMedium=%20&SourceCampaignId=%20&UTMSource=%20&CampaignName=%20&homeAddress=&userEmail=praz@byjus.com`;
        
           
            before(function () {
                
                cy.fixture('kart').then(function (data) {
                    this.data = data;
                })
            });
        
            it('open kart', function () {
                cy.visitKartApp();
                cy.customerBasicDetails();
                cy.customerAddressDetails();
                var initialGrade =  userClass;
                var initialValidity =  this.data.initialValidity;
                cy.customerProductDetails(board,initialGrade,initialValidity);
                cy.customerPaymentDetailsRazorPay();
                cy.validateOrderDetails();
                cy.saveOrderId(board, initialGrade);
            })
        })

    })

})