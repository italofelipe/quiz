import { useEffect, useState } from "react";
import { axiosPost } from "../../services";
import { Form, OptionButton, OptionsLabel } from "../../styles/styles";

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
    console.log("Numero da pergunta", questionsCounter);
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
    console.log("Round", round.round);
    setRoundData(round);
  }, [round]);
  useEffect(() => {}, [selectedAnswer]);
  return (
    <section>
      <span>Pergunta nº {questionsCounter + 1}:</span>
      {questionsCounter < 5 ? (
        <Form>
          <h3>{roundData.round.questions[questionsCounter].description}</h3>
          {roundData.round.questions[questionsCounter].options.map((option) => (
            <>
              <OptionButton
                type="radio"
                checked={selectedAnswer?.option_id === option.id}
                value={!selectedAnswer ? undefined : selectedAnswer.option_id}
                id={option.label}
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
              <OptionsLabel htmlFor={option.label} key={option.id}>
                {option.label}
              </OptionsLabel>
            </>
          ))}
        </Form>
      ) : (
        <p>We are computing the results, wait a minute.</p>
      )}
    </section>
  );
};

export default QuestionsStep;