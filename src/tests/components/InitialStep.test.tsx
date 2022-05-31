import { render } from "@testing-library/react";
import InitialStep from "../../components/InitialStep";
import { categoriesMock } from "../../__mocks__/categories.mock";

describe("InitialStep component tests", () => {
  it("Should render InitialStep component", () => {
    const wrapper = render(
      <InitialStep categories={categoriesMock} onNextStep={jest.fn} />
    );

    expect(wrapper).toBeInTheDocument;
  });
});
