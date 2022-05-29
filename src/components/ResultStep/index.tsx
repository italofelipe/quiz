import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { dynamicResultStyles } from "../../utils";
import { Button } from "../InitialStep/styles";
import Star from "../Star/Star";
import {
  LowerContainer,
  ProgressContainer,
  ResultStepContainer
} from "./styles";

type ResultStepProps = {
  onNextStep: () => void;
  roundData: AnswerResponse[] | undefined;
};
const ResultStep = ({ onNextStep, roundData }: ResultStepProps) => {
  const starsHandler = () => {
    const allQuestionsLength = new Array(5).fill("");
    return allQuestionsLength?.map((_, index) => (
      <Star
        key={index}
        checked={roundData![index] ? roundData![index].answer.correct : false}
      />
    ));
  };

  return (
    <ResultStepContainer>
      <ProgressContainer>
        <CircularProgressbar
          styles={buildStyles(dynamicResultStyles(roundData!.length))}
          value={roundData!.length}
          minValue={0}
          maxValue={5}
          text={String(`${roundData!.length}/5`)}
        />
      </ProgressContainer>
      <LowerContainer>
        <div>{starsHandler()}</div>
        <Button onClick={() => onNextStep()}>Jogar de novo</Button>
      </LowerContainer>
    </ResultStepContainer>
  );
};

export default ResultStep;
