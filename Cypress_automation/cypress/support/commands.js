// import 'cypress-wait-until';
// import 'cypress-file-upload';
// //require('cypress-downloadfile/lib/downloadFileCommand')
// import '@4tw/cypress-drag-drop'
const payuMockData = require('../integration/kart/data/payu.json');
const googlePayMockData = require('../integration/kart/data/googlePay.json');
const shopseMockData = require('../integration/kart/data/shopse.json');
const iciciMockData = require('../integration/kart/data/icici.json');
const fullertonMockData = require('../integration/kart/data/fullerton.json');
const avanseMockData = require('../integration/kart/data/avanse.json')
const iiflMockData = require('../integration/kart/data/iifl.json');
const razorPayMockData = require('../integration/kart/data/razorpay.json');
const pinelabsMockData = require('../integration/kart/data/pinelabs.json');
const kotakMockData = require('../integration/kart/data/kotak.json');
const bajajMockData = require('../integration/kart/data/bajaj.json');
const byjusAsssureMockdata = require('../integration/kart/data/byjusAssure.json');
const byjusDirectMockdata = require('../integration/kart/data/byjusDirect.json');
const byjusAdvantageMockdata = require('../integration/kart/data/byjusAdvantage.json');
const abflMockdata = require('../integration/kart/data/abfl.json');
const paytmMockdata = require('../integration/kart/data/paytm.json');
const phonepeMockdata = require('../integration/kart/data/phonepe.json');
const faker = require('faker');
// const Promise = require('bluebird');
const moment = require('moment');
const RandomNumUtil = require('../integration/kart/lib/RandomUtil');
const phoneNumbers = require('../fixtures/phonenumbers.json');
import kartCustomerDetailsPage from "../support/pageobjects/kartCustomerDetailsPage";
import kartAddressDetailsPage from "../support/pageobjects/kartCustomerAddressDetailsPage";
import productDetailsPage from "../support/pageobjects/kartProductPage";
import paymentDetailsPage from "../support/pageobjects/kartPaymentsPage";
import orderSuccessPage from "../support/pageobjects/kartOrderSuccessPage";
import 'cypress-file-upload';
//  import cypress from "cypress";
// const phoneNumber = require('../fixtures/phonenumbers.json');



global.parentname = faker.name.findName();
var studentname = faker.name.findName();
global.phone = faker.phone.phoneNumber('89########')
global.siblingnameone = faker.name.findName();
global.siblingnametwo = faker.name.findName();

var email = faker.internet.email();
let customerinfo;
var remarks;
var bankName;
var finalPrice = 0;
var loanAmount = 0;
var downPaymentAmount = 0;
// var phoneinfo;
// var phone;


const customerDetails = new kartCustomerDetailsPage();
const addressDetails = new kartAddressDetailsPage();
const productDetails = new productDetailsPage();
const paymentDetails = new paymentDetailsPage();
const orderSuccessDetails = new orderSuccessPage();

