///<reference types="cypress"/>
import 'cypress-plugin-tab'

describe('Ejemplo función tab', () => {
  it('Type con tab', () => {
    
    cy.visit("https://www.toolsqa.com/selenium-training?q=banner#enroll-form")
    cy.title().should("include", "Tools QA")
    cy.wait(1000)

    // Asegurarse de que el input esté visible
    cy.get('#first-name').scrollIntoView().should('be.visible')
    cy.wait(800) // Simula un scroll humano

    // Empieza a llenar el formulario con .tab()
    cy.get('#first-name').type("Raul", {delay: 100}).tab()
      .type("Rojas", {delay: 100}).tab()
      .type("ASD@correo.com", {delay: 100}).tab()
      .type("123 123 123", {delay: 100}).tab()
    
    cy.get('#country').select("Peru").tab()
      .type("Lima", {delay: 100}).tab()

    cy.get('#message').type("Este es un ejercicio para llenar formularios de inscripción automatizado", {delay: 100}).tab()
      .type("bsaZ", {delay: 100}).tab()

    // Click en el botón final
    cy.get('#enroll-form > .btn').click()

  })
})
