import { FormEvent, useState } from "react";
import { axiosPost } from "../../services";
import { Form } from "../../styles/styles";
import { FormContainer, FormInner, Input, InputLabel, Select } from "./styles";

type InitialStepProps = {
  onNextStep: (stepData: InitialStepData, round: Round) => void;
  categories: Categories["categories"][];
};

const InitialStep = ({ categories, onNextStep }: InitialStepProps) => {
  const [initialStepData, setInitialStepData] = useState<InitialStepData>({
    category: 3,
    player_name: "",
  });

  const handlePost = (
    event: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    return axiosPost<Round>({
      config: { path: "/rounds" },
      body: {
        round: {
          category_id: initialStepData.category!,
          player_name: initialStepData.player_name,
        },
      },
    })
      .then((CATEndpontResponse) => {
        onNextStep(initialStepData, CATEndpontResponse.data);
      })
      .catch();
  };
  return (
    <Form onSubmit={(event) => handlePost(event)}>
      <FormContainer>
        <FormInner size={30}>
          <InputLabel htmlFor="player-name">Jogador</InputLabel>
        </FormInner>
        <FormInner size={70}>
          <Input
            id="player-name"
            placeholder="Nome do jogador"
            value={initialStepData.player_name}
            onChange={(e) =>
              setInitialStepData({
                ...initialStepData,
                player_name: e.target.value,
              })
            }
          />
        </FormInner>
      </FormContainer>
      {categories.length > 0 ? (
        <FormContainer>
          <FormInner size={30}>
            <InputLabel htmlFor="category-select">Categoria</InputLabel>
          </FormInner>
          <FormInner size={70}>
            <Select
              id="category-select"
              onChange={(e) =>
                setInitialStepData({
                  ...initialStepData,
                  category: Number(e.target.value),
                })
              }
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {" "}
                  {cat.name}
                </option>
              ))}
            </Select>
          </FormInner>
        </FormContainer>
      ) : (
        <p>Fetching categories, wait a minute.</p>
      )}

      <button onClick={(event) => handlePost(event)}>Jogar</button>
    </Form>
  );
};

export default InitialStep;