before(function () {
    cy.viewport(1024, 1024);
    cy.fixture('kart').then(function (data) {
        customerinfo = data;   
        remarks = customerinfo.remarks;
        bankName = customerinfo.bankName;
    })


    // cy.fixture('phonenumbers').then(function (data) {
    //   phoneinfo = data;
    //   phone = phoneinfo.phoneNumber[6];
    // })

const generateProspectId = () => {
    const randomNumber = RandomNumUtil();
    const prospectId = `CYPRESS${randomNumber}`;
    return prospectId;
}

var finalPrice;

Cypress.Commands.add('visitKartApp', () => {
    const prospectId = generateProspectId();
    var url = `https://dev-middleware.byjusorders.com/payment?directSalesBy=%20&appointmentBookedBy=Meghana%20Negi&studentName=Shubham%20singh&studentEmail=${email}&studentMobile=+91-${phone}&accessKey=u$r345dfdff0767605294d91b80ac914f62&secretKey=b56b69cd8b4c4be11fbac035bb5b17f4198059f0&accountNumber=24692&prospectId=${prospectId}&typeOfSales=DS%20Sales&SourceCampaign=%20&SourceOfLead=%20&LeadSource=%20&SourceMedium=%20&SourceCampaignId=%20&UTMSource=%20&CampaignName=%20&homeAddress=&userEmail=praz@byjus.com`;
    cy.visit(url);
    cy.url().should('include', 'byjusorders');
    cy.wait(3000)
})

Cypress.Commands.add('customerBasicDetails', () => {
    customerDetails.punchaNewOrderButton.should('be.visible').click();
    customerDetails.directSalesByEmailDropdown.type(customerinfo.email).type('{enter}');
    cy.wait(2000)
    customerDetails.parentNameInput.type(parentname);
    //cy.wait(3000);
    customerDetails.studentNameInput.clear();
    customerDetails.studentNameInput.type(studentname);
    //customerDetails.phonePinCode.type('+91');
    //customerDetails.parentMobilenoInput.clear();
    //customerDetails.parentMobilenoInput.type(phone, {force: true, multiple: true})
    customerDetails.secondaryCountryCode.type('+91');
    customerDetails.secondaryPhoneNo.clear();
    customerDetails.secondaryPhoneNo.type(phone, {force: true, multiple: true});
    customerDetails.emailInput.clear();
    customerDetails.emailInput.type(email);
    customerDetails.nextButton.click();
    //cy.wait(3000);
    customerDetails.reasonField();
})


Cypress.Commands.add('customerAddressDetails', () => {
    cy.wait(5000)
    addressDetails.address1Input.should('be.visible');
    //cy.wait(10000)
    addressDetails.address1Input.type(customerinfo.addressLine1);
    addressDetails.address2Input.type(customerinfo.addressLine2);
    addressDetails.zipcodeInput.type(customerinfo.pinCode);
    addressDetails.form.click();
    addressDetails.nextButton.click();
})

Cypress.Commands.add('customerProductDetails', (board, initialGrade, initialValidity, payment_method) => {
    //cy.wait(3000)
    productDetails.boardDropdown.should('be.visible');
    //cy.wait(3000)
    productDetails.boardDropdown.type(board).type('{enter}');

    if (board === 'STATE') {
        productDetails.stateDropdown.type('Karnataka').type('{enter}')

    }
    productDetails.initialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.initialValidityDropdown.type(initialValidity).type('{enter}');
    productDetails.laptopDropdown.type(customerinfo.tablet).type('{enter}');
    cy.wait(1000);
    //productDetails.selectComboNewProfile.check({ force: true }).should('be.checked').and('have.value','newProfile')
    productDetails.paymentTypeNonEMI.click({force: true});

    if (payment_method === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(3000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });

        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    }
})
Cypress.Commands.add('siblingTlpProductDetails', (board, initialGrade, finalGrade, initialValidity) => { 
    productDetails.siblingTab.click();
    productDetails.siblingTab.click();
    cy.wait(2000)
    productDetails.firstSiblingName.type(studentname).type('{enter}');
    productDetails.siblingBoardDropdown.type(board).type('{enter}');
    if(board === 'STATE'){
        productDetails.stateDropdown.type('Karnataka').type('{enter}')
    }
    productDetails.siblingInitialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.siblingFinalGradeDropdown.type(finalGrade).type('{enter}');
    productDetails.siblingInitialValidityDropdown.type(initialValidity).type('{enter}');
    productDetails.siblingTabletDropdown.type(customerinfo.tablet).type('{enter}');
    productDetails.addSiblingButton.click();
})
Cypress.Commands.add('secondSiblingTlpProductDetails', (board, initialGrade, finalGrade, initialValidity, payment_method) => {
    productDetails.secondSiblingName.type(siblingnametwo).type('{enter}');
    productDetails.secondSiblingBoardDropdown.type(board).type('{enter}');
    if(board === 'STATE'){
        productDetails.secondSiblingStateDropdown.type('Karnataka').type('{enter}')
    }
    productDetails.secondSiblingInitialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.secondSiblingFinalGradeDropdown.type(finalGrade).type('{enter}');
    productDetails.secondSiblingInitialValidityDropdown.type(initialValidity).type('{enter}');
    productDetails.secondSiblingTabletDropdown.type(customerinfo.tablet).type('{enter}');
    cy.wait(1000);

    if (payment_method === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(3000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });

        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    }
})
//Combo orders Aakash ByjusTlp
Cypress.Commands.add('akashComboByjusTlpProductDetails', (board, initialGrade, finalGrade, selectSubCoures, initialValidity, payment_method) => {
    productDetails.comboTab.click();
    cy.wait(3000)
    productDetails.comboBoardDropdown.should('be.visible');
    //cy.wait(3000)
    productDetails.comboBoardDropdown.type(board).type('{enter}');
    if (board === 'STATE') {
        productDetails.stateDropdown.type('Karnataka').type('{enter}')

    }
    productDetails.ComboInitialGrade.type(initialGrade).type('{enter}');
    productDetails.ComboFinalGrade.type(finalGrade).type('{enter}');
    productDetails.streamSubCourseGradeDropdown.type(selectSubCoures).type('{enter}')
    productDetails.ComboInitialValidity.type(initialValidity).type('{enter}');
    productDetails.ComboTablet.type(customerinfo.tablet).type('{enter}');
    cy.wait(1000);
    //productDetails.selectComboNewProfile.check({ force: true }).should('be.checked').and('have.value','newProfile')

    if (payment_method === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(3000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });

        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
     }
})

//Single orders Aakash ByjusTlp
Cypress.Commands.add('akashByjusTlpProductDetails', (board, initialGrade, selectSubCoures, initialValidity, payment_method) => {
    //cy.wait(3000)
    productDetails.boardDropdown.should('be.visible');
    //cy.wait(3000)
    productDetails.boardDropdown.type(board).type('{enter}');

    if (board === 'STATE') {
        productDetails.stateDropdown.type('Karnataka').type('{enter}')

    }
    productDetails.initialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.streamSubCourseGradeDropdown.type(selectSubCoures).type('{enter}')
    productDetails.initialValidityDropdown.type(initialValidity).type('{enter}');
    productDetails.laptopDropdown.type(customerinfo.tablet).type('{enter}');
    cy.wait(1000);
    //productDetails.selectComboNewProfile.check({ force: true }).should('be.checked').and('have.value','newProfile')
    // productDetails.paymentTypeNonEMI.click({force: true});

    if (payment_method === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(10000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });

        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
     }
})


//ANNUAL PRODUCT
Cypress.Commands.add('customerByjusClassProductDetails', (productCategories, board, initialGrade, initialValidity, courseType, selectSchool, selectLanguage, paymentMethod, tablet) => {
    productDetails.productCategory.should('be.visible');
    productDetails.productCategory.click();
    productDetails.inputProductCategory.type(productCategories).type('{enter}');
    productDetails.byjusClassBoardDropdown.type(board).type('{enter}');
    if (board === 'STATE') {
        productDetails.byjusClassStateDropdown.type('Karnataka').type('{enter}')
    }
    productDetails.byjusClassInitialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.byjusClasssSingleValidity.type(initialValidity).type('{enter}');
    productDetails.byjusClassSingleCourseType.type(courseType).type('{enter}');
    cy.wait(2000);
    productDetails.laptopDropdown.type(customerinfo.tablet).type('{enter}');
    cy.wait(2000);
    // productDetails.byjusClassSelectSchool.type(selectSchool).type('{enter}');
    productDetails.byjusClassMathsMarks.type('90').type('{enter}');
    productDetails.byjusClassSciMarks.type('90').type('{enter}');
    productDetails.byjusClassLanguage.type(selectLanguage).type('{enter}');
    
    // productDetails.byjusTrialSelectCourseType.should('be.visible');
    let coursetype = [];
    productDetails.courseTypeByjusClass.each(($element) => {
        console.log('course', $element[0]);
        coursetype.push($element[0])
    }).then(() => {
        console.log('courses', coursetype);
        coursetype[2].click({ multiple: true, force: true });
    })
    
    // cy.wait(10000);
    // if (paymentMethod === 'EMI') {
    //     productDetails.paymentTypeEMI.click({ multiple: true, force: true });
    // } else {
    //     productDetails.paymentTypeNonEMI.click({ multiple: true, force: true });

    // }
    if (paymentMethod === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(10000);
        productDetails.fetchSingleMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });
    
        productDetails.fetchPricesButton.click({ multiple: true });
        cy.wait(10000)
        productDetails.fetchSingleMaximumPrice.should('be.visible').then((price) => {
        var priceValue = price.text().split(':').map(item => item.trim());
        finalPrice = priceValue[1];
        productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();   
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    }
})

