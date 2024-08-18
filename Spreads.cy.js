describe('Add Spreads', () => {
  beforeEach(() => {
    // Visit dashboard before each test
    cy.viewport(1920, 1080);
    cy.login();
  });
  it('Verify Spreads - Statement added successfully', () => {
    
    // Navigate to the Customer section in the left pane
    cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
    cy.get("#customer_view_aa443ec0-a091-4149-8c89-a299ed4e08fd", {timeout: 10000}).scrollIntoView().should('be.visible').click();
    cy.wait(10000);   
    
    // Select Spreads 
    cy.get("#test-id-spreads_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();

    cy.get('.py-14').scrollIntoView().should('be.visible').click();
    cy.wait(5000);
    
    cy.get('[placeholder="Enter Statement Name"]').should('be.visible').clear().type('Test').click();

// Select Template
cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Statement of Acctuals', { timeout: 8000 }).should('be.visible').click();  

// Select amount in 
cy.get('[placeholder="Select Amount"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Actuals', { timeout: 8000 }).should('be.visible').click();  

// Add Period
cy.get('.h-full > .text-colors-blue_850').should('be.visible').click();

// Information type
cy.get('[placeholder="Select Information Type"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Historic', { timeout: 8000 }).should('be.visible').click(); 

// prepared by 
cy.get('[placeholder="Enter Prepared By"]', { timeout: 10000 }).should('be.visible').clear().type('Automation framework');

// Period date
// Period date
function selectEnabledDate() {
  // Open the date picker
  cy.get('#alert-dialog-slide-description [placeholder="Select Date..."]', { timeout: 8000 }).should('be.visible').click();
  
  // Function to find and click an enabled date
  const findAndSelectDate = () => {
    cy.get('#alert-dialog-slide-description .rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
      .then($dates => {
        if ($dates.length > 0) {
          // If there are enabled dates, select the first one
          cy.wrap($dates).first().click();
        } else {
          // If no enabled dates, navigate to the next month and retry
          cy.get('#alert-dialog-slide-description .rdtNext').click().then(() => {
            findAndSelectDate(); // Recursive call to retry in the new month view
          });
        }
      });
  };

  // Initial call to find and select a date
  findAndSelectDate();
}

// Call the function to execute the date selection
selectEnabledDate();




// of months
cy.get('[placeholder="Enter # of Months"]').should('be.visible').clear().type('8');
// Quality
cy.get('[placeholder="Select Quality"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Qualified', { timeout: 8000 }).should('be.visible').click(); 

// conversation rate
cy.get(':nth-child(7) > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root > #alert-dialog-slide-description > form > .justify-end > .custom_button > .text-xl').should('be.visible').first().click();
cy.get('.flex > .MuiFormControl-root > .checkbox__style > .checkmark').first().should('be.visible').click();
cy.get('.custom_button > .text-xl').should('be.visible').last().click();

});
    
it('Verify Spreads - DSO C&I added successfully', () => {
    
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_aa443ec0-a091-4149-8c89-a299ed4e08fd", {timeout: 10000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Select Spreads 
  cy.get("#test-id-spreads_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();

  cy.contains('DSO C&I').scrollIntoView().should('be.visible').click();
  cy.wait(5000);
  cy.get('.py-14').scrollIntoView().should('be.visible').click();

  
  cy.get('[placeholder="Enter Title"]').should('be.visible').first().type('Test DSO C&I').click();

// Select Template
cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'DSO Template', { timeout: 8000 }).should('be.visible').click();  

// Select amount in 
//cy.get('[placeholder="Select Amount"]',  { timeout: 10000 } ).should('be.visible').click();
//cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
//cy.contains('li.MuiAutocomplete-option', 'Actuals', { timeout: 8000 }).should('be.visible').click();  

   // Fiscal year end
   cy.get('[placeholder="YYYY"]').click();
   cy.get('.rdtPrev').should('be.visible')
   cy.get('[data-value="2024"]').click();

// Enter Interest Rate Sensitivity Test Increase
cy.get('[placeholder="Enter Interest Rate Sensitivity Test Increase"]').clear().type(10);

cy.get('.flex > .MuiFormControl-root > .checkbox__style > .checkmark').first().should('be.visible').click();
cy.get('.custom_button > .text-xl').should('be.visible').last().click();
    
    });

    it('Verify Spreads - DSO CRE added successfully', () => {
    
      // Navigate to the Customer section in the left pane
      cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
      cy.get("#customer_view_aa443ec0-a091-4149-8c89-a299ed4e08fd", {timeout: 10000}).should('be.visible').click();
      cy.wait(10000);   
      
      // Select Spreads 
      cy.get("#test-id-spreads_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();
    
      cy.contains('DSO CRE').scrollIntoView().should('be.visible').click();
      cy.wait(5000);
      cy.get('.py-14').scrollIntoView().should('be.visible').click();
    
      
      cy.get('[placeholder="Enter Title"]').should('be.visible').type('Test DSO C&I').click();
    
    // Select Template
    cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'DEBT SERVICE OVERLAY (CRE)', { timeout: 8000 }).first().should('be.visible').click();  
    
    
       // Fiscal year end
       cy.get('[placeholder="YYYY"]').click();
       cy.get('.rdtPrev').should('be.visible')
       cy.get('[data-value="2024"]').click();
    
    // Enter Interest Rate Sensitivity Test Increase
    cy.get('[placeholder="Enter Interest Rate Sensitivity Test Increase"]').clear().type(10);
    
    
    cy.get('.flex > .MuiFormControl-root > .checkbox__style > .checkmark').first().should('be.visible').click();
  cy.get('.custom_button > .text-xl').should('be.visible').last().click();
    
                                     
  });

  it('Verify Spreads - Capex added successfully', () => {
    
    // Navigate to the Customer section in the left pane
    cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
    cy.get("#customer_view_aa443ec0-a091-4149-8c89-a299ed4e08fd", {timeout: 10000}).should('be.visible').click();
    cy.wait(10000);   
    
    // Select Spreads 
    cy.get("#test-id-spreads_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();
    cy.contains('Capex').scrollIntoView().should('be.visible').click();
    cy.wait(5000);
    cy.get('.py-14').scrollIntoView().should('be.visible').click();
    cy.wait(5000);
    
    cy.get('[placeholder="Enter Statement Name"]').should('be.visible').clear().type('Test').click();

// Select Template
cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'UNFINANCED CAPEX CALCULATION', { timeout: 8000 }).should('be.visible').click(); 

// Select statement
cy.get('[placeholder="Select Statement"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Test', { timeout: 8000 }).should('be.visible').click(); 

// Select amount in 
cy.get('[placeholder="Select Amount"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Actuals', { timeout: 8000 }).should('be.visible').click();  

cy.get('.custom_button > .text-xl').should('be.visible').last().click();
});

it('Verify all spreads added successfully', () => {
    
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_aa443ec0-a091-4149-8c89-a299ed4e08fd", {timeout: 10000}).scrollIntoView().should('be.visible').click();
  cy.wait(10000);   
  
  // Select Spreads 
  cy.get("#test-id-spreads_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();

  cy.get('.py-14').scrollIntoView().should('be.visible').click();
  cy.wait(5000);
  
  cy.get('[placeholder="Enter Statement Name"]').should('be.visible').scrollIntoView().type('Test').click();

// Select Template
cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Statement of Acctuals', { timeout: 8000 }).should('be.visible').click();  

// Select amount in 
cy.get('[placeholder="Select Amount"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Actuals', { timeout: 8000 }).should('be.visible').click();  

// Add Period
cy.get('.h-full > .text-colors-blue_850').should('be.visible').click();

// Information type
cy.get('[placeholder="Select Information Type"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Historic', { timeout: 8000 }).should('be.visible').click(); 

// prepared by 
cy.get('[placeholder="Enter Prepared By"]', { timeout: 10000 }).should('be.visible').clear().type('Automation framework');

// Period date
// Period date
function selectEnabledDate() {
// Open the date picker
cy.get('#alert-dialog-slide-description [placeholder="Select Date..."]', { timeout: 8000 }).should('be.visible').click();

// Function to find and click an enabled date
const findAndSelectDate = () => {
  cy.get('#alert-dialog-slide-description .rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
    .then($dates => {
      if ($dates.length > 0) {
        // If there are enabled dates, select the first one
        cy.wrap($dates).first().click();
      } else {
        // If no enabled dates, navigate to the next month and retry
        cy.get('#alert-dialog-slide-description .rdtNext').click().then(() => {
          findAndSelectDate(); // Recursive call to retry in the new month view
        });
      }
    });
};

// Initial call to find and select a date
findAndSelectDate();
}

// Call the function to execute the date selection
selectEnabledDate();


// of months
cy.get('[placeholder="Enter # of Months"]').should('be.visible').clear().type('8');
// Quality
cy.get('[placeholder="Select Quality"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Qualified', { timeout: 8000 }).should('be.visible').click(); 

// conversation rate
cy.get(':nth-child(7) > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root > #alert-dialog-slide-description > form > .justify-end > .custom_button > .text-xl').should('be.visible').first().click();
cy.get('.flex > .MuiFormControl-root > .checkbox__style > .checkmark').first().should('be.visible').click();
cy.get('.custom_button > .text-xl').should('be.visible').last().click();
cy.wait(7000);
cy.contains('Save').click();
cy.wait(10000);

// Add DSO  C&I
cy.contains('DSO C&I').scrollIntoView().should('be.visible').click();
cy.wait(5000);
cy.get('.py-14').scrollIntoView().should('be.visible').click();


cy.get('[placeholder="Enter Title"]').should('be.visible').first().type('Test DSO C&I').click();

// Select Template
cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'DSO Template', { timeout: 8000 }).should('be.visible').click();  



 // Fiscal year end
 cy.get('[placeholder="MM-YYYY"]').click();
 cy.get('.rdtPrev').should('be.visible')
 cy.get(':nth-child(2) > tbody > :nth-child(1) > [data-value="1"]').click();

// Enter Interest Rate Sensitivity Test Increase
cy.get('[placeholder="Enter Interest Rate Sensitivity Test Increase"]').type(10);


cy.get('.flex > .MuiFormControl-root > .checkbox__style > .checkmark').first().should('be.visible').click();
cy.get('.custom_button > .text-xl').should('be.visible').last().click();
cy.get('.mt-4').scrollIntoView().click();
 cy.wait(10000);

 // Add DSO CRE
  
    cy.contains('DSO CRE').scrollIntoView().should('be.visible').click();
    cy.wait(5000);
    cy.get('.py-14').scrollIntoView().should('be.visible').click();
  
    
    cy.get('[placeholder="Enter Title"]').should('be.visible').type('Test DSO C&I').click();
  
  // Select Template
  cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
  cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
  cy.contains('li.MuiAutocomplete-option', 'DEBT SERVICE OVERLAY (CRE)', { timeout: 8000 }).first().should('be.visible').click();  
  
   // Fiscal year end
 cy.get('[placeholder="MM-YYYY"]').click();
 cy.get('.rdtPrev').should('be.visible')
 cy.get(':nth-child(2) > tbody > :nth-child(1) > [data-value="1"]').click();
  
  // Enter Interest Rate Sensitivity Test Increase
  cy.get('[placeholder="Enter Interest Rate Sensitivity Test Increase"]').type(10);
  
  cy.get('.flex > .MuiFormControl-root > .checkbox__style > .checkmark').first().should('be.visible').click();
cy.get('.custom_button > .text-xl').should('be.visible').last().click();
cy.get('.mt-4').click();
cy.wait(7000);

// Add Capex 
cy.contains('Capex').scrollIntoView().should('be.visible').click();
    cy.wait(5000);
    cy.get('.py-14').scrollIntoView().should('be.visible').click();

    // Enter Statement Name 
    cy.get('[placeholder="Enter Statement Name"]',  { timeout: 10000 } ).type('Test Capex');

// Select Template
cy.get('[placeholder="Select Template"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'UNFINANCED CAPEX CALCULATION', { timeout: 8000 }).should('be.visible').click(); 

// Select statement
cy.get('[placeholder="Select Statement"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Test', { timeout: 8000 }).should('be.visible').click(); 

// Select amount in 
cy.get('[placeholder="Select Amount"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Actuals', { timeout: 8000 }).should('be.visible').click();  

cy.get('.custom_button > .text-xl').should('be.visible').last().click();
cy.contains('Save').should('be.visible').click();
cy.wait(10000);

});
 
});
   
