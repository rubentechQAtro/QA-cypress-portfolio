describe("funcione Type", () => {
    
    Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

    

     it ("Types Enter", () => {

        cy.visit("https://www.google.com/")
        cy.title().should("eq","Google")
        cy.wait(1500)
        cy.get("#APjFqb").type("cypres testing {enter}")
        cy.contains("Cypress: Testing Frameworks for Javascript | Write, Run, Debug").click()
        
        

        }) 



  

    })

    

  
