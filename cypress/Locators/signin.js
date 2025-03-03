export class signin {
    weblocators = {
        //singin
        username: '#Form_Email',
        password: '#Form_Password',
        btnsignin: '#Form_SignIn',

        //logout
        usericon: '.headerDropDown-user > .css-169znmz-userPhotoStyles-photo',
        signout: 'Sign Out'
    }

    geturl() {
        cy.visit('https://forums.parasoft.com/')
        cy.contains("Sign In").click()
    }

    login(username, password) {
        cy.get(this.weblocators.username).type(username)
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.btnsignin).click()
    }

    logout() {
        cy.get(this.weblocators.usericon).click()
        cy.contains(this.weblocators.signout).click()
    }
}
