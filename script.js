// Fix for Error 1: Close Button
it('should close modal when close button is clicked', () => {
  cy.get('#openModal').click();
  cy.get('.close-modal').click();
  
  // DO NOT use .have.css('display', 'none')
  // Use 'not.be.visible' - it waits for the change to happen
  cy.get('#myModal').should('not.be.visible'); 
});

// Fix for Error 2: Click Outside
it('should close modal when clicking outside of modal', () => {
  cy.get('#openModal').click();
  
  // Wait for it to be visible first
  cy.get('#myModal').should('be.visible');

  // Click the top-left corner of the screen (the background overlay)
  cy.get('#myModal').click(0, 0, { force: true });

  cy.get('#myModal').should('not.be.visible');
});