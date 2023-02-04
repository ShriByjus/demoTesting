class HomePage {
    getloginNavigation() {
        return cy.get('#nav-link-accountList-nav-line-1');
    }

    //#authportal-main-section
    getloginSignIn() {
        return cy.get('#authportal-main-section');
    }
    getEmail(){
        return cy.get('#ap_email');
    }
    getPassword(){
        return cy.get('#ap_password');
    }
    getLoginUserName(){
        return cy.get('#username');
    }
    getSigninButton() {
        return cy.get('#signInSubmit');
    }
    }
    export default HomePage