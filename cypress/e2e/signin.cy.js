/// <reference types="cypress" />

import { signin } from '../Locators/signin'
const signinPage = new signin()

import user from '../fixtures/signin.json'

describe('Parasoft-Forums', () => {
  it('Logs in successfully', () => {
    signinPage.geturl()
    signinPage.login(user.username, user.password)
    cy.wait(2000)
    cy.contains('Parasoft Forums').should('be.visible')
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  if (err.message.includes("Cannot set properties of null")) {
    return false;
  }
});

