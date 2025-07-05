///<reference types="cypress"/>
import 'cypress-plugin-tab'

describe('ejemplo funtion tab', () => {
  it('type con tab', () => {
    
 cy.visit("https://www.toolsqa.com/selenium-training?q=banner#enroll-form")
    cy.title().should("include","Tools QA")
    cy.wait(1000)
    cy.get('#first-name').scrollIntoView();
    cy.wait(800); // Esperar para simular scroll más humano

    cy.get().type("Raul" ,{delay:1000}).tab().type("Rojas",{delay:1000}).tab().type("ASD@correo.com",).tab().
    type("123 123 123",{delay:100}).tab()
    cy.get('#country').select("Peru").tab().type("Lima").tab()
    cy.get('#message').type(" Este es un ejercicio para llenar formularios de inscripcion automatizado", {delay:100}).tab()
    .type("bsaZ").tab()
    cy.get('#enroll-form > .btn').click()

 
 
 
  })


})