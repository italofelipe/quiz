const calculateResult = (result: AnswerResponse[]): number => {
  return result.map((answer) => answer.answer.correct).length;
};

const dynamicResultStyles = (
  result: number
): { textColor: string; pathColor: string; trailColor: string } => {
  if (result === 0) {
    return {
      pathColor: "#F44336",
      textColor: "#F44336",
      trailColor: "#BDBDBD",
    };
  } else if (result > 0 && result < 3) {
    return {
      pathColor: "#FF7043",
      textColor: "#FF7043",
      trailColor: "#BDBDBD",
    };
  } else if (result === 3) {
    return {
      pathColor: "#FDD835",
      textColor: "#FDD835",
      trailColor: "#BDBDBD",
    };
  } else {
    return {
      pathColor: "#66BB6A",
      textColor: "#43A047",
      trailColor: "#BDBDBD",
    };
  }
};

export { calculateResult, dynamicResultStyles };

