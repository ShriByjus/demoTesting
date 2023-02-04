// import HomePage from "../../../../support/pageObjects/usercheckoutdetails";
// import Wishlist from "../../../../support/pageObjects/wishlist";
// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const homepage = new HomePage();
// const wishlistpage = new Wishlist();
// Given("I open the site", function () {
//   cy.visit(Cypress.env("url"));
// });

// When("I add items to the cart", function () {
//   homepage.getClickSearch().click();
//   homepage.getSearchBox().type("T SHIRT").type("{enter}");

//   cy.get(".post-1485 > .noo-product-inner").click();
//   homepage.getProductTitle().then(($el) => {
//     cy.expect($el).to.have.text("black lux graphic t-shirt");
//   });
//   homepage.getColorAttribute().select("Black").should("have.value", "black");
//   homepage.getSizeAttribute().select("32").should("have.value", "32");
//   homepage.getIncreaseQty().click();
//   homepage.getDecreaseQty().click();
//   homepage.getAddtoCart().click();
//   cy.get(".woocommerce-message > .button").click();
//   homepage.getProceedtoCheckout().click();
// });

// And("I enter the address details of customer", function () {
//   homepage.getFirstName().type(this.data.Firstname);
//   homepage.getLastName().type(this.data.LastName);
//   homepage.getAddress().type(this.data.Address);
//   homepage.getCity().type(this.data.City);
//   homepage.getPincode().type(this.data.Pincode);
//   homepage.getPhoneNo().type(this.data.PhoneNo);
//   homepage.getEmail().type(this.data.Email);
// });

// Then("click on checkout and verify checkout", function () {
//   cy.get("#terms").check();
//   homepage.getPlaceOrder().click();
//   cy.url().should("includes", "checkout");
// });

// When("I add items whishlist", function () {
//   // cy.get(".home > span").click();
//   homepage.getClickSearch().click();
//   homepage.getSearchBox().type("JEANS").type("{enter}");
//   // cy.get(
//   //   ".post-1406 > .noo-product-inner > .noo-product-thumbnail > .noo-product-meta > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist"
//   // ).click();
//   cy.wait(6000);
//   cy.get(
//     ".post-1406 > .noo-product-inner > .noo-product-thumbnail > .noo-product-meta > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button"
//   ).click();
//   wishlistpage.getDismiss().click();
//   cy.get("ul li a[href*='https://shop.demoqa.com/wishlist/']").click();
//   wishlistpage.getCheckProductInWishlist().contains("In Stock");
//   wishlistpage.getSelectOption().click();
// });

// And("I add the items to the cart", function () {
//   homepage.getColorAttribute().select("Blue").should("have.value", "blue");
//   homepage.getSizeAttribute().select("36").should("have.value", "36");
//   homepage.getAddtoCart().click();
//   cy.get(".woocommerce-message > .button").click();
//   homepage.getProceedtoCheckout().click();
// });
