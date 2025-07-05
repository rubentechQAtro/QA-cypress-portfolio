/// <reference types="cypress"/>
require('cypress-plugin-tab')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})



describe("Reto", () => { 

  
    it ("Primer reto", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should("eq","DEMOQA")
        cy.wait(1500)
       cy.get('#searchBox').should("be.visible").type("cierra")

        /// agregando campo
        cy.get('#addNewRecordButton').should("be.visible").click()


    })

    

        
    
    })
       

