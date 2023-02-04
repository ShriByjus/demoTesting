/// <reference types ='cypress'/>
var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
var log = console.log

describe.skip('assertions practise', () => {
    before(() => {

    })
    beforeEach(() => {
        console.log('before each')
    })
    let name = "deepa"

    it.skip('should', () => {
        // should.exist
        // should.not.exist
        // should.equal
        // should.not.equal
        // should.Throw
        // should.not.Throw

        name.should.have.lengthOf(5);
        name.should.equal('deepa')
        log('success')
    })

    it.skip('expect', () => {
        expect(name).equal('deepa')
        expect(name).to.have.lengthOf(5)
    })

    it('assert', () => {
        assert.equal(name, 'deepa')
        assert.lengthOf(name, 5)
    })

}
    // cy.get('ant-alert-description').invoke('text').should('contain', 'SO-')
    //             cy.wrap('foobar').should(''contain', 'foo') // passes
    // cy.wrap('foobar').should('include', 'foo') // passes

    // cy.get('button').invoke('text').should('contain', 'foo') // passes
    // cy.get('button').invoke('text').should('include', 'foo') // passes
    //.should('match','/*Green*/')
)
describe.skip('assertions practise2', () => {
    let name = "deepa"

    it.skip('should2', () => {
        // should.exist
        // should.not.exist
        // should.equal
        // should.not.equal
        // should.Throw
        // should.not.Throw

        name.should.have.lengthOf(5);
        name.should.equal('deepa')
        log('success')
    })
    it.skip('expect2', () => {
        expect(name).equal('deepa')
        expect(name).to.have.lengthOf(5)
    })

    it.skip('assert2', () => {
        assert.equal(name, 'deepa')
        assert.lengthOf(name, 5)
    })

}
)
after(() => {

})