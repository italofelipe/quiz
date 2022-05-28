import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { dynamicResultStyles } from "../../utils";
import { ProgressContainer, ResultStepContainer } from "./styles";

type ResultStepProps = {
  onNextStep: () => void;
  result: number;
};
const ResultStep = ({ onNextStep, result }: ResultStepProps) => {
  return (
    <ResultStepContainer>
      <ProgressContainer>
        <CircularProgressbar
          styles={buildStyles(dynamicResultStyles(result))}
          value={result}
          minValue={0}
          maxValue={5}
          text={String(`${result} / 5`)}
        />

        <p>Seu placar é de : {result} acertos!</p>
        <button onClick={() => onNextStep()}>Jogar de novo</button>
      </ProgressContainer>
    </ResultStepContainer>
  );
};

export default ResultStep;
