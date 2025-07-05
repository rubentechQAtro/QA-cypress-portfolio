 describe("Sección 1 - Validando título y navegación en DemoQA", () => {

  it("Validar título y navegación a sección Elements", () => {
    // Paso 1: Visitar página principal
    cy.visit("https://demoqa.com");

    // Paso 2: Validar título de la página
    cy.title().should("include", "ToolsQA");
    cy.log("Título validado correctamente");

    // Paso 3: Validar visibilidad y hacer clic en el bloque 'Elements'
    cy.get('.category-cards > :nth-child(1)')
      .should("be.visible")
      .click();
    cy.log("Se hizo clic en la sección Elements");

    // Paso 4: Validar que estamos en la URL correcta y la cabecera sea visible
    cy.url().should("include", "/elements");
    cy.get('.main-header')
      .should("contain.text", "Elements");
    cy.log("Página Elements cargada correctamente");

    // Paso 5: Hacer clic en 'Text Box' y validar formulario
    cy.contains('Text Box')
      .should("be.visible")
      .click();
    cy.get('#userName')
      .should("be.visible");
    cy.log("Formulario Text Box visible y listo para usar");
  });

});
