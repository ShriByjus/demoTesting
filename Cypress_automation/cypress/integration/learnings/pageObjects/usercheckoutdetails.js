class HomePage {
  getClickSearch() {
    return cy.get(".noo-search");
  }

  getSearchBox() {
    return cy.get("input[type='search']");
  }
  getProductTitle() {
    return cy.get(".product_title");
  }
  getColorAttribute() {
    return cy.get("#pa_color");
  }
  getSizeAttribute() {
    return cy.get("#pa_size");
  }
  getIncreaseQty() {
    return cy.get(".qty-increase");
  }
  getDecreaseQty() {
    return cy.get(".qty-decrease");
  }
  getAddtoCart() {
    return cy.get(".single_add_to_cart_button");
  }
  getProceedtoCheckout() {
    return cy.get("div[class*='wc-proceed-to-checkout']");
  }
  getFirstName() {
    return cy.get("#billing_first_name");
  }
  getLastName() {
    return cy.get("#billing_last_name");
  }
  getAddress() {
    return cy.get("input[id='billing_address_1']");
  }
  getCity() {
    return cy.get("input[id='billing_city']");
  }
  getPincode() {
    return cy.get("input[id='billing_postcode']");
  }
  getPhoneNo() {
    return cy.get("input[id='billing_phone']");
  }
  getEmail() {
    return cy.get("input[id='billing_email']");
  }
  getPlaceOrder() {
    return cy.get("#place_order");
  }
}

export default HomePage;
