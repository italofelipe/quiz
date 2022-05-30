import { useEffect, useState } from "react";
import { axiosPost } from "../../services";
import { Form } from "../../styles/styles";
import {
  OptionButton,
  OptionsLabel,
  QuestionAndStrikesCounter,
  QuestionsHeader,
  QuestionTitle
} from "./styles";

type ResultStepProps = {
  onNextStep: (allAnswers: AnswerResponse[]) => void;
  round: Round;
};

const QuestionsStep = ({ onNextStep, round }: ResultStepProps) => {
  const [questionsCounter, setQuestionsCounter] = useState<number>(0);
  const [roundData, setRoundData] = useState(round);
  const [answers, setAnswers] = useState<AnswerResponse[]>([]);
  const [error, setError] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<SendAnswerRequest>();

  const handleSendAnswer = (questionData: SendAnswerRequest) => {
    questionsCounter === 4
      ? onNextStep(answers)
      : setQuestionsCounter(questionsCounter + 1);
    return axiosPost<AnswerResponse>({
      config: { path: "/rounds", params: `/${round.round.id}/answers` },
      body: {
        answer: {
          question_id: questionData.question_id,
          option_id: questionData.option_id,
        },
      },
    })
      .then((answerResponse) => {
        setAnswers([...answers, answerResponse.data]);
        setSelectedAnswer(undefined);
        return;
      })
      .catch(() => setError(true));
  };
  useEffect(() => {
    setRoundData(round);
  }, [round]);
  useEffect(() => {}, [selectedAnswer]);

  const filterByRightAnswer = (answersList: AnswerResponse[]) => {
    return answersList.filter((answer) => answer.answer.correct);
  };
  return (
    <>
      {questionsCounter < 5 ? (
        <Form>
          <QuestionsHeader>
            {error && <p>Houve um erro ao processar a sua resposta.</p>}
            <QuestionAndStrikesCounter>
              <p data-testid="questions-counter">
                {`${questionsCounter + 1}/${round.round.questions.length}`}:
              </p>
              <p data-testid="strikes-counter">{`Certas ${filterByRightAnswer(answers).length}`}</p>
            </QuestionAndStrikesCounter>
            <QuestionTitle>
              {roundData.round.questions[questionsCounter].description}
            </QuestionTitle>
          </QuestionsHeader>
          {roundData.round.questions[questionsCounter].options.map((option) => (
            <>
              <OptionButton
                type="radio"
                checked={selectedAnswer?.option_id === option.id}
                value={!selectedAnswer ? undefined : selectedAnswer.option_id}
                id={option.label}
                data-testid="option-button"
                onChange={() => {
                  setSelectedAnswer({
                    option_id: option.id,
                    question_id: option.id,
                  });
                  handleSendAnswer({
                    question_id: roundData.round.questions[questionsCounter].id,
                    option_id: option.id,
                  });
                }}
              />
              <OptionsLabel data-testid="option-button-label" htmlFor={option.label} key={option.id}>
                {option.label}
              </OptionsLabel>
            </>
          ))}
        </Form>
      ) : (
        <p>We are computing the results, wait a minute.</p>
      )}
    </>
  );
};

export default QuestionsStep;
