it("should open main page", ()=>{
  cy.visit("http://localhost:3000/");
  cy.contains("Books list");   
})

it("Should successfully login", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("success login", function () {
  cy.visit('/');
  cy.contains("Log in").click();
  cy.get("#mail").type("bropet@mail.ru");
  cy.get("#pass").type("123");
  cy.contains("Submit").click();
  cy.contains("bropet@mail.ru").should('be.visible');
});

it("Should not login with empty login", () => {
  cy.visit("/");
  cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type("test");
  cy.contains("Submit").click();
  cy.get("#mail").then(($el) => $el[0].checkValidity()).should("be.false");
  cy.get("#mail").then(($el) => $el[0].validationMessage)
    .should("contain", "Заполните это поле.");
});

it("Should not login with empty password", () => {
  cy.visit("/booksNode");
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get("#pass").then(($el) => $el[0].checkValidity())
    .should("be.false");
});
