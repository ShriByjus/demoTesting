class WishlistPage {
  getDismiss() {
    return cy.get(".woocommerce-store-notice__dismiss-link");
  }
  getCheckProductInWishlist() {
    return cy.get(".wishlist-in-stock");
  }
  getSelectOption() {
    return cy.get("a[class*='button add_to_cart_button add_to_cart alt']");
  }
}

export default WishlistPage;
