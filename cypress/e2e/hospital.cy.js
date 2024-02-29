describe('template spec', () => {
  it('passes', () => {

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
return false
})
    cy.visit('http://localhost/HospitalManagementSystem/hospital/')
    cy.get(':nth-child(1) > .text > .button > span > a').click()
    cy.get('.new-account > a').click()
    cy.visit('http://localhost/HospitalManagementSystem/hospital/hms/registration.php')
    cy.get(':nth-child(3) > .form-control').type('Hitesh')
    cy.get(':nth-child(4) > .form-control').type('Biet')
    cy.get(':nth-child(5) > .form-control').type('Davanagere')
    cy.get('[for="rg-male"]').click()
    cy.get('#email').type('hitesh2@gmail.com')
    cy.get('#password').type('Hitesh')
    cy.get('#password_again').type('Hitesh')
    cy.contains("Submit").click({force:true})
    cy.get('p > a').click({force:true})
    cy.get(':nth-child(3) > .input-icon > .form-control').type('hitesh2@gmail.com')
    cy.get('.form-group.form-actions > .input-icon > .form-control').type('Hitesh')
    cy.get('.btn').click({force:true})
    onclick="return SubmitForm(this.form)"
    cy.get(':nth-child(3) > .panel > .panel-body > .links > a').click({force:true})
    cy.get(':nth-child(1) > .form-control').select('Demo test')
    cy.get('#doctor').select('Lyndon Bermoy')
    cy.get(':nth-child(4) > .form-control').type('2024-03-01')
    cy.get('form > .btn').click()
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(3) > a').click()
    cy.get(':nth-child(2) > .text > .button > span > a').click()
    cy.get(':nth-child(3) > .input-icon > .form-control').type('test@demo.com')
    cy.get('.form-group.form-actions > .input-icon > .form-control').type('Test@123')
    cy.get('.btn').click({force:true})
    cy.get(':nth-child(2) > .panel > .panel-body > .cl-effect-1 > a').click()
  });
});
 