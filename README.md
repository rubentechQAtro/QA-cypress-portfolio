# 🧪 QA Cypress Portfolio

Este repositorio contiene una colección de pruebas automatizadas realizadas con **Cypress**, como parte de mi portafolio personal en transición desde QA manual hacia automatización.

---

## 🚀 Objetivo del Proyecto

Crear una base sólida de pruebas E2E (end-to-end) automatizadas para páginas web reales o simuladas, demostrando habilidades en:

* Validación de flujos de usuario
* Verificación de elementos DOM
* Uso de selectores CSS y atributos `data-*`
* Buenas prácticas en Cypress
* Organización de tests y `beforeEach`

---

## 🛠️ Tecnologías utilizadas

* [Cypress](https://www.cypress.io/)
* JavaScript (ES6)
* Node.js
* Git y GitHub

---

## 📦 Estructura del Proyecto

```
cypress_curso_2025/
├── cypress/
│   ├── e2e/                  # Casos de prueba automatizados (por funcionalidades o módulos)
│   │   ├── login.cy.js       # Ejemplo: Pruebas de inicio de sesión
│   │   ├── registro.cy.js    # Ejemplo: Pruebas de formulario de registro
│   ├── fixtures/             # Datos estáticos simulados (mock data) en formato JSON
│   │   └── usuarios.json
│   ├── support/
│   │   ├── commands.js       # Comandos personalizados para Cypress
│   │   └── e2e.js            # Hooks globales o configuración de soporte
├── cypress.config.js         # Configuración principal del proyecto Cypress
├── package.json              # Dependencias y scripts del proyecto
└── README.md                 # Documentación del proyecto (este archivo)
```

---

## 🧹 Buenas prácticas aplicadas

* Uso de `beforeEach` para inicializar el estado antes de cada test
* Separación de lógica de comandos comunes (`support/commands.js`)
* Nombres descriptivos y estructura modular por funcionalidad
* Validaciones robustas de elementos visibles y contenidos de texto
* Uso de `fixtures` para mantener los datos desacoplados del test

---

## ✅ Ejecución de las pruebas

1. Clona el repositorio:

```bash
git clone https://github.com/rubentechQAtro/QA-cypress-portfolio.git
cd QA-cypress-portfolio
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta Cypress en modo interactivo:

```bash
npx cypress open
```

O en modo headless:

```bash
npx cypress run
```

---

## 📌 Estado actual

🔧 En constante construcción: nuevas pruebas, casos negativos, y mejoras en comandos personalizados se están agregando progresivamente conforme avanzo en mi formación en automatización con Cypress.
 
