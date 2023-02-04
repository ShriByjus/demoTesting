{
  /* <reference types="cypress" />; */
}
import "cypress-iframe";
describe.skip("Demo", function () {
  it("checkboxes, dropdown handling", function () {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get("input[value=radio1]")
      .check()
      .should("be.checked")
      .and("have.value", "radio1");

    cy.get("#autocomplete").type("Ind");
    cy.get(".ui-menu-item div").each(($el, index, list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");

    cy.get("select").select("option3").should("have.value", "option3");
    cy.get("input[type='checkbox']")
      .check(["option3", "option2", "option1"])
      .should("be.checked")
      .and("have.value", "option1", "option2", "option3");
    cy.get("#checkBoxOption2").uncheck().should("not.be.checked");
  });

  it("tab and alert handling", function () {
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.wait(5000);
    cy.url().should("includes", "rahulshettyacademy");
    cy.go("back");

    cy.get("#name").should("be.visible").type("jyoti");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello jyoti, share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });

  it("Web Table Example", function () {
    cy.get(":nth-child(5) > .left-align > fieldset > legend").then(($el) => {
      cy.expect($el).to.have.text("Web Table Example");
    });

    cy.get("fieldset > #product ").within(() => {
      // all searches are automatically rooted to the found tr element
      cy.get("td").eq(0).contains("Rahul Shetty");
      cy.get("td")
        .eq(1)
        .contains(
          "Selenium Webdriver with Java Basics + Advanced + Interview Guide"
        );
      cy.get("td").eq(2).contains("30");

      cy.get("tr").eq(0).contains("Course");
      cy.get("tr")
        .eq(1)
        .contains(
          "Selenium Webdriver with Java Basics + Advanced + Interview Guide"
        );
      cy.get("tr")
        .eq(2)
        .contains("Learn SQL in Practical + Database Testing from Scratch");
      cy.get("tr")
        .eq(3)
        .contains("Appium (Selenium) - Mobile Automation Testing from Scratch");
    });
  });

  it("Elements Displayed Example", () => {
    // initially element should display
    cy.get("#name").should("be.visible");

    //After hiding element should not be displayed
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");

    //After enabling element should be dispalyed
    cy.get("#show-textbox").click();
    cy.get("#name").should("be.visible");
  });

  it("Mouse Hover Example", () => {
    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.contains("Reload").click({ force: true });
    cy.url().should("not.includes", "top");
  });

  it("Iframe Example", () => {
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();

    cy.iframe().find("span[class*='h-7']").eq(0).click();
    cy.iframe().find("#name").type("test");
    cy.iframe().find("#email").type("abc@gmail.com");
    cy.iframe().find("#mobile").type("8977654321");
    cy.iframe().find("input[value='bronze']").check().should("be.checked");
    cy.iframe().find("#agreeTerms").check().should("be.checked");
    cy.iframe().find("#form-submit").click();
  });
});
