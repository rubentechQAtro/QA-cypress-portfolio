///<reference types="cypress"/> 
import 'cypress-plugin-tab';

describe("ejercicio de asserts", () => { 

  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Demo asserts con scroll suave", () => {
    cy.visit("https://demoqa.com/automation-practice-form");

   
    cy.title().should("eq", "DEMOQA");    
    cy.wait(1000);

    // Hacer scroll hasta el input de nombre
    cy.get('#firstName').scrollIntoView();
    cy.wait(800); // Esperar para simular scroll más humano

    
    cy.get('#firstName').should("be.visible").type("Raul",{delay:100})
    cy.get('#lastName').should("be.visible").type("Rojas", {delay: 100})
    cy.get('#userEmail').should("be.enabled").type("correoelectronico@correo.com", {delay: 100})

  });

});

