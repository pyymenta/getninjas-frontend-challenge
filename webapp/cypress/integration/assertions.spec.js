context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });

  describe('Form Structure Assertions', () => {
    it('should page has a container div', () => {
      cy.get('div.container').should('exist');
    });

    it('should page has a step-panel', () => {
      cy.get('div.step-panel').should('exist');
    });

    it('should step-panel has step-buttons', () => {
      cy.get('.step-panel___containerButton .step-panel___button').should('exist');
    });

    it('should step-buttons be an ordened-list', () => {
      cy.get('ol.step-panel___containerButton').should('exist');
    });

    it('should step-buttons items be lis', () => {
      cy.get('li.step-panel___button').should('exist');
    });

    it('should only the first step-button be active', () => {
      cy.get('.step-panel___button:first').should('have.class', 'step-panel___button--active');
      cy.get('.step-panel___button:not(:first)').should('not.have.class', 'step-panel___button--active');
    });

    it('should step-panel has rounded grey border', () => {
      cy.get('div.step-panel')
        .should('have.css', 'border')
        .and('equal', '1px solid rgba(0, 0, 0, 0.15)');
    });

    it('should panel-content be a form element', () => {
      cy.get('form.step-panel___content').should('exist');
    });

    it('should step-page be a fieldset element', () => {
      cy.get('fieldset.step-panel___page').should('exist');
    });

    it('only the first step-page should be visible', () => {
      cy.get('fieldset.step-panel___page:first').should('be.visible');
      cy.get('fieldset.step-panel___page:not(:first)').should('not.be.visible');
    });

    it('should pages have a markup header', () => {
      cy.get('fieldset.step-panel___page').get('.header-markup').should('exist');
    });

    it('should pages have form-fields', () => {
      cy.get('fieldset.step-panel___page:first').get('.form-field').should('exist');
      cy.get('fieldset.step-panel___page:not(:first)').get('.form-field').should('exist');
    });

    it('should pages have a blue fluid button', () => {
      cy.get('fieldset.step-panel___page')
        .get('button')
        .should('have.class', 'btn--fluid');
      cy.get('fieldset.step-panel___page')
        .get('button')
        .should('have.css', 'background-color')
        .and('equal', 'rgb(19, 147, 246)');
    });
  });
});
