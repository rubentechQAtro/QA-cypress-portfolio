describe('Template spec - Scroll con PageDown', () => {
  it("Simula tecla PageDown y valida título", () => {

    cy.visit("https://www.toolsqa.com/selenium-training?q=banner#enroll-form");

    // Validar el título correctamente
    cy.title().should("include", "Tools QA");
    cy.wait(1000);

    // Simular PageDown en el body para hacer scroll
    cy.get('body').type("{pagedown}");
    cy.wait(3000);
  });
});
