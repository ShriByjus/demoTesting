

class AddressPage {

    get yourAddressTab() {
        return cy.get(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none');
    }

    get addAddresslink() {
        return cy.get('#ya-myab-address-add-link > .a-box > .a-box-inner');
    }
    get fullName() {
        return cy.get('#address-ui-widgets-enterAddressFullName');
    }
    get mobileNumber() {
        return cy.get('#address-ui-widgets-enterAddressPhoneNumber');
    }
    get pinCode() {
        return cy.get('#address-ui-widgets-enterAddressPostalCode');
    }
    get flatno() {
        return cy.get('#address-ui-widgets-enterAddressLine1');
    }
    get area() {
        return cy.get('#address-ui-widgets-enterAddressLine2');
    }
    get landmark() {
        return cy.get('#address-ui-widgets-landmark');
    }
    get businessHoursDropdown() {
        return cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text > .a-dropdown-prompt');

    }

    get businessHours() {
        return cy.get('#dropdown1_1');

    }

    get stateDropdown() {
        return cy.get('#address-ui-widgets-enterAddressStateOrRegion > .a-button-inner > .a-button-text');
    }
    get state() {
        return cy.get('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId_16');
    }


    get addAddressbutton() {
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input');
    }

    get validateAddedAddress() {
        return cy.get('#ya-myab-display-address-block-1 > .a-box-inner > .a-section > .a-spacing-small > .a-unordered-list > :nth-child(3) > .a-list-item > #address-ui-widgets-AddressLineTwo');
    }

    get deleteAddresslink() {
        return cy.get('#ya-myab-address-delete-btn-1');
    }


    get deleteAddress() {

        return cy.get('#deleteAddressModal-1-submit-btn-announce');




    }


}

export default AddressPage