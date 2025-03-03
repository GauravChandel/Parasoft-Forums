/// <reference types="cypress" />

import { signin } from '../Locators/signin'
const signinPage = new signin()

import user from '../fixtures/signin.json'

describe('sign in the application', () => {
    before(() => {
        signinPage.geturl()
        signinPage.login(user.username, user.password)
        cy.url().should('eq', 'https://forums.parasoft.com/')
    })

    it('Open the Discussions page', () => {
        cy.get('.linkContentClassName').eq(0).click()
        cy.get('h1.heading').invoke('text').should('eq', 'Community DiscussionsRecent Discussions');
        cy.get('.searchBar-valueContainer').type('DTP')
        cy.get('.suggestedTextInput-title').contains('Parasoft DTP not receiving C++ coverage metrics').click()
        cy.go('back')
    })
})



