/// <reference types="cypress" />
require('cypress-plugin-tab');

Cypress.on('uncaught:exception', (err, runnable) => {
  // Previene que errores JS detengan la prueba
  return false;
});

describe("Reto", () => {

  it("Primer reto", () => {
    // Paso 1: Visitar la página
    cy.visit("https://demoqa.com/webtables");

    // Paso 2: Validar título de la página
    cy.title().should("include", "ToolsQA");
    cy.wait(1500);

    // Paso 3: Buscar un nombre en la tabla
    cy.get('#searchBox')
      .should("be.visible")
      .type("cierra");

    // Paso 4: Hacer clic en 'Add'
    cy.get('#addNewRecordButton')
      .should("be.visible")
      .click();

    // Paso 5 (opcional): Validar que el formulario emergente está visible (personalmentre prefiero trabajar asi).
    cy.get('#firstName')
      .should("be.visible");
  });

});


