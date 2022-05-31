type CreateRoundData = {
  round: {
    player_name: string;
    category_id: number;
  };
};

type Round = {
  round: {
    id: number;
    player_id: number;
    questions: Question[];
    answers: Answer[];
  };
};

type Question = {
  id: number;
  description: string;
  options: QuestionOption[];
};

type QuestionOption = {
  id: number;
  label: string;
};

type Answer = {
  question_id: string;
  option_id: string;
};

type Categories = {
  categories: {
    id: number;
    name: string;
  };
};

type AxiosHandler = {
  config: {
    path: "/rounds" | "/categories";
    params?: string;
  };
  body: SendRoundResponseRequest | SendRoundRequest;
};

type SendRoundResponseRequest = {
  answer: {
    question_id: number;
    option_id: number;
  };
};

type SendRoundRequest = {
  round: {
    player_name: string;
    category_id: number;
  };
};

type InitialStepData = {
  category: number;
  player_name: string;
};

type AnswerResponse = {
  answer: {
    id: number;
    question_id: number;
    option_id: number;
    correct: boolean;
  };
};

type SendAnswerRequest = {
  question_id: number;
  option_id: number;
};
