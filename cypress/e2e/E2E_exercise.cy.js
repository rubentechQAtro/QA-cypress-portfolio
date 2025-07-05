describe("Test suite - conjunto de pruebas", () => {

  beforeEach(() => {
    cy.visit('http://automationexercise.com');
    cy.get('.col-sm-9').should("be.visible");
    cy.title().should('include', 'Automation Exercise');
  });

  it("Validar página de inicio y formulario de registro visible", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click(); // Signup/Login
    cy.get('.signup-form > h2').should("be.visible");
  });

  it("Login exitoso con correo y contraseña correctos", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click(); // Signup/Login
    cy.get('[data-qa="login-email"]').type("d123ro@gmail.com", { delay: 200 });
    cy.get('[data-qa="login-password"]').type("13456789", { delay: 200 });
    cy.get('[data-qa="login-button"]').click();

    // Verificar que el usuario esté logueado
    cy.get('.shop-menu').contains('Logged in as').should("be.visible");

    // Logout
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click(); // Logout
    cy.get('.signup-form > h2').should("be.visible"); // De vuelta en login
  });

  it("Login fallido con correo y contraseña incorrectos", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click(); // Signup/Login
    cy.get('[data-qa="login-email"]').type("incorrecto@mail.com", { delay: 200 });
    cy.get('[data-qa="login-password"]').type("wrongpassword123456789", { delay: 200 });
    cy.get('[data-qa="login-button"]').click();

    cy.get('.login-form > form > p').should("contain", "Your email or password is incorrect!");
  });

});
