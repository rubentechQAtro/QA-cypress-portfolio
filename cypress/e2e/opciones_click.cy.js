/// <reference types="cypress" />

describe("Opciones de click", () => {

  it("Click sencillo", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should("eq", "OrangeHRM");

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type("Admin", { delay: 100 });

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type("admin123", { delay: 100 });

    cy.get('.oxd-button').should("be.visible").click();

    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
      .should("be.visible").click();

    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
      .should("be.visible").click();
  });

  it("Click con force: true", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should("eq", "OrangeHRM");

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type("Admin", { delay: 100 });

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type("admin123", { delay: 100 });

    cy.get('.oxd-button').should("be.visible").click();

    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
      .click({ force: true });

    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item')
      .click({ force: true });
  });

  it.only("Click por coordenadas", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should("eq", "OrangeHRM");

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type("Admin", { delay: 100 });

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .type("admin123", { delay: 100 });

    cy.get('.oxd-button').should("be.visible").click();

    // Ejemplo de clic en coordenadas absolutas (x, y)
    cy.get('body').click(200, 300); // Esto es solo de ejemplo; puede necesitar ajustes según la pantalla

    // Puedes ubicar un elemento y hacer click en coordenadas relativas a ese elemento:
    // cy.get('#elemento').click(10, 10) // 10px a la derecha y abajo desde la esquina superior izquierda
  });

});
