/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable cypress/no-unnecessary-waiting */
describe("service is available", function () {
  beforeEach(function () {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");
  });

  it("should drag ingredients to the order", () => {
    const dataTransfer = new DataTransfer();
 
    cy.get('[data-testid="dragableItemBun"]', {withinSubject: null}).first().trigger('dragstart', {
      dataTransfer
    });
    cy.get('.constructorList').trigger('drop', {
      dataTransfer
    });

    cy.get('[data-testid="dragableItemIngredient"]', {withinSubject: null}).first().trigger('dragstart', {
      dataTransfer,
      force: true
    });
    cy.get('.constructorList').trigger('drop', {
      dataTransfer
    });
  });

  it("should send order and open/close modal", () => {
    const dataTransfer = new DataTransfer();
 
    cy.get('[data-testid="dragableItemBun"]', {withinSubject: null}).first().trigger('dragstart', {
      dataTransfer
    });
    cy.get('.constructorList').trigger('drop', {
      dataTransfer
    });

    cy.get('[data-testid="dragableItemIngredient"]', {withinSubject: null}).first().trigger('dragstart', {
      dataTransfer
    });
    cy.get('.constructorList').trigger('drop', {
      dataTransfer
    });

    if (!localStorage.getItem('refreshToken')) {
      cy.get('[data-testid="orderBtn"]').should('be.enabled');
      cy.get('[data-testid="orderBtn"]').click({});
      cy.get('[data-testid="loginForm"]').should('exist');
    }

    let email = "sasmeo@gmail.com";
    let password = "12345678";
    cy.get('[data-testid="loginEmail"]').type(`${email}{enter}`);
    cy.get('[data-testid="loginPass"]').type(`${password}{enter}`);

    cy.get('[data-testid="orderBtn"]').should('exist').click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(15000);

    cy.get('[data-testid="orderModal"]').should('exist');
    cy.get('[data-testid="closeModal"]').click();
    cy.get('[data-testid="orderModal"]').should('not.exist');
  });

  it("should open and close ingredient modal", () => {
    cy.get('[data-testid="dragableItemBun"]', { withinSubject: null })
      .first()
      .click();
    cy.get('[data-testid="ingredientModal"]').should("exist");
    cy.get('[data-testid="ingredientImage"]').should("exist");
    cy.get('[data-testid="ingredientName"]').should("exist");
    cy.get('[data-testid="ingredientCal"]').should("exist");
    cy.get('[data-testid="ingredientProt"]').should("exist");
    cy.get('[data-testid="ingredientFat"]').should("exist");
    cy.get('[data-testid="ingredientCar"]').should("exist");
    cy.get('[data-testid="closeModal"]').click();
    cy.get('[data-testid="ingredientModal"]').should("not.exist");
  });
});
