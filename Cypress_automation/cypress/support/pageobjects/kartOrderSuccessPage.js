class kartOrderSuccessPage {

    get orderStatusField() {
        return cy.get('.ant-alert-description > :nth-child(2)');
    }

    get messageField() {
        return cy.get('.ant-alert-description> :nth-child(4) > span');
    }

    get fetchStatusButton() {
        return cy.get('.ant-btn');
    }

    get orderId() {
        return cy.get('.ant-alert-description > :nth-child(3)');
    }
    get validateOrderType(){
        return cy.get('.ant-col > :nth-child(1) > strong');
    }
    get valiedateOrderDetailPage(){
        return cy.get('.ant-alert-description > :nth-child(1)');
    }
    get succesMessage(){
        return cy.get(':nth-child(4) > span');
    }
    get validateFetchStatus(){
        return cy.get('.ant-message-custom-content > span');
    }
    get validateOrderDecsionPage(){
        return cy.get('.card-header');
    }
  

}

export default kartOrderSuccessPage