beforeEach(function () {
  cy.fixture("demo2checkoutdetails").then(function (data) {
    this.data = data;
  });
});
