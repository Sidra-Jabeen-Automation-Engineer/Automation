import {

  randomCompany,
  
} from "../Lib/fakedata";
describe("Appraisal request", () => {
  before(() => {
    // Perform login only once before all tests
    cy.viewport(1920, 1080);

    cy.session("login", () => {
      cy.login();
    });
  });

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.session("login", () => {
      cy.login();
    });
  });


it('Verify Appraisal Request - Real Estate added successfully', () => {

  cy.intercept('https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92').as("apiRequest");
  cy.visit('https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92');
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
  
  // Select Appraisal 
  cy.get("#test-id-appraisal_customer_detail_tab", { timeout:15000 }).should('be.visible').click({force:true});;
  cy.get('.block > .justify-between > .custom_button').scrollIntoView().should('be.visible').click({force:true});;
  cy.wait(5000);
  cy.get('.custom_button', { timeout:15000 }).should('be.visible').click({force:true});;
  cy.get('div[data-tag="allowRowEvents"] input[type="checkbox"][data-indeterminate="false"]', { timeout:15000 }).check();
  cy.contains('Next',{ timeout:15000 }).should('be.visible').click({force:true});;


// Apprasial Request form
// Fill in Appraisal Request form
cy.get('[placeholder="Service Requested"]',  { timeout: 15000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'New Appraisal', { timeout: 8000 }).should('be.visible').click({force:true});  

cy.get('[placeholder="Loan Purpose"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Construction Loan', { timeout: 8000 }).should('be.visible').click({force:true});  

cy.get('[placeholder="Appraisal Expense Is"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Reimburseable', { timeout: 8000 }).should('be.visible').click({force:true});  

cy.get('[placeholder="Use of Appraisal"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'New Loan Underwriting', { timeout: 8000 }).should('be.visible').click({force:true});  

// Participation
cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > :nth-child(3) > :nth-child(1) > .checkbox__style > .checkmark').click();




// Bank's position
cy.get('[placeholder="If Yes, What Is The Banks Position"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Lead Agent', { timeout: 8000 }).should('be.visible').click({force:true});  

// Bank's name
cy.get('[placeholder="Lead Bank\'s Name"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Ocean First', { timeout: 8000 }).should('be.visible').click({force:true});  

// Select property tenancy
cy.get('[placeholder="Property Tenancy"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Owner Occupied < 50%', { timeout: 8000 }).should('be.visible').click({force:true});  

// Select Report format
cy.get('[placeholder="Report Format"]',  { timeout: 10000 } ).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Complete Appraisal', { timeout: 8000 }).should('be.visible').click({force:true});

// Select valuation type
cy.contains('Prospective - As Stabilized').first().should('be.visible').click({force:true});
cy.contains('Prospective - As Completed').first().should('be.visible').click({force:true});
cy.contains('Market As-Is').should('be.visible').click({force:true});


// Property Interest appraised
cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > :nth-child(13) > .grid > :nth-child(4) > .checkmark').should('be.visible').click({force:true});
cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > :nth-child(13) > .grid > :nth-child(1) > .checkmark').should('be.visible').click({force:true});

/*
// Add contact
cy.get('.mt-3 > .custom_purple_button', {timeout:7000}).first().click();
cy.get('[placeholder="Enter First Name"]', {timeout:10000}).type('test');
cy.get('button.text-white.rounded.bg-colors-blue_850.flex.justify-start.items-center.font-500.px-16.py-10.text-xl.outline-none.gap-x-8').click();
cy.get('div[data-tag="allowRowEvents"] input[type="radio"]').check();
cy.get('.text-white > .text-base').should('be.visible').click({force:true});
cy.get(':nth-child(4) > .justify-end > .text-white > .flex').should('be.visible').click({force:true});

cy.get('.MuiDialogContent-root').then(($body) => {
if ($body.find('.success-message-selector').length > 0) {
  // If success message is found
  cy.contains('Affiliation created successfully').should('be.visible');
} 
else if ($body.find('[role="alert"]').length > 0) {
  // If error message is found
  cy.contains('The Affiliation already exists for the customer.').should('be.visible');
  cy.get('button.close-form').click(); // Adjust the selector as necessary
}

})
*/





//cy.get('[placeholder="Property Contact Name"]').should('be.visible').click({force:true});
//cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
//cy.contains('li.MuiAutocomplete-option', 'Test', { timeout: 8000 }).should('be.visible').click({force:true});  

// Add Relationship to Project
cy.get('[placeholder="Relationship to Project"]', {timeout:10000}).first().should('be.visible').click({force:true});
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Owner', { timeout: 8000 }).should('be.visible').click();  


// Select bank
cy.get('.MuiButtonBase-root.MuiRadio-root.MuiRadio-colorSecondary input[type="radio"][value="bank"][name="required-info"]').check({ force: true });

cy.get('input[type="checkbox"][name="an_accurate_legal_description_of_all_real_property"]', {timeout:10000}).check({ force: true });
cy.get('label.checkbox__style input[type="checkbox"][name="three_years_of_utility_insurance_maintenance"]').check({ force: true });
cy.get('label.checkbox__style input[type="checkbox"][name="current_rent_roll"]').check({ force: true });


// Submit form 
cy.get('#appraiser_submit_button').contains('Submit').should('be.visible').click({force:true}); 

cy.contains('Appraisals has been created', {timeout:10000}).should('exist');

    });


    it("should select valid value from dropdown Appraisal Request ", () => {

      cy.intercept('https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal').as("apiRequest");
    
        
        cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
        cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
        cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
        cy.get('[placeholder="Service Requested"]', {timeout:20000}).should("be.visible").click();
        cy.get(".MuiAutocomplete-popper").should("be.visible");
        cy.contains(
          "li.MuiAutocomplete-option",
          "New Appraisal"
        ).click();
        // Verify the selected value
        cy.get('[placeholder="Service Requested"]', {timeout:10000}).should(
          "have.value",
          "New Appraisal"
        );
      });
    
      it("should search and select value from dropdown Appraisal Request", () => {
       
        cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
        cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
        cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
        // Click the dropdown
        cy.get('[placeholder="Service Requested"]', {timeout:10000}).should("be.visible").click();
        cy.get(".MuiAutocomplete-popper").should("be.visible");
        cy.get('[placeholder="Service Requested"]', {timeout:10000}).type(
          "New Appraisal"
        );
        cy.contains(".MuiAutocomplete-option", "New Appraisal").should(
          "exist"
        );
        cy.contains(".MuiAutocomplete-option", "New Appraisal").click();
        cy.get('[placeholder="Service Requested"]', {timeout:10000}).should(
          "have.value",
          "New Appraisal"
        );
      });
    
      it("should handle invalid input gracefully from dropdown Appraisal Request", () => {
       
        cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
        cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
        cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
        // Click the dropdown
        cy.get('[placeholder="Service Requested"]', {timeout:10000}).should("be.visible").click();
        cy.get(".MuiAutocomplete-popper").should("be.visible");
        cy.get('[placeholder="Service Requested"]', {timeout:10000}).type(randomCompany);
        cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
        cy.get(".MuiAutocomplete-popper").should("contain", "No options");
      });
    
    // Loan purpose 
    it("should search and select value from dropdown Loan purpose", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
      // Click the dropdown
      cy.get('[placeholder="Loan Purpose"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Loan Purpose"]', {timeout:10000}).type(
        "Construction Loan"
      );
      cy.contains(".MuiAutocomplete-option", "Construction Loan").should(
        "exist"
      );
      cy.contains(".MuiAutocomplete-option", "Construction Loan").click();
      cy.get('[placeholder="Loan Purpose"]', {timeout:10000}).should(
        "have.value",
        "Construction Loan"
      );
    });
    
    it("should handle invalid input gracefully from dropdown Loan purpose", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
      // Click the dropdown
      cy.get('[placeholder="Loan Purpose"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Loan Purpose"]', {timeout:10000}).type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper").should("contain", "No options");
    });
    
    // Appraisal expense is 
    
    it("should select valid value from dropdown Appraisal expense ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
      
      cy.get('[placeholder="Appraisal Expense Is"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "Reimburseable"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Appraisal Expense Is"]').should(
        "have.value",
        "Reimburseable"
      );
    });
    
    it("should search and select value Appraisal expense ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
     
    
      // Click the dropdown
      cy.get('[placeholder="Appraisal Expense Is"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Appraisal Expense Is"]').type(
        "Reimburseable"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "Reimburseable"
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "Reimburseable"
      ).click();
      cy.get('[placeholder="Appraisal Expense Is"]').should(
        "have.value",
        "Reimburseable"
      );
    });
    
    it("should handle invalid input gracefully Appraisal expense ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
     
    
      // Click the dropdown
      cy.get('[placeholder="Appraisal Expense Is"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Appraisal Expense Is"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    // Use of appraisal 
    it("should select valid value from dropdown Use of Appraisal ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    
      cy.get('[placeholder="Use of Appraisal"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "New Loan Underwriting"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Use of Appraisal"]').should(
        "have.value",
        "New Loan Underwriting"
      );
    });
    
    it("should search and select value Use of Appraisal ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    
      // Click the dropdown
      cy.get('[placeholder="Use of Appraisal"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Use of Appraisal"]').type(
        "New Loan Underwriting"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "New Loan Underwriting"
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "New Loan Underwriting"
      ).click();
      cy.get('[placeholder="Use of Appraisal"]').should(
        "have.value",
        "New Loan Underwriting"
      );
    });
    
    it("should handle invalid input gracefully Use of Appraisal ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    
      // Click the dropdown
      cy.get('[placeholder="Use of Appraisal"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Use of Appraisal"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    // Bank position
    
    it("should select valid value from dropdown Bank position ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
      // Participation
    cy.get(':nth-child(1) > .checkbox__style > .checkmark',{timeout:15000}).first().click({force:true});
      cy.get('[placeholder="If Yes, What Is The Banks Position"]',{timeout:10000}).should("be.visible").click({force:true});
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "Lead Agent"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="If Yes, What Is The Banks Position"]').should(
        "have.value",
        "Lead Agent"
      );
    });
    
    it("should search and select value Bank position ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    // Participation
    cy.get(':nth-child(1) > .checkbox__style > .checkmark',{timeout:15000}).first().click({force:true});
      // Click the dropdown
      cy.get('[placeholder="If Yes, What Is The Banks Position"]', {timeout:10000}).should("be.visible").click({force:true});
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="If Yes, What Is The Banks Position"]').type(
        "Lead Agent"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "Lead Agent" , {timeout:10000}
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "Lead Agent"
      ).click();
      cy.get('[placeholder="If Yes, What Is The Banks Position"]').should(
        "have.value",
        "Lead Agent"
      );
    });
    
    it("should handle invalid input gracefully Bank position ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    // Participation
    cy.get(':nth-child(1) > .checkbox__style > .checkmark',{timeout:15000}).first().click({force:true});
      // Click the dropdown
      cy.get('[placeholder="If Yes, What Is The Banks Position"]').should("be.visible").click({force:true});
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="If Yes, What Is The Banks Position"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    it("should select valid value from dropdown Bank Name ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    
    // Participation
    cy.get(':nth-child(1) > .checkbox__style > .checkmark',{timeout:15000}).first().click({force:true});  
    cy.get('[placeholder="Lead Bank\'s Name"]').should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "Ocean First"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Lead Bank\'s Name"]').should(
        "have.value",
        "Ocean First"
      );
    });
    
    it("should search and select value Bank Name ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    // Participation
    cy.get(':nth-child(1) > .checkbox__style > .checkmark',{timeout:15000}).first().click({force:true});
    
      // Click the dropdown
      cy.get('[placeholder="Lead Bank\'s Name"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Lead Bank\'s Name"]').type(
        "Ocean First"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "Ocean First"
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "Ocean First"
      ).click();
      cy.get('[placeholder="Lead Bank\'s Name"]').should(
        "have.value",
        "Ocean First"
      );
    });
    
    it("should handle invalid input gracefully Bank Name ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    // Participation
    cy.get(':nth-child(1) > .checkbox__style > .checkmark',{timeout:15000}).first().click({force:true});
      // Click the dropdown
      cy.get('[placeholder="Lead Bank\'s Name"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Lead Bank\'s Name"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    // Property Tenancy
    it("should select valid value from dropdown Property Tenancy ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
      cy.get('[placeholder="Property Tenancy"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "Owner Occupied < 50%"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Property Tenancy"]').should(
        "have.value",
        "Owner Occupied < 50%"
      );
    });
    
    it("should search and select value Property Tenancy ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
      // Click the dropdown
      cy.get('[placeholder="Property Tenancy"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Property Tenancy"]').type(
        "Owner Occupied < 50%"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "Owner Occupied < 50%"
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "Owner Occupied < 50%"
      ).click();
      cy.get('[placeholder="Property Tenancy"]').should(
        "have.value",
        "Owner Occupied < 50%"
      );
    });
    
    it("should handle invalid input gracefully Property Tenancy ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
     
    
      // Click the dropdown
      cy.get('[placeholder="Property Tenancy"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Property Tenancy"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    // Report Format
    
    it("should select valid value from dropdown Report Format ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
      cy.get('[placeholder="Report Format"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "Complete Appraisal"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Report Format"]').should(
        "have.value",
        "Complete Appraisal"
      );
    });
    
    it("should search and select value Report Format ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
     
    
      // Click the dropdown
      cy.get('[placeholder="Report Format"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Report Format"]').type(
        "Complete Appraisal"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "Complete Appraisal"
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "Complete Appraisal"
      ).click();
      cy.get('[placeholder="Report Format"]').should(
        "have.value",
        "Complete Appraisal"
      );
    });
    
    it("should handle invalid input gracefully Report Format ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
     
    
      // Click the dropdown
      cy.get('[placeholder="Report Format"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Report Format"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    // Property Relationship to Project
    it("should select valid value from dropdown Relationship to Project ", () => {
       
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    
      cy.get('[placeholder="Relationship to Project"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "Owner"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Relationship to Project"]').should(
        "have.value",
        "Owner"
      );
    });
    
    it("should search and select value Relationship to Project ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    
      // Click the dropdown
      cy.get('[placeholder="Relationship to Project"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Relationship to Project"]').type(
        "Owner"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "Owner"
      ).should("exist");
      cy.contains(
        ".MuiAutocomplete-option",
        "Owner"
      ).click();
      cy.get('[placeholder="Relationship to Project"]').should(
        "have.value",
        "Owner"
      );
    });
    
    it("should handle invalid input gracefully Relationship to Project ", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92/appraisal-request/appraisal");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
     
    
    
      // Click the dropdown
      cy.get('[placeholder="Relationship to Project"]', {timeout:10000}).should("be.visible").click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Relationship to Project"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
    });
    
    
    });



