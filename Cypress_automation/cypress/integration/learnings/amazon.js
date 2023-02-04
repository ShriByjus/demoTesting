///<reference types="Cypress" />

describe.skip('Amazon Website', function () {

    it('Login with valid Credentials', function () {

        cy.visit("https://www.amazon.in")
        cy.get('#twotabsearchtextbox').type('mobiles')
        cy.get('#nav-link-accountList-nav-line-1').click()
        cy.get('#ap_email').type('9535195214')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('Wanderlust@21')
        cy.get('#signInSubmit').click()
        cy.wait(3000);

    })
    it('Login with Invalid Credentials', function () {

        cy.visit("https://www.amazon.in/")
        //cy.get('#twotabsearchtextbox').type('mobiles')
        cy.get('#nav-link-accountList-nav-line-1').click()
        cy.get('#ap_email').type('sindhu.balaji21@gmail.com')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('Test@21')
        cy.get('#signInSubmit').click()
        cy.get('#auth-warning-message-box').then(function (alertMessage) {
            cy.log(alertMessage.text())
        })
    })

    it('Search for the products add to cart', function () {
        cy.get('#twotabsearchtextbox').type('Books');
        cy.get('#nav-search-submit-button').click();
        cy.wait(2000);
        cy.get('#reviewsRefinements').contains('4 Stars & Up').click();
        cy.wait(3000);
        cy.get('#filters').contains('Last 30 days').click();
        cy.wait(2000);
        //cy.get('.a-link-normal a-text-normal').invoke('removeAttr', 'target').click();
        cy.visit("https://www.amazon.in/Noise-Daniel-Kahneman/dp/0008309000/ref=sr_1_1")
        cy.get('#add-to-cart-button').click();
        cy.get('#hlb-view-cart').click();

    })
    it('Use the dropdown items', function () {
        cy.get('#twotabsearchtextbox').type('Mobiles');
        cy.get('#nav-search-submit-button').click();
        cy.wait(2000);
        //Static Dropdowns
        // cy.get('select').select('Featured').should('have.value', 'Featured');
        //Dynamic Dropdowns
        cy.get('#a-autoid-0-announce').click();
        cy.wait(2000);
        cy.get('#s-result-sort-select_4').contains('Newest Arrivals').click();
        cy.get('.a-dropdown-link').click().each(($el, index, $list) => {
            if ($el.text() === "Newest Arrivals") {
                $el.c
            }

        })

    })


})


