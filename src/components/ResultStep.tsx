type ResultStepProps = {
  onNextStep: () => void;
};
const ResultStep = ({ onNextStep }: ResultStepProps) => {
  return (
    <section>
      <h2>Resultado Step aaaaaaa</h2>
      <button onClick={() => onNextStep()}>Jogar de novo</button>
    </section>
  );
};

export default ResultStep;