Cypress.Commands.add('byjusClassTrialPackProductDetails', (productCategories, board, initialGrade, initialValidity, courseType, trialPackCourse, paymentMethod, tablet) => {

    productDetails.productCategory.should('be.visible');
    productDetails.productCategory.click();
    productDetails.inputProductCategory.type(productCategories).type('{enter}');
    productDetails.boardDropdown.should('be.visible');
    productDetails.boardDropdown.type(board).type('{enter}');
    if (board === 'STATE') {
        productDetails.stateDropdown.type('Karnataka').type('{enter}')
    }
    productDetails.initialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.byjusClasssSingleValidity.type(initialValidity).type('{enter}');
    productDetails.byjusClassSingleCourseType.type(courseType).type('{enter}');
    cy.wait(5000);

    productDetails.selectTrialPackCourse.click();
    cy.wait(5000);
    productDetails.selectTrialPackCourse.type(trialPackCourse).type('{enter}');

    let coursetype = [];
    productDetails.courseTypeByjusClass.each(($element) => {
        console.log('course', $element[0]);
        coursetype.push($element[0])
    }).then(() => {
        console.log('courses', coursetype);
        coursetype[2].click({ multiple: true, force: true });
    })
    cy.wait(5000);
    if (paymentMethod === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });
    }
    productDetails.fetchPricesButton.click();
    cy.wait(10000)
    productDetails.fetchTrialPackMaximumPrice.should('be.visible').then((price) => {
        var priceValue = price.text().split(':').map(item => item.trim());
        finalPrice = priceValue[1];
        productDetails.finalPriceInput.type(finalPrice);
    });
    productDetails.nextButton.click();
    productDetails.orderConfirmationCheckBox.click();
    productDetails.confirmButton.click();
    productDetails.closeDrawerButton.click();
})

Cypress.Commands.add('customerByjusClassProductDetailsCombo', (productCategories, board,initialGrade,finalGrade,initialValidity, selectLanguage, selectSchool, trialPackCourse, paymentMethod) => {
    productDetails.productCategory.should('be.visible');
    productDetails.productCategory.click();
    productDetails.inputProductCategory.type(productCategories).type('{enter}');
    productDetails.comboTab.click();
    cy.wait(1000)
    productDetails.boardDropdown.should('be.visible');  
    cy.wait(3000);
    productDetails.boardDropdown.type(board).type('{enter}');
    productDetails.boardDropdown.type(board).type('{enter}');
    if (board === 'STATE') {
        productDetails.stateDropdown.type('Karnataka').type('{enter}')
    }
    productDetails.comboinitialgradebyjusclass.type(initialGrade).type('{enter}');
    productDetails.ComboFinalGrade.type(finalGrade).type('{enter}');
    productDetails.byjusClassComboValidity.type(initialValidity).type('{enter}');
    cy.wait(5000);
    productDetails.ComboTablet.type(customerinfo.tablet).type('{enter}');
    productDetails.ComboMathsMarks.type('90').type('{enter}');
    productDetails.ComboSciMarks.type('90').type('{enter}');
    // productDetails.ComboSelectSchool.type(selectSchool).type('{enter}');
    productDetails.ComboLanguage.type(selectLanguage).type('{enter}');
    // cy.get('[value="newProfile"]').check().should('be.checked').and('have.value','newProfile')
    // productDetails.byjusTrialSelectCourseType.should('be.visible');
    cy.wait(5000);
    // productDetails.selectTrialPackCourse.click();
    // cy.wait(5000);
    // productDetails.selectTrialPackCourse.type(trialPackCourse).type('{enter}');

    let coursetype = [];
    productDetails.courseTypeByjusClass.each(($element) => {
        console.log('course', $element[0]);
        coursetype.push($element[0])
    }).then(() => {
        console.log('courses', coursetype);
        coursetype[2].click({ multiple: true, force: true });
    })
    if (paymentMethod === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });
    }
    productDetails.fetchPricesButton.click();
    cy.wait(10000)
    productDetails.fetchComboByjusClassesMaximumPrice.should('be.visible').then((price) => {
        var priceValue = price.text().split(':').map(item => item.trim());
        finalPrice = priceValue[1];
        productDetails.finalPriceInput.type(finalPrice);
    });
    productDetails.nextButton.click();
    productDetails.orderConfirmationCheckBox.click();
    productDetails.confirmButton.click({ multiple: true, force: true });
    productDetails.closeDrawerButton.click();
})
    


//SIBLING BYJUS CLASS

