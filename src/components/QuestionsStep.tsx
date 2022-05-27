import { useState } from "react";

type ResultStepProps = {
  onNextStep: () => void;
  round: Round;
};

const QuestionsStep = ({ onNextStep, round }: ResultStepProps) => {
  const [questionsCounter, setQuestionsCounter] = useState(
    round.questions.length
  );
  // TODO: IMPLEMENTAR A ROTAÇÃO DE PERGUNTAS
  return (
    <section>
      <h2>Questions Step aaaaaaa</h2>
      <span>Pergunta {round.questions[0].id}</span>
      <button onClick={() => onNextStep()}>Ver o resultado</button>
    </section>
  );
};

export default QuestionsStep;
