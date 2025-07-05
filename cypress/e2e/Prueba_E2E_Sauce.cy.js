describe("SauceDemo - Test de login", () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.title().should('include', 'Swag Labs');
    cy.wait(1500)
  });

  it("Login exitoso con usuario estándar", () => {
    cy.get('[data-test="username"]').type("visual_user",{delay:100});
    cy.get('[data-test="password"]').type('secret_sauce',{delay:100});
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');

    // Logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.wait(1500)
    cy.url().should('include', 'saucedemo.com');
  });

  it("Login fallido con credenciales incorrectas", () => {
    cy.get('[data-test="username"]').type('wrong_user',{delay:100});
    cy.get('[data-test="password"]').type('wrong_pass',{delay:100});
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});
