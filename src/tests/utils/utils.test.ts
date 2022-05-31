import { calculateResult, dynamicResultStyles } from "../../utils";
import { answerResponseMock } from "../../__mocks__/answers.mock";

describe("Test for calculateResult logic", () => {
  it("Should calculate the result of a row", () => {
    const calculated = calculateResult(answerResponseMock);

    expect(calculated[0]).toEqual(answerResponseMock[0]);
  });

  it("Should return a object with strings describing the HEX for circular progress", () => {
    const dynamicResult = 2;
    expect(dynamicResultStyles(dynamicResult)).toEqual({
      pathColor: "#FF7043",
      textColor: "#FF7043",
      trailColor: "#BDBDBD",
    });
  });
  it("Should return a object with strings describing the HEX for circular progress", () => {
    const dynamicResult = 0;
    expect(dynamicResultStyles(dynamicResult)).toEqual({
      pathColor: "#F44336",
      textColor: "#F44336",
      trailColor: "#BDBDBD",
    });
  });
  it("Should return a object with strings describing the HEX for circular progress", () => {
    const dynamicResult = 3;
    expect(dynamicResultStyles(dynamicResult)).toEqual({
      pathColor: "#FDD835",
      textColor: "#FDD835",
      trailColor: "#BDBDBD",
    });
  });
  it("Should return a object with strings describing the HEX for circular progress", () => {
    const dynamicResult = 5;
    expect(dynamicResultStyles(dynamicResult)).toEqual({
      pathColor: "#66BB6A",
      textColor: "#43A047",
      trailColor: "#BDBDBD",
    });
  });
});
