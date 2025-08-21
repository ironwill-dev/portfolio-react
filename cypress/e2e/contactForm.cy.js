describe("E2E Test", () => {
  it("allows a user to send a message successfully", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Contact Me").scrollIntoView();

    cy.get('input[placeholder="Enter your name here..."]').type("Will");
    cy.get('textarea[placeholder="Enter a fun message here..."]').type(
      "This is an E2E test !"
    );

    cy.contains("Send Message !").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Thank you Will, your message has been sent !");
    });
  });
});
