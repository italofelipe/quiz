import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import InitialStep from "../components/InitialStep";
import QuestionsStep from "../components/QuestionsStep";
import ResultStep from "../components/ResultStep";
import { axiosGet } from "../services";
import { ImageContainer, Main, PageTitle } from "../styles/styles";
import { calculateResult } from "../utils";
const AskImage = "/assets/ask_image.svg";
const BookImage = "/assets/book_image.svg";

const Home = () => {
  const [categories, setCategories] = useState<Categories["categories"][] | []>(
    []
  );
  const [error, setError] = useState(false);
  const [stepper, setStepper] = useState<"INITIAL" | "QUESTIONS" | "RESULT">(
    "INITIAL"
  );
  const [round, setRound] = useState<Round | null>(null);
  const [initialStepData, setInitiaStepData] = useState<InitialStepData>();
  const [roundResult, setRoundResult] = useState<AnswerResponse[]>();

  const handleGet = useCallback(() => {
    return axiosGet<{ categories: [{ id: number; name: string }] }>({
      path: "/categories",
    })
      .then((response) => {
        setCategories([...response.data.categories]);
      })
      .catch(() => setError(error));
  }, [error]);

  useEffect(() => {
    handleGet();
  }, [handleGet]);

  const handleRound = (initialStepData: InitialStepData, roundData: Round) => {
    setInitiaStepData(initialStepData);
    setRound(roundData);
    setStepper("QUESTIONS");
  };
  const handleStep = () => {
    if (stepper === "INITIAL") {
      return (
        <InitialStep
          categories={categories}
          onNextStep={(initialStepData, roundData) =>
            handleRound(initialStepData, roundData)
          }
        />
      );
    } else if (stepper === "QUESTIONS") {
      return (
        <QuestionsStep
          round={round!}
          onNextStep={(answers) => {
            setRoundResult(answers);
            setStepper("RESULT");
          }}
        />
      );
    } else {
      return (
        <ResultStep
          onNextStep={() => setStepper("INITIAL")}
          result={calculateResult(roundResult!)}
        />
      );
    }
  };

  return (
    <>
      <Head>
        <title>Basement App</title>
        <meta
          name="description"
          content="A quiz application made with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <PageTitle>Quiz App</PageTitle>
        {handleStep()}

        <ImageContainer>
          <Image
            src={AskImage}
            width={180}
            height={300}
            alt={"Imagem de uma pessoa pedindo algo"}
          />
          <Image
            src={BookImage}
            width={180}
            height={300}
            alt={"Imagem de um livro"}
          />
        </ImageContainer>
      </Main>
    </>
  );
};

export default Home;
