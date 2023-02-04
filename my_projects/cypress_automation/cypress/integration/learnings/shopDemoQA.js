///<reference types = "Cypress" />

describe.skip('It is my Program', function () {


    it('Register to aplication', function () {
        cy.visit("https://shop.demoqa.com/my-account/");

        cy.get('#reg_username').type('SindhuB13');
        cy.wait(2000);
        cy.get('#reg_email').type('sindhub13@yahoo.com');
        cy.get('#reg_password').type('Wanderlust@13');
        cy.wait(2000);
        cy.get('.woocommerce-Button').click();
        cy.wait(2000);
    })

    it('Login to ShopDemo website', function () {
        //cy.get('.login message').contains("Your session has expired because it has been over 60 minutes since your last login. Please log back in to continue.");
        cy.get('#user_login').type('sindhub13@yahoo.com');
        cy.wait(2000);
        cy.get('#user_pass').type(`Wanderlust@13{enter}`);
        //cy.get('#user_pass').type('Wanderlust@12');
        cy.wait(2000);
        cy.get('#wp-submit').click();


    })
})