Cypress.Commands.add('siblingByjusClasses',(productCategories,productLearningType,board,initialGrade,finalGrade,initialValidity,tablet,paymentMethod,trialPackCourse)=>{
    cy.wait(10000);
    productDetails.productCombination.type(productCategories).type('{enter}')
    cy.wait(1000);
    productDetails.siblingTab.should('be.visible').click();
    // var siblingprofile = 2;
    // for(var i = 0; i<siblingprofile; i++){
    cy.wait(3000);
    // cy.get('[value="newProfile"]').check().should('be.checked').and('have.value','newProfile')
    cy.wait(3000);
    cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').click();
    productDetails.siblingByjusCalssPLType.type(productLearningType).type('{enter}');
    productDetails.siblingByjusClassName.type(siblingnameone).type('{enter}');
    productDetails.siblingByjusCalssBoard.type(board).type('{enter}');
    if (board === 'STATE') {
        productDetails.stateDropdown[i].type('Karnataka').type('{enter}');
    }
    productDetails.siblingByjusCalssInitialClass.type(initialGrade).type('{enter}');
    productDetails.siblingByjusCalssFinalClass.type(finalGrade).type('{enter}');
    productDetails.siblingByjusCalssValidity.type(initialValidity).type('{enter}');
    productDetails.siblingByjusCalssTablet.type(tablet).type('{enter}');
    productDetails.
    productDetails.ClickOnAddSibling.click();

    // cy.get('[value="newProfile"]').check().should('be.checked').and('have.value','newProfile');
    
    cy.wait(10000);
    var coursetype = [];
    productDetails.courseTypeByjusClass.each(($element) => {
        console.log('course', $element[0]);
        coursetype.push($element[0])
    }).then(() => {
        console.log('courses', coursetype);
        coursetype[2].click({ multiple: true, force: true });
    })
    cy.wait(5000);
    productDetails.siblingByjusCalssPLTypeTwo.type(productLearningType).type('{enter}')
    productDetails.siblingByjusClassNameTwo.type(siblingnametwo).type('{enter}');
    productDetails.siblingByjusCalssBoardTwo.type(board).type('{enter}')
    if (board === 'STATE') {
        productDetails.stateDropdown.type('Karnataka').type('{enter}');
    }
    productDetails.siblingByjusCalssInitialClassTwo.type(initialGrade).type('{enter}')
    productDetails.siblingByjusCalssFinalClassTwo.type(finalGrade).type('{enter}')
    productDetails.siblingByjusCalssValidityTwo.type(initialValidity).type('{enter}');
    productDetails.siblingByjusCalssTabletTwo.type(tablet).type('{enter}');
    cy.wait(5000);

    // productDetails.siblingByjusClassAddBtnthhirdStudent.click(); //3rd STUDENT
    cy.get(':nth-child(10) > :nth-child(7) > .ant-card > .ant-card-body').click();
    if (paymentMethod === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(10000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });

        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    }
})

Cypress.Commands.add('comboCustomerProductsDetails', (board, initialGrade, finalGrade, initialValidity, payment_method) => {
    productDetails.comboTab.click();
    cy.wait(3000)
    productDetails.comboBoardDropdown.should('be.visible');
    //cy.wait(3000)
    productDetails.comboBoardDropdown.type(board).type('{enter}');

    if (board === "STATE") {
        productDetails.stateDropdown.type('Karnataka').type('{enter}')
    }

    productDetails.ComboInitialGrade.type(initialGrade).type('{enter}');
    productDetails.ComboFinalGrade.type(finalGrade).type('{enter}');
    productDetails.ComboInitialValidity.type(initialValidity).type('{enter}');
    productDetails.ComboTablet.type(customerinfo.tablet).type('{enter}');
    cy.wait(1000);
    //productDetails.selectComboNewProfile.check({ force: true }).should('be.checked').and('have.value','newProfile')
    if (payment_method === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(3000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    }
})

Cypress.Commands.add('streamingCustomerDetails', (initialGrade, finalGrade, initialValidity, streamSubCourse,payment_method) => {
    productDetails.selectingStremingCourse.click({ multiple: true, force: true });
    productDetails.selectingStremingCourse.click({ multiple: true, force: true });
    productDetails.streamInitialGradeDropdown.type(initialGrade).type('{enter}');
    productDetails.streamFinalGradeDropdown.type(finalGrade).type('{enter}')

    if (initialGrade && finalGrade === '11' || initialGrade === '11' && finalGrade === '12' || initialGrade && finalGrade === '12') {
        productDetails.streamSubCourseGradeDropdown.type(streamSubCourse).type('{enter}')
    }

    productDetails.streamInitialValidity.type(initialValidity).type('{enter}');
    cy.wait(1000);
    //productDetails.selectComboNewProfile.check({ force: true }).should('be.checked').and('have.value','newProfile')
    if (payment_method === 'EMI') {
        productDetails.paymentTypeEMI.click({ multiple: true });
        productDetails.fetchPricesButton.click();
        cy.wait(3000);
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            loanAmount = finalPrice * .60;
            downPaymentAmount = finalPrice - loanAmount;
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    } else {
        productDetails.paymentTypeNonEMI.click({ multiple: true });

        productDetails.fetchPricesButton.click();
        cy.wait(3000)
        productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
            var priceValue = price.text().split(':').map(item => item.trim());
            finalPrice = priceValue[1];
            productDetails.finalPriceInput.type(finalPrice);
        });
        productDetails.nextButton.click();
        productDetails.orderConfirmationCheckBox.click();
        productDetails.confirmButton.click();
        productDetails.closeDrawerButton.click();
    }
})

