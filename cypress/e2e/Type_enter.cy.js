 describe("Función Type - búsqueda en Google", () => {
  
  // Ignorar errores de JS del sitio (útil con Google)
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

    

     it ("Types Enter", () => {

        cy.visit("https://www.google.com/")
        cy.title().should("eq","Google")
        cy.wait(1500)
        cy.get("#APjFqb").type("cypres testing {enter}")
        cy.contains("Cypress: Testing Frameworks for Javascript | Write, Run, Debug").click()
        
        
        
        
        //cy.get("#rso > div:nth-child(3) > div > div > div > div.kb0PBd.A9Y9g.jGGQ5e > div > div > span > a > h3").click()

        //cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
       
        
        
        //puedes ingresar una funcion dentro de un string ingresando llaves{} (dentro del las llaves dobñles) esto simular un enter en el teclado
        
       
        // En vez de selectores complejos como #jZ2SBf > .wM6W7d > span, si puedes usar cy.contains('Texto del botón'), será más mantenible.


        }) 



  

    })

    

  
