import { get } from "lodash";

class kartProductsDetailsPage {

    get productCategiry() {
        return cy.get(':nth-child(1) > .card-body > .ant-form > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get fetchSiblingMaximumPrice() {
        return cy.get('span').contains('Maximum Price');
        // return cy.get(':nth-child(10) > span.ant-tag.ant-tag-purple:nth-child(1)');
    }
    

    get fetchTrialPackMaximumPrice() {
        return cy.get('span').contains('Maximum Price');
    }
    get fetchSingleMaximumPrice() {
        // return cy.get(':nth-child(4) > :nth-child(12) > :nth-child(1)');
        return cy.get(':nth-child(4) > :nth-child(13) > :nth-child(1)');
    }


    get fetchComboByjusClassesMaximumPrice(){
        return cy.get('span').contains('Maximum Price');
    }

    get inputProductCategory() {
        return cy.get('input#productCombination');
    }

    get fetchSiblingMaximumPrice() {
        return cy.get('span').contains('Maximum Price');
    }


    get singleTab() {
        return cy.get('.ant-radio-group-solid > :nth-child(1) > :nth-child(2)');
    }

    get comboTab() {
        return cy.get('.ant-radio-group-solid').contains('Combo');
    }

    get siblingTab() {
        return cy.get('.ant-radio-group-solid > :nth-child(3)');
    }

    get streamingTab() {
        return cy.get('.ant-radio-group-solid > :nth-child(4) > :nth-child(2)');
    }

    get competativeTab() {
        return cy.get('.ant-radio-group-solid > :nth-child(5) > :nth-child(2)');
    }
    //single and combo details

    get ComboInitialGrade() {
        return cy.get('#initialClass');
    }
    get ComboFinalGrade() {
        return cy.get('#finalClass');
    }

   get comboFinalGradeAnnual(){
    return cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
}      
    get ComboInitialValidity() {
        return cy.get('#validity');
    }
    get ComboTablet() {
        return cy.get('#tablet');
    }
    get ComboMathsMarks(){
        return cy.get('#mathPercent');
    }
    get ComboSciMarks(){
        return cy.get('#sciencePercent');
    }
    get ComboSelectSchool(){
        return cy.get(':nth-child(17) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    get ComboLanguage(){
        // return cy.get(':nth-child(6) > .card > .card-body > .ant-form > [style=""] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > [style=""] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    get selectComboNewProfile(){
        return  cy.get('[value="newProfile"]');
    }

    get singleTablet() {
        return cy.get('#tablet');
    }
    get boardDropdown() {
         return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
        //return cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    
    get comboBoardDropdown() {
       return cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
   }

    get stateDropdown() {
        return cy.get('div#state');
    }
    get secondSiblingStateDropdown() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get initialGradeDropdown() {
        return cy.get(':nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get finalGradeDropdown() {
        return cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get initialValidityDropdown() {
        return cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get comboInitialValidityDropdown() {
        return cy.get(':nth-child(10) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get laptopDropdown() {
        return cy.get(':nth-child(9) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get comboLaptopDropdown() {
        return cy.get(':nth-child(10) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get singleBoard() {
        return cy.get('#board');
    }

    get singleValidity() {
        return cy.get('#validity');
    }
  
    get byjusClassCourseType(){
        return cy.get(':nth-child(5) > .ant-card > .ant-card-body');
    }
   
    get byjusClasssSingleValidity() {
        return cy.get('div#yearSelection');
    }
    get byjusClassComboValidity(){
        // return cy.get(':nth-child(10) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
        return cy.get(':nth-child(11) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get byjusClassSingleCourseType() {
        return cy.get('div#validity');
    }
    
    get byjusClassSelectCourseType() {
        return cy.get(':nth-child(5) > .ant-card > .ant-card-body > div');
    }

    get byjusTrialSelectCourseType() {
        return cy.get(':nth-child(6) > .ant-card > .ant-card-body > div');
    }
    // get selectTrialPackCourse(){
    //     return cy.get(':nth-child(6) > .card > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    // }
    get byjusSiblingSelectCourse1(){
        return cy.get(':nth-:nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-valuechild(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value');
    }
    



    get courseTypeByjusClass(){
        return cy.get('div.d-inline-flex.p-3 > div');
        // return cy.get(':nth-child(6) > .ant-card > .ant-card-body');
        // return cy.get(':nth-child(10) > :nth-child(6) > .ant-card > .ant-card-body');
    }

    get selectTrialPack() {
        return cy.get(':nth-child(4) > .ant-card > .ant-card-body > div > :nth-child(4)')
    }

    get selectTrialPackCourse(){
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
        
        // return cy.get(':nth-child(6) > .card > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    
    get byjusClassSiblingSelectcourse(){
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    
    get selectTrialPackCourse() {
        // return cy.get('#course');
        return cy.get(':nth-child(6) > .card > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }



    get singleInitialClass() {
        return cy.get('#initialClass');
    }

    get singleFinalClass() {
        return cy.get('#finalClass');
    }
    //  COMBO DETAILS
    get comboinitialgradebyjusclass(){
        return cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    //sibling details
   
    get productlearningType(){
        return cy.get('div#productLearningType');
    }

    get productlearningTypeInput(){
        return cy.get('li[label="BYJU\'s CLASSES"]');
    }

    get firstSiblingName() {
        return cy.get('#siblingName');
    }

    get siblingBoardDropdown() {
        return cy.get('#board');
    }

    get siblingInitialGradeDropdown() {
        return cy.get('#initialClass');
    }

    get siblingFinalGradeDropdown() {
        return cy.get('#finalClass');
    }
   
    get siblingInitialValidityDropdown() {
        return cy.get('#validity');
    }

    get siblingTabletDropdown() {
        return cy.get('#tablet');
    }

    get addSiblingButton() {
        return cy.get('.sibling-product-btn-holder > .btn')
    }

    get siblingBoard() {
        return cy.get('#board');
    }

    get siblingInitialClass() {
        return cy.get('#initialClass');
    }

    get siblingFinalClass() {
        return cy.get('#finalClass');
    }

    get secondSiblingName() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #siblingName')    
    }

    get secondSiblingBoardDropdown(){
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get secondSiblingInitialGradeDropdown(){
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    
    get secondSiblingFinalGradeDropdown(){
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get secondSiblingInitialValidityDropdown(){
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(12) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered') 
    }
 
    get secondSiblingTabletDropdown(){
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(14) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get siblingSecondBoard() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    get siblingInitialSecondClass() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    get siblingFinalSecondClass() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    get siblingValidity() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(11) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    get siblingTabletSecondClass() {
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > :nth-child(13) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    get siblingSecondState() {
        return cy.get(':nth-child(7) > :nth-child(2) > .card-body > .ant-form > :nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }
    //Byjus Class Single Annual Product
    
    get productCategory() {
        return cy.get('div#productCombination div.ant-select-selection-selected-value');
    }

    get inputProductCategory() {
        return cy.get('input#productCombination');
    }

    get byjusClassBoardDropdown() {
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get byjusClassStateDropdown() {
        return cy.get('div#state');
    }

    get byjusClassInitialGradeDropdown() {
        return cy.get(':nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get byjusClasssSingleValidity(){
        return cy.get('div#yearSelection');
    }

    get byjusClassSingleCourseType(){
        return cy.get('div#validity');
    }

    get byjusClassSelectCourseType() {
        // return cy.get(':nth-child(4) > .ant-card > .ant-card-body > div');
        return cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    
    get byjusClassMathsMarks(){
        return cy.get('#mathPercent');
    }

    get byjusClassSciMarks(){
        return cy.get('#sciencePercent');
    }
   
    get byjusClassSelectSchool(){
        // return cy.get(':nth-child(14) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
        return cy.get(':nth-child(11) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get byjusClassLanguage(){
        // return cy.get(':nth-child(6) > .card > .card-body > .ant-form > :nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
        return cy.get(':nth-child(7) > .card > .card-body > .ant-form > [style=""] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    //Byjus Class Sibling  Second student 

    get newProfile(){
        return cy.get('.ant-radio-wrapper ant-radio-wrapper-checked');
    }

    get byjusClassSiblingSecondName(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #siblingName')
    }

    get byjusClassSiblingSecondBoard(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get byjusClassSiblingInitialSecondClass(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get byjusClassSiblingFinalSecondClass(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get byjusClassSiblingValidity(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(11) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered') 
    }

    get byjusClassSiblingTabletSecondClass(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(13) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }


    //Streaming Detail
    get selectingStremingCourse() {
        return cy.get('.ant-radio-group-solid').contains('Streaming');
    }

    get streamInitialGradeDropdown() {
        return cy.get('#initialClass');
    }

    get streamFinalGradeDropdown() {
        return cy.get('#finalClass');
    }

    get streamSubCourseGradeDropdown() {
        return cy.get('#subCourse');
    }

    get singleSubCourseGradeDropdown() {
        return cy.get('#subCourse');
    }

    get streamInitialValidity() {
        return cy.get('#validity');
    }

    get streammentoringCount() {
        return cy.get('#mentoringCount');
    }

    get streamK12Course() {
        return cy.get('[style=""] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }
    //competitive details

    get competitiveCourse() {
        return cy.get(':nth-child(4) > .card > .card-body > .ant-form > :nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get competitiveCatType() {
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get competitiveIasType() {
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get competitiveIasLanguage() {
        return cy.get('[style=""] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get competitiveInitialValidity() {
        return cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get competitiveTablet() {
        return cy.get(':nth-child(9) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered');
    }

    get paymentTypeNonEMI() {
        return cy.get('#paymentType > :nth-child(2) > :nth-child(2)')
    }
    get paymentTypeEMI() {
        return cy.get(':nth-child(1) > .ant-radio > .ant-radio-input');
    }
    get fetchPricesButton() {
        return cy.get('.fetch-btn');
    }

    get finalPriceInput() {
        return cy.get('#finalPrice');
    }

    get fetchMaximumPrice() {
        return cy.get('span').contains('Maximum Price');
    }
    get nextButton() {
        return cy.get('.next-btn');
    }
    get orderConfirmationCheckBox() {
        return cy.get('.ant-modal-body > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input');
    }
    get confirmButton() {
        return cy.get('.ant-modal-footer > div > .ant-btn-primary');
    }

    get closeDrawerButton() {
        return cy.get('.ant-drawer-body > div > .ant-btn');
    }

    get boardErrorMessage() {
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get classErrorMessage() {
        return cy.get('[style=""] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get initialValidityErrorMessage() {
        return cy.get(':nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get selectProductBoard() {
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered')
    }

    get boardErrorMessage() {
        return cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get validityErrorMessage() {
        return cy.get(':nth-child(10) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get initialGradeErrorMessage() {
        return cy.get(':nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get finalGradeErrorMessage() {
        return cy.get(':nth-child(6) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get paymentMethodErrorMessage() {
        return cy.get('.ant-form-explain');
    }
    get validateOrderPage() {
        return cy.get('#rcDialogTitle1');
    }
    // get productCombination() {
    //     // return cy.get('.ant-modal-body > :nth-child(2)');
    // }
    get paymentMethod() {
        return cy.get('.ant-modal-body > :nth-child(5)');
    }
    get productCombinationDropdown() {
        return cy.get('#productCombination');
    }
    get validateOneOnOne() {
        return cy.get('li > div');
    }
    get validatePaymentType() {
        return cy.get(':nth-child(7) > .card-body > .ant-form > .ant-row');
    }
    get productDetails() {
        return cy.get('.ant-modal-body > div > ul');
    }
    get validateProductPage() {
        return cy.get('.card-header');
    }
// SIBLING BYJUS CLASS NEW TRIAL

    get productCombination(){
        return cy.get('span>#productCombination');
    }
    get siblingByjusCalssPLType(){
        return cy.get('div#productLearningType'); 
    }
    get siblingByjusClassName(){
        return cy.get('#siblingName');
    }
    
    get siblingByjusCalssBoard(){
        return cy.get('span>#board');
    }
    get siblingByjusCalssValidity(){
        return cy.get('#validity');
    }
    get siblingByjusCalssTablet(){
        return cy.get('#tablet');
    }
    get siblingByjusCalssInitialClass(){
        return cy.get('span>#initialClass');
    }
    get siblingByjusCalssFinalClass(){
        return cy.get('span>#finalClass');
    }
    get siblingByjusCalssPLTypeTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection');
    }
    get siblingByjusClassNameTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > #siblingName');
    }
    get siblingByjusCalssBoardTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(5) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection');
    }
    get siblingByjusCalssValidityTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(11) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection');
    }
    get siblingByjusCalssTabletTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(13) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection');
    }
    get siblingByjusCalssInitialClassTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(7) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection');
    }
    get siblingByjusCalssFinalClassTwo(){
        return cy.get(':nth-child(9) > .card > .card-body > .ant-form > :nth-child(8) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection');
    }

    get siblingByjusClassAddBtnthhirdStudent(){
        return cy.get('.btn-success');
    }

      



}

export default kartProductsDetailsPage