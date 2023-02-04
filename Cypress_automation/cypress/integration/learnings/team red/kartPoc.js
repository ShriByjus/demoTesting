const faker = require('faker');
describe.skip('kartAutomation', function () {
  it('byjus kart', function () {
    cy.visit(`https://dev-middleware.byjusorders.com/?directSalesBy=%20&appointmentBookedBy=Meghana%20Negi&studentName=Shubham%20singh&studentEmail=sonuthegreatest25@gmail.com&studentMobile=+91-7922178364&accessKey=u$r345dfdff0767605294d91b80ac914f62&secretKey=b56b69cd8b4c4be11fbac035bb5b17f4198059f0&accountNumber=24692&prospectId=q${faker.random.number(100000)}&typeOfSales=DS%20Sales&SourceCampaign=%20&SourceOfLead=%20&LeadSource=%20&SourceMedium=%20&SourceCampaignId=%20&UTMSource=%20&CampaignName=%20&homeAddress=&userEmail=praz@byjus.com`)

    // it('you find Punch a New Order button, then click on it validate (go to If)', ()=> {
    //   cy.title().should('eq', 'Punch a New Order')
    //   cy.get('body').then((body) => {
    //   if(body.find('.m-2.btn.btn-success').length > 0) {
    //     cy.get('.m-2.btn.btn-success').click()       
    //   }
    //   else {
    //     cy.get('.m-2.btn.btn-warning').click()
    //   }
    //    }) 
    //    cy.title().should('eq', 'Resume')
    //   })

    // it('you do not find Punch a New Order button, then click on it validate (go to Else)', ()=> {
    //   cy.title().should('eq', 'Resume')
    //   cy.get('body').then((body) => {
    //   if(body.find('.m-2.btn.btn-warning').length > 0) {
    //     cy.get('.m-2.btn.btn-warning').click()       
    //   }
    //   else {
    //     cy.get('.m-2.btn.btn-success').click()
    //   }
    //    }) 
    //    cy.title().should('eq', 'Punch a New Order')
    //   })
    cy.get('.m-2.btn.btn-success').click()
    cy.get('#directSalesBy').type('pooja.a@byjus.com');
    cy.get('#parentName').type('test parent')
    cy.get('#studentName').type('{selectall}{backspace}')
    cy.get('#parentMobileNo').type('{selectall}{backspace}')
    cy.get('#email').type('{selectall}{backspace}')
    cy.get('#studentName').type('dummy son')
    cy.get('#parentMobileNo').type('2870982213')
    cy.get('#email').type('test386873@gmail.com')
    cy.wait(2000)
    cy.get('.next-btn.btn.btn-info').click({ force: true })
    cy.get('#addressLine1').type('dummyaddress')
    cy.get('#addressLine2').type('dummy lane')
    cy.get('.ant-input-number-input').type('452001')
    cy.wait(2000)
    cy.get('.next-btn.btn.btn-info').click()
    cy.contains('Next').click()


    //  cy.get('#productCombination').type('Byjus Classes')
    //  cy.get('.ant-radio-group-solid > :nth-child(2) > :nth-child(2)').each(($e1, index, $list) =>
    //  {
    //    if($e1.text()=== "combo"){
    //      $e1.click()
    //    }
    //  })
    cy.get('#productCombination').type('Byjus Classes')
    cy.get('#board').type('CBSE')  // Board to be selected from list of dropdown

    // invoking the hidden element
    cy.get('#initialClass').invoke('show')
    cy.contains('5').click()

    cy.get('#validity').type('2022 Annual').click({ force: true })

    cy.get('#course').invoke('show')
    cy.contains('Grade_Batch1_2021-22').click()

    cy.get('.fa fa-clock-o').click({ force: true })
    cy.get('.ant-radio.ant-radio-checked').check({ force: true })
    cy.get('.ant-btn.fetch-btn.ant-btn-lg').click({ force: true })
    cy.get('#spinbutton').type('30000')
    cy.wait(2000)
    cy.get('.next-btn.btn.btn-info').click({ force: true })
    cy.contains('Next').click()


  })
});