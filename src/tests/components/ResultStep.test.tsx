import { render } from "@testing-library/react";
import ResultStep from "../../components/ResultStep";
import { answerResponseMock } from "../../__mocks__/answers.mock";

describe("Tests for Result Step component", () => {
  it("Should render Result Step component in the screen", () => {
    const wrapper = render(
      <ResultStep onNextStep={jest.fn} roundData={answerResponseMock} />
    );
    expect(wrapper).toBeInTheDocument;
  });
});
