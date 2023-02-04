///<reference types="cypress" />

describe.skip('rahulShetty Acedamy practice', function () {

    it('use checkbox and dropdowns', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text();
                    expect(priceText).to.equal('25');

                })
            }

        })
    })
    it('Mouse Hover', function () {
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
    it('child window using visit', function () {
        cy.get('#opentab').then(function (e1) {
            const url = e1.prop('href');
            cy.log(url);
            cy.visit(url)
            //https://rahulshettyacademy.com/selenium -subdomain
        })
    })

})