describe("comienzo curso de Cypress seccion1", () => { 

    beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);

    })

    

    it ("Mi primer test - Hola mundo", () => {
        cy.log("Hola mundo")
        cy.wait(4000)

    })

    it("segundo test - campo nombre", () => {

    cy.visit("https://testingqarvn.com.es/datos-personales/");
    
    cy.wait(4000)
    
})



})

