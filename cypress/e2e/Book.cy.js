describe("Тесты на авторизацию сайта библиотека", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });

    it("Добавление книги", () => {
      cy.addBook(
        "JavaScript с нуля до профи",
        "Книга демонстрирует возможности JavaScript для разработки веб-приложений",
        "Свекис Лоренс Ларс, Путтен Майке ван, Персиваль Роб"
      );
      cy.contains("JavaScript с нуля до профи").should("be.visible").true;
    });

    it("Добавление книги в избранное", () => {
      cy.addBookFavorite(
        "Идеальный тестировщик. Концепции, навыки и стратегии",
        "Книга демонстрирует возможности JavaScript для разработки веб-приложений",
        "Кристин Джеквони");
      cy.contains("Кристин Джеквони").should("be.visible").true;
    });

    it("Удаление книги из избранного", () => {
      cy.addBookFavorite(
        "​Testing JavaScript Applications",
        "Руководство по созданию комплексного и надежного набора для тестирования JS-приложений",
        "Lucas da Costa"
      );
      cy.contains("Delete from favorite").click();
      cy.contains("Lucas da Costa").should("be.visible");
    });
});