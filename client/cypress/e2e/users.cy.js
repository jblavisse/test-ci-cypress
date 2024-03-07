describe("todo list", () => {
  it("displays the 10 users", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#users").find("li").should("have.length", 10);
  });
});
