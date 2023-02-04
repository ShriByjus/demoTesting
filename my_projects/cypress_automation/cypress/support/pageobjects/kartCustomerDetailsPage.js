class kartCustomerDetailsPage {

    get punchaNewOrderButton() {
        return cy.get('.btn-success', { timeout: 10000 });
    }

    get directSalesByEmailDropdown() {
        return cy.get('#directSalesBy');
    }

    get parentNameInput() {
        return cy.get('#parentName');
    }

    get studentNameInput() {
        return cy.get('#studentName');
    }

    get phonePinCode() {
        return cy.get('#parentMobileGroup > .ant-input-group > .ant-col-10 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value');
    }

    get parentMobilenoInput() {
        return cy.get('#parentMobileNo');
    }

    get secondaryCountryCode(){
        return cy.get('#alternateMobileGroup > .ant-input-group > .ant-col-10 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value');
    }

    get secondaryPhoneNo(){
        return cy.get('#alternateMobileNo');
    }

    get emailInput() {
        return cy.get('#email');
    }
    get nextButton() {
        return cy.get('.next-btn');
    }
    get nextButton() {
        return cy.get('.next-btn');
    }
    get nextButton() {
        return cy.get('.next-btn');
    } get nextButton() {
        return cy.get('.next-btn');
    } get nextButton() {
        return cy.get('.next-btn');
    } get nextButton() {
        return cy.get('.next-btn');
    } get nextButton() {
        return cy.get('.next-btn');
    } get nextButton() {
        return cy.get('.next-btn');
    }

    reasonField() {
        cy.get("body").then(($body) => {
            if ($body.find("div.ant-alert-error").length) {
                return "textarea[name=duplicateReason]";
            }
            return false;
        }).then((selector) => {
            if (selector) {
                this.emailInput.scrollIntoView({ offset: { top: 30, left: 0 } });
                cy.get(selector).scrollIntoView().should('be.visible');
                cy.get(selector).type('this field we get when email id and phone number already exist, without this can not proceed further');
                this.nextButton.click();
            }
        })

    }

    get salesPersonErrorMessage() {
        return cy.get('.pr-0 > .m-2 > .card > .card-body > .ant-form > .ant-form-item-with-help > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get parentNameErrorMessage() {
        return cy.get('.ant-form > :nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get studentNameErrorMessage() {
        return cy.get('.pl-0 > .m-2 > .card > .card-body > .ant-form > :nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain')
    }
    get phoneNumberErrorMessage() {
        return cy.get('.ant-col-14 > .ant-row > .ant-col > .ant-form-item-control > .ant-form-explain');
    }
    get emailErrorMessage() {
        return cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain');
    }
    get validateLeadPhoneNo() {
        return cy.get('[style="margin-top: 8%;"] > [style="margin: 1%;"] > .ant-alert > .ant-alert-description > :nth-child(1)');
    }
    get parentMobileNo() {
        return cy.get('#parentMobileNo');
    }
    get validateSPDetails() {
        return cy.get('.pr-0 > .m-2 > .card-header');
    }
    get validateCustomePage() {
        return cy.get('.pl-0 > .m-2 > .card-header');
    }


}

export default kartCustomerDetailsPage