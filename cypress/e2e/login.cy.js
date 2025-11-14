describe("Login Component (E2E Test)", () => {
  it("logs in and navigates to dashboard", () => {
    // navigates to dev server
    cy.visit("http://localhost:5173/");

    // clicks login button
    cy.contains("button", "Send Message !").click();

    // finds and inputs content
    cy.get('input[placeholder="Enter email"]').type("user@gmail.com");

    // clicks login button
    cy.contains("button", "Send Message !").click();

    // checks if dashboard heading is visible
    cy.contains("h1", /welcome/i).should("be.visible");
  });
});
