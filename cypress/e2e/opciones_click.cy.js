/// <reference types="cypress"/>
 

describe("opcines de click", () => { 

  
it ("click sencillo", () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
cy.title().should("eq","OrangeHRM")
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin", {delay:100})
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123", {delay:100})

cy.get('.oxd-button').should("be.visible").click()
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()




    })

it ("click force true", () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
cy.title().should("eq","OrangeHRM")
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin", {delay:100})
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123", {delay:100})

cy.get('.oxd-button').should("be.visible").click()
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click({force:true})
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click({force:true})

        
    
    })
       
    })


it.only ("click por coordenadas x,y,z", () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
cy.title().should("eq","OrangeHRM")
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin", {delay:100})
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123", {delay:100})

cy.get('.oxd-button').should("be.visible").click()
//cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible").click()
//cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').should("be.visible").click()

        
    
    })