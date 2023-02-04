///<reference types="cypress" />

describe.skip('rahulShetty Acedamy practice', function () {

    it('use checkbox and dropdowns', function () {
        cy.visit("http://qaclickacademy.com/practice.php");

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    })
    it('Handle static dropdowns', function () {
        cy.get('Select').select('option1').should('have.value', 'option1')
        //Dynamic Dropdowns
        cy.get('#autocomplete').type('aus');
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
            if ($el.text() === "Australia") {
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'Australia');
    })
    it('Handle the visible and Invisible module', function () {
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    })
    it('Handle the RadioButtons', function () {
        cy.get('[value="radio1"]').check().should('be.checked');
    })
    it('Alert Messages', function () {
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        //Mocha
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
    it('Handle the Child page', function () {
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back');
    })
})