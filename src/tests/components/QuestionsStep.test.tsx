import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import QuestionsStep from "../../components/QuestionsStep";
import { roundMock } from "../../__mocks__/round.mock";

describe("InitialStep component tests", () => {
  it("Should render InitialStep component", () => {
    const wrapper = render(
      <QuestionsStep round={roundMock} onNextStep={jest.fn} />
    );
    expect(wrapper).toBeInTheDocument;
  });
  it("Should trigger a click Event", () => {
    render(<QuestionsStep round={roundMock} onNextStep={jest.fn} />);
    act(() => {
      const option = screen.getByTestId("option-button");
      fireEvent.click(option);
      expect(screen.getByText("Question 2")).toBeInTheDocument;
    });
  });
});
