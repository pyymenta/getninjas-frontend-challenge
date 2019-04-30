context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });
  describe('Form Actions', () => {
    describe('Page 1', () => {
      it('should display a error message when blur a required element with invalid value selected', () => {
        cy.get('.form-input[required]:first').select("").blur();
        cy.get('.form-input[required]:first + span').should('be.visible');
      });
      it('should not display a error message when blur a required element with valid value selected', () => {
        cy.get('.form-input:required').first().select("Coloração").blur();
        cy.get('.form-input:required + span').first().should('not.be.visible');
      });
      it('should not display a error message when blur a non-required element with invalid value selected', () => {
        cy.get('.form-input:optional').first().select("").blur();
        cy.get('.form-input:optional + span').first().should('not.be.visible');
      });
      it('should display second panel when second bottomButton is clicked', () => {
        cy.get('.step-panel___button:nth-child(2)').click();
        cy.get('.step-panel___page:first').should('not.be.visible');
        cy.get('.step-panel___page:nth-child(2)').should('be.visible')
      });
    })
    describe('Page 2', () => {
      it('should display a error message when blur a required element with invalid value', () => {
        cy.get('.step-panel___button:nth-child(2)').click();
        cy.get('input.form-input[required]:first').focus().blur();
        cy.get('input.form-input[required]:first + span').should('be.visible');
      });
      it('should not display a error message when blur a required element with valid value', () => {
        cy.get('.step-panel___button:nth-child(2)').click();
        cy.get('input.form-input:required').first().type("Coloração").blur();
        cy.get('input.form-input:required + span').first().should('not.be.visible');
      });
      it('should display first panel when first bottomButton is clicked', () => {
        cy.get('.step-panel___button:first').click();
        cy.get('.step-panel___page:first').should('visible');
        cy.get('.step-panel___page:nth-child(2)').should('not.be.visible')
      });
    })
  });
});