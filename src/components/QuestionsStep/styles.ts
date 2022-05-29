import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

const OptionsContainer = styled.section`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
  }
`;
const OptionButton = styled.input`
  opacity: 0;
  position: fixed;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 0;
    margin: 1rem;

    &:checked + label {
      border: 2px dashed #444;
    }
    &:focus + label {
      background-color: #bfb;
      border-color: #4c4;
    }
  }
`;
const OptionsLabel = styled.label`
  font-size: 1.2rem;
  display: inline-block;
  background-color: #ddd;
  padding: 1rem 0.5rem;
  border: 2px solid #444;
  border-radius: 4px;
  margin: 1rem;
  text-align: center;
  width: 15rem;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
  }
  &:hover {
    cursor: pointer;
    background-color: #bfb;
  }
`;

const QuestionsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  margin: 1rem 0;
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    padding: 0 3rem;
  }
  @media (min-width: ${mediaQueries.lgMin}) {
    padding: 0 3rem;
  }
`;

const QuestionAndStrikesCounter = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 1rem 0;
`;
export {
  OptionsContainer,
  OptionButton,
  OptionsLabel,
  QuestionAndStrikesCounter,
  QuestionsHeader,
};

