
describe(" seccion 1 Validando titulo", () => { 

   
    it ("validar titulo", () => {
        cy.visit("https://demoqa.com")
        cy.title().should("eq","DEMOQA")

        cy.log(" Funcion tittle ok")

    })

    
    
})

