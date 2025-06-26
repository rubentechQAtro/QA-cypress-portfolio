describe("Test suite - conjunto de pruebas", () => {

  
  beforeEach(() => {
    cy.visit('http://automationexercise.com');
    cy.get('.col-sm-9').should("be.visible");
    cy.title().should('include', 'Automation Exercise')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("be.visible")
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  cy.get('b').should("be.visible").click()
  
});
 
  it("Validar pagina de inicio", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should("be.visible")
    
  cy.get('[data-qa="login-email"]').type("d123ro@gmail.com",{delay:200})//
  cy.get('[data-qa="login-password"]').type("13456789",{delay:200})
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  cy.get('b').should("be.visible").click()
    

  
});


    });

it("Login User with correct email and password", () => {
  cy.get(':nth-child(5) > a').should("be.visible")
  cy.get('b').should("be.visible")

  

});

it("Login User with incorrect email and password")





  ///cy.get('.shop-menu > .nav > :nth-child(4) > a')