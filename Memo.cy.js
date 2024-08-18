describe('Add Memos', () => {
    beforeEach(() => {
      // Visit dashboard before each test
      cy.viewport(1920, 1080);
      cy.login();
    });
    it('Verify Memo added successfully', () => {
      
      // Navigate to the Customer section in the left pane
      cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
      cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 19000}).should('be.visible').click();
      cy.wait(10000);   
      
      // Add Memo
      cy.get("#test-id-memo_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();
      cy.get('.gap-x-14 > .custom_button').scrollIntoView().should('be.visible').click();
      cy.wait(5000);

    // Select Memo
    cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
  cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
  cy.contains('li.MuiAutocomplete-option', 'C&I Annual Review Memo', { timeout: 8000 }).should('be.visible').click();  
      
// Select Product
cy.get('[placeholder="Select Product"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'CREM - Interest Only', { timeout: 8000 }).should('be.visible').click();


cy.contains('Done').click();

cy.contains('Save Draft' , { timeout: 10000}).click();
cy.wait(20000);

cy.get('div[aria-label="Edit"]').first().click();

cy.contains('Generate PDF', { timeout: 15000}).click();
cy.wait(10000);
cy.get('svg.cursor-pointer' , { timeout: 15000}).click();



 });

});