/// <reference types="cypress" />
describe.skip('Amazon login in', function () {

    //Visit the Amazon Website https://www.amazon.in
    before(function () {
        cy.fixture('users').then(function (data) {
            this.data = data
        })
    })

    it.skip('login', function () {
        console.log('Amazon login functionality');
        cy.clearCookie('react').clearCookie('angular');
        console.log("Entered test case")
        cy.visit('https://www.amazon.in/', { timeout: 100000 });
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#authportal-main-section').click();
        cy.get('#ap_email').type(this.data.email);
        cy.get('#ap_email').type('{rightarrow}{leftarrow}');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type(this.data.password);
        cy.get('#signInSubmit').click();
        console.log('Logged in successfully');
        //.should('have.text', 'Column content')
        //.should('contain', 'Column content')
        //.should('have.html', 'Column content')
        // to match text content against a regular expression
        // first need to invoke jQuery method text()
        // and then match using regular expression
        //.invoke('text')
        //a better way to check element's text content against a regular expression
        // is to use "cy.contains"
        // https://on.cypress.io/contains
        //cy.get('.assertion-table')
        //.find('tbody tr:last')
        // finds first  element with text content matching regular expression
        //.contains('td', /column content/i)
        //.should('be.visible')
        //.should('match', /column content/i)

        //Validating whether the element does have or doesn’t have the mentioned class. E.g.:
        // cy.get('form').find('input').should('not.have.class', 'disabled')
        //cy.get('form').find('input').should('have.class', 'enabled')

        // Value: Validate element contains a specific value. E.g.:
        // cy.get('textarea').should('have.value', 'ToolsQA')


        // Text Content: Validating element to have a specified text. E.g.:
        // cy.get('a').parent('span').should('contain', 'ToolsQA')
        // cy.get('a').parent('span').should('not.contain', 'ToolsQA')
        // 

        // Visibility: Validating whether the element is visible or not. E.g.:
        // cy.get('button').should('be.visible')


        // Existence: Validating whether the element exists in the DOM. E.g.:
        // cy.get('#loader').should('not.exist')

        // State: Validate state for radio or checkboxes. E.g.:
        // cy.get(':radio').should('be.checked')


        // CSS: Validate CSS characteristics of the element. E.g.:
        // cy.get('.loader').should('have.css', 'text-highlight')

        // cy.get('#accordion').should('not.have.css', 'display', 'none')


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.hm-icon').click();
        cy.get('.hmenu-visible > :nth-child(2) > .hmenu-item').click();
        cy.get('#zg_browseRoot > ul > :nth-child(1) > a').click();
        /* ==== End Cypress Studio ==== */
    })
})

