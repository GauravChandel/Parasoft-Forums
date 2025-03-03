/// <reference types="cypress" />

import { signin } from '../Locators/signin'
const signinPage = new signin()

import user from '../fixtures/signin.json'

describe('Parasoft-Forums', () => {

  beforeEach(() => {
    signinPage.geturl()
  })

  it('Login / Logs out successfully', () => {
    signinPage.geturl()
    signinPage.login(user.username, user.password)
    cy.wait(2000)
    cy.contains('Parasoft Forums').should('be.visible')
    signinPage.logout()
    cy.wait(2000)
    cy.url().should('eq', 'https://forums.parasoft.com/')
  })

})
