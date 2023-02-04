/// <reference types ='cypress'/>
var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
var log = console.log

describe.skip('Hooks practise', () => {
    beforeEach(() => {
        cy.visit("https://google.com")
    })
    // beforeEach(() => {
    //     console.log('before each')
    // })
    afterEach(() => {
        cy.visit("https://facebook.com")
    })

    let name = "deepa"

    it('first test', () => {



    })

    it('second test ', () => {

    })

    it('third test', () => {

    })

}
)
