// import { plugins } from 'cypress-social-logins'
// const { GoogleSocialLogin } = plugins

// export default (on, config) => {
//   on('task', {
//     GoogleSocialLogin: GoogleSocialLogin
//   })
// }
describe.skip('My First Cypress Test', function () {
  it('practive project', function () {
    //Visit the Demo QA Website https://rahulshettyacademy.com/seleniumPractise
    cy.clearCookie('react').clearCookie('angular');
    console.log("Entered test case")
    //cy.visit('https://www.google.com', { timeout: 100000 })
    cy.request("https://dev-nucleus.byjusorders.com/nucleusapi/usermanagement/employee/getUserProfile")

  })
})
