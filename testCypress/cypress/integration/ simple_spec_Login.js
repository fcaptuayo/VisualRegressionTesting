describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.screenshot()
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("captuayonovoafredy@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("123456789")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.screenshot()
    })
})
