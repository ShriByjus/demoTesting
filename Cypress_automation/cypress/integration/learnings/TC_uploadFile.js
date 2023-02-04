/// <reference types ='cypress'/>


describe.skip('upload file', () => {

    it.skip('upload a file in w3 schools', () => {

        cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp')
        const fileimage = 'uploadimage.png'
        cy.get('[type="file"]').attachFile(fileimage)
    })

    it.skip('download a file', () => {
        //cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt', 'cypress/fixtures/Download', 'test1.txt');
        cy.downloadFile('https://www.gstatic.com/webp/gallery3/1.png', 'mydownloads', 'gallery.png');
    })
})