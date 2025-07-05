describe('template spec', () => {
  it("Type page UP", () => {
   
    cy.visit("https://www.toolsqa.com/selenium-training?q=banner#enroll-form")
    cy.title("eq","Tools QA")
    cy.wait(1000)
    cy.get('#first-name').type("{pagedown}")
    cy.wait(3000)
  
  
  })
})