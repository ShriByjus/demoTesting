import HomePage from "../pageObjects/usercheckoutdetails";
import Wishlist from "../pageObjects/wishlist";
describe.skip("Demopoc2", function () {
  beforeEach(function () {
    cy.fixture("demo2checkoutdetails").then(function (data) {
      this.data = data;
    });
  });

  it("Adding item to cart and checkout", function () {
    const homepage = new HomePage();
    cy.visit("https://shop.demoqa.com/");
    homepage.getClickSearch().click();
    homepage.getSearchBox().type("T SHIRT").type("{enter}");

    cy.get(".post-1485 > .noo-product-inner").click();
    homepage.getProductTitle().then(($el) => {
      cy.expect($el).to.have.text("black lux graphic t-shirt");
    });
    homepage.getColorAttribute().select("Black").should("have.value", "black");
    homepage.getSizeAttribute().select("32").should("have.value", "32");
    homepage.getIncreaseQty().click();
    homepage.getDecreaseQty().click();
    homepage.getAddtoCart().click();
    cy.get(".woocommerce-message > .button").click();
    homepage.getProceedtoCheckout().click();
    homepage.getFirstName().type(this.data.Firstname);
    homepage.getLastName().type(this.data.LastName);
    homepage.getAddress().type(this.data.Address);
    homepage.getCity().type(this.data.City);
    homepage.getPincode().type(this.data.Pincode);
    homepage.getPhoneNo().type(this.data.PhoneNo);
    homepage.getEmail().type(this.data.Email);
    cy.get("#terms").check();
    homepage.getPlaceOrder().click();
    cy.url().should("includes", "checkout");
  });

  it("Adding item from whishlist and checkout", function () {
    const homepage = new HomePage();
    const wishlistpage = new Wishlist();
    cy.get(".home > span").click();
    homepage.getClickSearch().click();
    homepage.getSearchBox().type("JEANS").type("{enter}");
    cy.get(
      ".post-1406 > .noo-product-inner > .noo-product-thumbnail > .noo-product-meta > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist"
    ).click();
    wishlistpage.getDismiss().click();
    cy.get("ul li a[href*='https://shop.demoqa.com/wishlist/']").click();
    wishlistpage.getCheckProductInWishlist().contains("In Stock");
    wishlistpage.getSelectOption().click();
    homepage.getColorAttribute().select("Blue").should("have.value", "blue");
    homepage.getSizeAttribute().select("36").should("have.value", "36");
    homepage.getAddtoCart().click();
    cy.get(".woocommerce-message > .button").click();
    homepage.getProceedtoCheckout().click();

    homepage.getFirstName().type(this.data.Firstname);
    homepage.getLastName().type(this.data.LastName);
    homepage.getAddress().type(this.data.Address);
    homepage.getCity().type(this.data.City);
    homepage.getPincode().type(this.data.Pincode);
    homepage.getPhoneNo().type(this.data.PhoneNo);
    homepage.getEmail().type(this.data.Email);
    cy.get("#terms").check();
    homepage.getPlaceOrder().click();
    cy.url().should("includes", "checkout");
  });
});
