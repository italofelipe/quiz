import { cy, it } from "local-cypress";

describe("Test for all steps of the application", () => {
  const repeatArr = new Array(4).fill("");
  it("Should verify the player name input and type", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").should("be.disabled");
    cy.get("input[data-testid=player-name]").type("Basement app");
    cy.get("button").should("be.enabled");
  });

  it("Should verify wether the categories select exists and have values in it", () => {
    cy.get("select[data-testid=categories-select]")
      .select("Matemática")
      .should("have.value", "3");
    cy.get("select[data-testid=categories-select]")
      .select("História")
      .should("have.value", "4");
    cy.get("select[data-testid=categories-select]")
      .select("Geografia")
      .should("have.value", "5");
  });

  it("Should submit the form", () => {
    cy.get("form").submit();
  });

  it("Should render both the quest counter and the strikes counter", () => {
    cy.get("p[data-testid=questions-counter]").should("contain", "1/5");
    cy.get("p[data-testid=strikes-counter]").should("contain", "Certas");
  });

  it("Should select an answer and verify wether the quest counter has raised up", () => {
    cy.get("p[data-testid=questions-counter]")
      .siblings()
      .should("have.length", "1");

    repeatArr.forEach((_, index) => {
      cy.get("label[data-testid=option-button-label]").first().click();
      cy.get("p[data-testid=questions-counter]").should("contain", `/5`);
    });
    cy.get("label[data-testid=option-button-label]").first().click();
  });

  it("Should display the result", () => {
    cy.get("svg.fa-star").should("have.length", "5");
  });
});
