 ///<reference types="cypress"/>
import 'cypress-plugin-tab';

describe("Ejercicio completo - Formulario DemoQA", () => {

  // Ignora errores de JS de la página
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Llenado completo del formulario con delays y scroll", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("include", "ToolsQA");
    cy.wait(1500); // Esperar a que cargue todo

    // Nombre y Apellido
    cy.get('#firstName').scrollIntoView().should("be.visible").type("Raul", { delay: 100 });
    cy.get('#lastName').type("Rojas", { delay: 100 });
    cy.get('#userEmail').type("correo@ejemplo.com", { delay: 100 });
    cy.wait(800);

    // Género
    cy.get('label[for="gender-radio-1"]').click(); // Male
    cy.wait(500);

    // Número de teléfono
    cy.get('#userNumber').type("987654321", { delay: 100 });
    cy.wait(500);

    // Fecha de nacimiento
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__day--015').click(); // día 15
    cy.wait(1000);

    // Materias
    cy.get('.subjects-auto-complete__value-container').click().type("Maths", { delay: 100 }).type('{enter}');
    cy.wait(800);

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-3"]').click(); // Music
    cy.wait(800);

    // Subir archivo
    const filePath = 'images/ejemplo.png'; // asegúrate de tener este archivo en /cypress/fixtures/images/
    cy.get('#uploadPicture').attachFile(filePath);
    cy.wait(800);

    // Dirección actual
    cy.get('#currentAddress').type("Av. Siempre Viva 123, Springfield", { delay: 100 });
    cy.wait(1000);

    // Estado y Ciudad
    cy.get('#state').click().contains('NCR').click();
    cy.get('#city').click().contains('Delhi').click();
    cy.wait(1000);

    // Enviar formulario
    cy.get('#submit').scrollIntoView().should("be.visible").click();
    cy.wait(1500);

    // Validar modal de éxito
    cy.get('#example-modal-sizes-title-lg').should("contain", "Thanks for submitting the form");
    cy.wait(1000);

    // Cerrar el modal
    cy.get('#closeLargeModal').click();
  });

});

