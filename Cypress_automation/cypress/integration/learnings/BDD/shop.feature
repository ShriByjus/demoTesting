Feature: End to End shop validation

   application Regression

   Scenario: Product delivery
   Given I open the site
   When I add items to the cart
   And I enter the address details of customer
   Then click on checkout and verify checkout 

   Scenario: Product delivery from whilshlist
   Given I open the site
   When I add items whishlist
   And I add the items to the cart
   And I enter the address details of customer
   Then click on checkout and verify checkout 