Cypress.Commands.add('catCustomerDetails', (competitiveCourse, competitiveType, initialValidity) => {
    productDetails.competativeTab.should('be.visible').click();
    productDetails.competativeTab.should('be.visible').click();
    productDetails.competitiveCourse.type(competitiveCourse).type('{enter}');
    productDetails.competitiveCatType.type(competitiveType).type('{enter}');
    productDetails.competitiveInitialValidity.type(initialValidity).type('{enter}');
    productDetails.competitiveTablet.type(customerinfo.tablet).type('{enter}');
    productDetails.paymentTypeNonEMI.click();
    productDetails.fetchPricesButton.click();
    cy.wait(3000)
    productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
        var priceValue = price.text().split(':').map(item => item.trim());
        finalPrice = priceValue[1];
        productDetails.finalPriceInput.type(finalPrice);
    });
    productDetails.nextButton.click();
    productDetails.orderConfirmationCheckBox.click();
    productDetails.confirmButton.click();
    productDetails.closeDrawerButton.click();
})

Cypress.Commands.add('iasCustomerDetails', (competitiveCourse, selectedLanguage, competitiveType, initialValidity) => {
    productDetails.competativeTab.should('be.visible').click();
    productDetails.competativeTab.should('be.visible').click();
    productDetails.competitiveCourse.type(competitiveCourse).type('{enter}');
    productDetails.competitiveIasLanguage.type(selectedLanguage).type('{enter}');
    productDetails.competitiveIasType.type(competitiveType).type('{enter}');
    productDetails.competitiveInitialValidity.type(initialValidity).type('{enter}');
    productDetails.competitiveTablet.type(customerinfo.tablet).type('{enter}');
    productDetails.paymentTypeNonEMI.click();
    productDetails.fetchPricesButton.click();
    cy.wait(3000)
    productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
        var priceValue = price.text().split(':').map(item => item.trim());
        finalPrice = priceValue[1];
        productDetails.finalPriceInput.type(finalPrice);
    });
    productDetails.nextButton.click();
    productDetails.orderConfirmationCheckBox.click();
    productDetails.confirmButton.click();
    productDetails.closeDrawerButton.click();
})

Cypress.Commands.add('customerPaymentDetailsPayU', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click({ multiple: true, force: true });
    paymentDetails.selectPayU.click();

    cy.task('createPayUTxnId', { payuMockData, finalPrice }).then((txnid) => {
        paymentDetails.referenceIdInput.type(txnid);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    cy.wait(3000)
    paymentDetails.createOrderButton.click();
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ multiple: true, force: true });
    cy.wait(2000);
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})


Cypress.Commands.add('customerPaymentDetailsCheque', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click({ multiple: true, force: true  });
    paymentDetails.paymentCheque.click();
    paymentDetails.chequeNumber.type(phone).type('{enter}');
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.selectBank.click({ force: true }).type(bankName).type('{enter}');
    paymentDetails.uploadCheque.attachFile('affle.jpg');
    cy.wait(3000);
    paymentDetails.createOrderButton.click();
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ multiple: true, force: true });
    cy.wait(2000)
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsGooglePay', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click({ multiple: true, force: true });
    paymentDetails.paymentGooglePay.click();

    cy.task('createGpayTxnId', { googlePayMockData, finalPrice }).then((referenceId) => {
        paymentDetails.referenceIdEmiInput.type(referenceId);
    })
    paymentDetails.amountEmiInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(3000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ multiple: true, force: true });
    cy.wait(2000)
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();

})

