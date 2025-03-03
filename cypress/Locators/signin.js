
 export class signin{
    weblocators = {
        username: '#Form_Email',
        password: '#Form_Password',
        btnsignin: '#Form_SignIn'
    }

    geturl(){
        cy.visit('https://forums.parasoft.com/')
    }

    login(username,password){
        cy.contains("Sign In").click()
        cy.get(this.weblocators.username).type(username)
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.btnsignin).click()
    }


 }