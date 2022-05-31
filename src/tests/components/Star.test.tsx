import { render } from "@testing-library/react";
import Star from "../../components/Star/Star";

describe("Tests for Star component", () => {
  it("Should render Star component in the screen", () => {
    const wrapper = render(<Star checked={true} />);
  expect(wrapper).toBeInTheDocument
  });

});