Cypress.Commands.add('customerPaymentDetailsRazorPay', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.paymentRazorPay.click();

    cy.task('createRazorRefrId', { razorPayMockData, finalPrice }).then((referenceId) => {
        paymentDetails.referenceIdInput.type(referenceId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(3000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ force: true, multiple: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();

})


Cypress.Commands.add('customerPaymentDetailsPinelabs', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.paymentPinelabs.click();

    cy.task('createPinelabsAppId', { pinelabsMockData, finalPrice }).then((referenceId) => {
        paymentDetails.referenceIdInput.type(referenceId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ force: true, multiple: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();

})


Cypress.Commands.add('customerPaymentDetailsAvanse', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectEMIPayment.click();

    cy.task('createAvanseAppId', { avanseMockData, finalPrice }).then((appId) => {
        paymentDetails.referenceIdInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(10000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsIcici', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectEMIIciciPayment.click();

    cy.task('createIciciAppId', { iciciMockData, finalPrice }).then((appId) => {
        paymentDetails.referenceIdInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(5000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsIifl', () => {
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectIiflEMIPayment.click();

    cy.task('createIiflAppId', { iiflMockData, finalPrice }).then((appId) => {
        paymentDetails.referenceIdInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsFullerton', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectEMIFullertonPayment.click();

    cy.task('createFullertonAppId', { fullertonMockData, finalPrice }).then((appId) => {
        paymentDetails.referenceIdInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})


Cypress.Commands.add('customerPaymentDetailsKotak', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectEMIKotakPayment.click();

    cy.task('createKotakAppId', { kotakMockData, finalPrice }).then((appId) => {
        paymentDetails.referenceIdInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})


Cypress.Commands.add('customerPaymentDetailsShopse', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.paymentShopse.click();

    cy.task('createShopseRefernceId', { shopseMockData, finalPrice }).then((referenceId) => {
        paymentDetails.referenceIdInput.type(referenceId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ multiple: true, force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    cy.wait(4000);
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();

})

Cypress.Commands.add('customerPaymentDetailsBajaj', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectEMIBajajPayment.click({force: true});
    cy.task('createBajajRrnId', { bajajMockData, finalPrice }).then((referenceId) => {
        paymentDetails.referenceIdInput.type(referenceId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ force: true, multiple: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();

})

Cypress.Commands.add('customerPaymentDetailsWithByjusGooglePay', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click({ multiple: true, force: true });
    paymentDetails.paymentGooglePay.click();

    cy.task('createGpayTxnId', { googlePayMockData, downPaymentAmount }).then((referenceId) => {
        paymentDetails.referenceIdWithByjusDownPayment.type(referenceId);
    })
    paymentDetails.amountWithByjusDownPayment.type(downPaymentAmount).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(3000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ force: true, multiple: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsWithNonByjusGooglePay', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click({ multiple: true });
    paymentDetails.paymentGooglePay.click();

    cy.task('createGpayTxnId', { googlePayMockData, downPaymentAmount }).then((referenceId) => {
        paymentDetails.referenceIdDownPaymentInput.type(referenceId);
    })
    paymentDetails.amountDownPaymentInput.type(downPaymentAmount).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ force: true, multiple: true });
    cy.wait(2000);
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsByjusAssure', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click({ multiple: true, force: true });
    paymentDetails.selectByjusAssure.click();

    cy.task('createByjusAssureTxnId', { byjusAsssureMockdata, loanAmount }).then((appId) => {
        paymentDetails.referenceIdEmiInput.type(appId);
    })
    paymentDetails.amountEmiInput.type(loanAmount).type('{enter}');
    paymentDetails.addDownPayment.click();
})

Cypress.Commands.add('customerPaymentDetailsByjusDirect', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectByjusDirect.click();

    cy.task('createByjusDirectTxnId', { byjusDirectMockdata, loanAmount }).then((appId) => {
        paymentDetails.referenceIdEmiInput.type(appId);
    })
    paymentDetails.amountEmiInput.type(loanAmount).type('{enter}');
    paymentDetails.addDownPayment.click();
})

Cypress.Commands.add('customerPaymentDetailsByjusAdvantage', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectByjusAdvantage.click();

    cy.task('createByjusAdvantageTxnId', { byjusAdvantageMockdata, loanAmount }).then((appId) => {
        paymentDetails.referenceIdEmiInput.type(appId);
    })
    paymentDetails.amountEmiInput.type(loanAmount).type('{enter}');
    paymentDetails.addDownPayment.click();
})

Cypress.Commands.add('customerPaymentDetailsAbfl', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectAbfl.click();

    cy.task('createAbflTxnId', { abflMockdata, loanAmount }).then((appId) => {
      paymentDetails.referenceIdEmiInput.type(appId);
    })
    paymentDetails.amountEmiInput.type(loanAmount).type('{enter}');
    paymentDetails.addDownPayment.click();
})

Cypress.Commands.add('customerPaymentDetailsSingleAbfl', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectAbfl.click();

    cy.task('createAbflTxnIdforsingleTlp', { abflMockdata,finalPrice }).then((appId) => {
      paymentDetails.referenceIdEmiInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsforSingleByjusAssure', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.selectByjusAssure.click();

    cy.task('createByjusAssureTxnIdforsingleTlp', { byjusAsssureMockdata, finalPrice }).then((appId) => {
        paymentDetails.referenceIdEmiInput.type(appId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(5000);
    paymentDetails.confirmCheckbox.should('be.visible').click({ force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsPaytm', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.paymentPaytm.click();

    cy.task('createPaytmTxnId', { paytmMockdata, finalPrice }).then((paytmid) => {
        paymentDetails.referenceIdInput.type(paytmid);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(5000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({force : true,  multiple: true});
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('customerPaymentDetailsPhonepe', () => {
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.paymentPhonepe.click();

    cy.task('createPhonepeTxnId', { phonepeMockdata, finalPrice }).then((referenceId) => {
        paymentDetails.referenceIdInput.type(referenceId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}');
    paymentDetails.createOrderButton.click();
    cy.wait(30000);
    paymentDetails.reviewOrderCheckbox.should('be.visible').click({force : true,  multiple: true});
    paymentDetails.reviewOrderConfirmButton.click();
    paymentDetails.selectOMSRadioButton.click();
    //paymentDetails.remarksInput.type(remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add('validateOrderDetails', () => {
    orderSuccessDetails.validateOrderDecsionPage.then((orderLabel) => {
        console.log(orderLabel.text());
        const label = orderLabel.text().trim();
        expect(label).equal(label);
    })

    orderSuccessDetails.valiedateOrderDetailPage.then((Type) => {
        const fields = Type.text().split('=').map(item => item.trim());
        const orderType = fields[1];
        if (orderType == "Single Order"){
            expect(orderType).equal('Single Order')
        }
        else{
        expect(orderType).equal('Parent Order')
        }
    })
    orderSuccessDetails.orderStatusField.then((orderStatus) => {
        cy.log(orderStatus.text());
        var fields = orderStatus.text().split('=').map(item => item.trim());;
        var status = fields[1];
        expect(status).equal('soft_approved')
    })
    orderSuccessDetails.messageField.then((spanmessage) => {
        cy.log(spanmessage.text());
        assert.equal(spanmessage.text(), customerinfo.orderStatusMessage);

    });
    cy.wait(65000);
    orderSuccessDetails.fetchStatusButton.should('be.visible').click();
    orderSuccessDetails.validateFetchStatus.should('have.text', customerinfo.fetchStatus)
    orderSuccessDetails.orderId.should('be.visible').then((orderid) => {
        cy.log(orderid.text())
        var fields = orderid.text().split('=').map(item => item.trim());;
        var orderId = fields[1];
        expect(orderId).contains('SO-')
    })
    orderSuccessDetails.orderStatusField.then((orderStatus) => {
        cy.log(orderStatus.text());
        var fields = orderStatus.text().split('=').map(item => item.trim());
        var status = fields[1];
        expect(status).equal('order_created')
    })

    //working on this function
    orderSuccessDetails.succesMessage.then((successMessage) => {
        assert.equal(successMessage.text(), customerinfo.orderSuccessMessage)
    })
})

Cypress.Commands.add("saveOrderId", (board, userClass) => {
    orderSuccessDetails.orderId.invoke('text').then((orderId => {
        let oid = orderId.replace('Order Id = ', "");
        var userdata = {
            [board]: {
                [userClass]: {
                    'order-id': oid
                }
            }
        };
        cy.task('updateUserData', { filepath: Cypress.env('single_tlp_orders_fd'), userData: userdata });
    }))
})

//this functions if for validatios of errorMessages,status messages and labels
Cypress.Commands.add('assertCustomerBasicDetails', () => {
    customerDetails.punchaNewOrderButton.should('be.visible').click();

    customerDetails.validateSPDetails.then((salesLabel) => {
        console.log(salesLabel.text());
        var label = salesLabel.text().trim();
        expect(label).equal(label);
    })

    customerDetails.validateLeadPhoneNo.then((leadPhoneNo) => {
        cy.log(leadPhoneNo.text());
        var fields = leadPhoneNo.text().split(':').map(item => item.trim());;
        var leadPNo = fields[1];
        expect(leadPNo).equal(leadPNo)
    })

    customerDetails.nextButton.should('be.visible').click();
    customerDetails.studentNameInput.clear();
    customerDetails.studentNameInput.clear();
    customerDetails.parentMobilenoInput.clear();
    customerDetails.emailInput.clear();
    customerDetails.nextButton.should('be.visible').click();
    customerDetails.salesPersonErrorMessage.should('have.text', customerinfo.salesPersonEmailErrorMessage);
    customerDetails.parentNameErrorMessage.should('have.text', customerinfo.parentNameErrorMessage);
    customerDetails.studentNameErrorMessage.should('have.text', customerinfo.studentNameErrorMessage);
    customerDetails.phoneNumberErrorMessage.should('have.text', customerinfo.phoneNoErrorMessage);
    customerDetails.emailErrorMessage.should('have.text', customerinfo.emailErrorMessage);
    customerDetails.directSalesByEmailDropdown.type(customerinfo.email);

    customerDetails.validateCustomePage.then((customerLabel) => {
        console.log(customerLabel.text());
        var label = customerLabel.text().trim();
        expect(label).equal(label);
    })

    customerDetails.parentNameInput.type(parentname).should('have.value', parentname);
    customerDetails.studentNameInput.type(studentname).should('have.value', studentname);
    customerDetails.parentMobilenoInput.type(phone).should('have.value', phone)
    customerDetails.emailInput.type(email).should('have.value', email);
    customerDetails.nextButton.click();
})

Cypress.Commands.add('asserAddressDetails', () => {

    addressDetails.validateAddressPage.then((addressLabel) => {
        console.log(addressLabel.text());
        var label = addressLabel.text().trim();
        expect(label).equal(label);
    })

    cy.wait(1000);
    addressDetails.validateDirectSaleCheckBox.then((checkDirectBox) => {
        var saleCheckBox = checkDirectBox.text();
        expect(saleCheckBox).equal(saleCheckBox);
    })

    cy.wait(10000);
    addressDetails.nextButton.click();
    addressDetails.addressLineOneErrorMessage.should('have.text', customerinfo.addressOneErrorMessage);
    addressDetails.addresslineTwoErrorMessage.should('have.text', customerinfo.addresstwoErrorMessage);
    addressDetails.addresszipcodeErrorMessage.should('have.text', customerinfo.adsresszipcodeErrorMessage);
    addressDetails.addresStateErrorMessage.should('have.text', customerinfo.addresStateErrorMessage);
    addressDetails.addressCityErrorMessage.should('have.text', customerinfo.addressCityErrorMessage);
    addressDetails.address1Input.should('be.visible');
    addressDetails.address1Input.type(customerinfo.addressLine1).should('have.value', customerinfo.addressLine1);
    addressDetails.address2Input.type(customerinfo.addressLine2).should('have.value', customerinfo.addressLine2);;
    addressDetails.zipcodeInput.type(customerinfo.pinCode).should('have.value', customerinfo.pinCode);;
    addressDetails.form.click();
    addressDetails.nextButton.click();
})

Cypress.Commands.add('assertProductDetails', (board, initialGrade, finalGrade, initialValidity) => {

    productDetails.validateProductPage.then((productLabel) => {
        console.log(productLabel.text());
        var label = productLabel.text().trim();
        expect(label).equal(label);
    })

    productDetails.validateOneOnOne.then((OneOnOne) => {
        cy.log(OneOnOne.text());
        var fields = OneOnOne.text().split(':').map(item => item.trim());
        var ByjusOneOnOne = fields[1];
        expect(ByjusOneOnOne).equal(ByjusOneOnOne)
    })

    productDetails.validatePaymentType.then((paymentType) => {
        cy.log(paymentType.text());
        expect(paymentType).equal(paymentType)
    })

    cy.wait(10000);
    productDetails.comboTab.should('be.visible').click();
    productDetails.fetchPricesButton.click();
    productDetails.boardErrorMessage.should('have.text', customerinfo.boardErrorMessage);
    productDetails.validityErrorMessage.should('have.text', customerinfo.validityErrorMessage);
    productDetails.boardDropdown.should('be.visible');
    cy.wait(3000)
    productDetails.boardDropdown.type(board).type('{enter}');
    productDetails.fetchPricesButton.click();
    cy.wait(1000);
    productDetails.initialGradeErrorMessage.should('have.text', customerinfo.initialGradeErrorMessage);
    productDetails.finalGradeErrorMessage.should('have.text', customerinfo.finalGradeErrorMessage);
    productDetails.ComboInitialGrade.type(initialGrade).type('{enter}');
    productDetails.ComboFinalGrade.type(finalGrade).type('{enter}');
    productDetails.ComboInitialValidity.type(initialValidity).type('{enter}');
    productDetails.ComboTablet.type(customerinfo.tablet).type('{enter}');
    productDetails.fetchPricesButton.click();

    productDetails.paymentMethodErrorMessage.should('have.text', customerinfo.paymentMethodErrorMessage)
    productDetails.paymentTypeNonEMI.should('have.value', 'NON_EMI').click();
    productDetails.fetchPricesButton.click();
    productDetails.fetchMaximumPrice.should('be.visible').then((price) => {
        var priceValue = price.text().split(':').map(item => item.trim());
        finalPrice = priceValue[1];
        productDetails.finalPriceInput.type(finalPrice).should('have.value', finalPrice);
    });
    productDetails.nextButton.click();
    productDetails.validateOrderPage.should('have.text', customerinfo.validateReviewOrder);

    productDetails.productCombination.then((prodComb) => {
        cy.log(prodComb.text());
        var fields = prodComb.text().split(':').map(item => item.trim());
        var status = fields[1];
        expect(status).equal('Byjus Tlp')
    })

    productDetails.productDetails.then((prodDetails) => {
        cy.log(prodDetails.text());
        var fields = prodDetails.text().split(':').map(item => item.trim());
        var products = fields[1];
        expect(products).equal(products)
    })
    

    productDetails.paymentMethod.then((payMethod) => {
        cy.log(payMethod.text());
        var fields = payMethod.text().split(':').map(item => item.trim());
        var status = fields[1];
        expect(status).equal('NON-EMI')
    })

    productDetails.orderConfirmationCheckBox.check().should('be.checked')
    productDetails.confirmButton.click();
    productDetails.closeDrawerButton.click();
})

Cypress.Commands.add('assertPaymentDetailsGPay', () => {

    paymentDetails.validatePaymentPage.then((paymentLabel) => {
        console.log(paymentLabel.text());
        var label = paymentLabel.text().trim();
        expect(label).equal(label);
    })

    cy.wait(1000)
    paymentDetails.createOrderButton.should('be.visible').click();
    paymentDetails.paymentProvideErrorMessage.should('have.text', customerinfo.paymentProvideErrorMessage)
    paymentDetails.txdIdErrorMessage.should('have.text', customerinfo.txdIdErrorMessage)
    paymentDetails.amountErrorMessage.should('have.text', customerinfo.amountErrorMessage)
    paymentDetails.paymentProviderDropdown.should('be.visible');
    paymentDetails.paymentProviderDropdown.click();
    paymentDetails.paymentGooglePay.click();
    cy.task('createGpayTxnId', { googlePayMockData, finalPrice }).then(($referenceId) => {
        paymentDetails.referenceIdInput.type($referenceId);
    })
    paymentDetails.amountInput.type(finalPrice).type('{enter}').should('have.value', finalPrice);
    cy.wait(1000)

    paymentDetails.validatefinalPrice.then((finalValue) => {
        cy.log(finalValue.text());
        var fields = finalValue.text().split(':').map(item => item.trim());
        var amount = fields[1];
        expect(amount).equal(amount);
    })
    cy.wait(1000);
    paymentDetails.validatefinalPrice.click();

    paymentDetails.validateProductLabel.then((productLabel) => {
        console.log(productLabel.text());
        var label = productLabel.text().trim();
        expect(label).equal(label);
    })

    paymentDetails.validateProductDetails.then((drowerBody) => {
        console.log(drowerBody.text());
        var PaymentProductDetails = drowerBody.text().trim();
        expect(PaymentProductDetails).equal(PaymentProductDetails);
    })
    cy.wait(1000);
    paymentDetails.closedDrower.should('be.visible').click();

    paymentDetails.createOrderButton.should('be.visible').click({ force: true, multiple: true });
    cy.wait(1000)
    paymentDetails.validateReviewOrdePage.should('have.text', customerinfo.validateReviewOrdePage);
    orderSuccessDetails.validateOrderType.then((orderType) => {
        cy.log(orderType.text());
        var fields = orderType.text().split(':').map(item => item.trim());
        var status = fields[1];
        expect(status).equal('SINGLE order.')
    })

    paymentDetails.reviewOrderCheckbox.should('be.visible').click({ multiple: true, force: true });
    paymentDetails.reviewOrderConfirmButton.click();
    cy.wait(10000);

    paymentDetails.validateOrderDecsionPage.then((decisionLabel) => {
        console.log(decisionLabel.text());
        var label = decisionLabel.text().trim();
        expect(label).equal(label);
    })

    paymentDetails.proceedButton.click();
    paymentDetails.validateOrderPlaform.should('have.text', customerinfo.validatePlatformError);
    paymentDetails.validateRemarkField.should('have.text', customerinfo.validateRemarkFields);
    paymentDetails.validateFormValue.should('have.text', customerinfo.validateFormValue);
    paymentDetails.selectOMSRadioButton.check().should('be.checked').and('have.value', customerinfo.validateOmsRedioButton)
    //paymentDetails.remarksInput.type(remarks).should('have.value', remarks);
    cy.wait(2000);
    paymentDetails.proceedButton.click();
})

Cypress.Commands.add("saveOrderDetails", () => {
        orderSuccessDetails.orderId.invoke('text').then((orderId => {
            let oid = [], order_Id = 0;
            oid = orderId.replace('Order Id = ', "");
            cy.writeFile('cypress/fixtures/orders.txt', order_Id = oid +'\n',{ 
                flag: 'a+'})
        }))
    })

Cypress.Commands.add('validatejsonFile', () => {
    cy.fixture('orders').then((value) => {
        expect(value.board).to.equal(value.board)
        expect(value.initialGrade).to.equal(value.initialGrade)
        expect(value.finalGrade).to.equal(value.finalGrade)
        expect(value.initialValidity).to.equal(value.initialValidity)
        expect(value.order_id).to.equal(value.order_id)
        expect(value.order_Type).to.equal(value.order_Type)
        expect(value.payment_Method).to.equal(value.payment_Method)
        expect(value.payment_Provider).to.equal(value.payment_Provider)
        expect(value.finalPrice).to.equal(value.finalPrice)

    })
})

})
