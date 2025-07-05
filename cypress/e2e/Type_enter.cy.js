 describe("Función Type - búsqueda en Google", () => {
  
  // Ignorar errores de JS del sitio (útil con Google)
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("Escribe en el buscador y presiona Enter", () => {
    // Visita Google
    cy.visit("https://www.google.com/");

    // Verifica el título
    cy.title().should("eq", "Google");
    cy.wait(1500);

    // Escribe en la barra de búsqueda y presiona Enter
    cy.get("textarea[name='q']")
      .should("be.visible")
      .type("cypress testing {enter}");

    // Espera a que cargue la página de resultados
    cy.wait(2000);

    // Busca un resultado que contenga un texto relacionado
    cy.contains("Cypress: JavaScript End to End Testing Framework")
      .should("be.visible")
      .click();
  });

});
