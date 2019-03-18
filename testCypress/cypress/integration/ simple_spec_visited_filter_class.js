describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.screenshot()
      cy.get('.Select-input').find('input[role="combobox"]').type("Jovana Zivkovic", {force:true})
      cy.contains('Jovana Zivkovic - Lenguas y Cultura')
      cy.contains('Jovana Zivkovic')
      cy.get('.Select-input').find('input[role="combobox"]').type('{enter}', {force:true})
      cy.get('.materias').find('input[name="id:LENG1102"]').check()
      cy.screenshot()
    })
})