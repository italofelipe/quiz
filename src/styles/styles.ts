import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

const Main = styled.main`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100vw;
    height: 100vh;
    padding: 3rem 15px;
    border: 1px solid #ccc;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  width: 100vw;
  height: 100vh;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
`;
const Form = styled.form`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 90%;
    height: auto;
    border: 1px solid #ccc;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
  }
`;

const OptionsContainer = styled.section`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
  }
`;
const OptionButton = styled.input`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    opacity: 0;
    position: fixed;
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
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    font-size: 1.2rem;
    display: inline-block;
    background-color: #ddd;
    padding: 10px 20px;
    border: 2px solid #444;
    border-radius: 4px;
    margin: 1rem;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    background-color: #bfb;
  }
`;
const ImageContainer = styled.div`
  opacity: 0.4;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;
`;

export {
  Form,
  ImageContainer,
  Main,
  PageTitle,
  OptionButton,
  OptionsContainer,
  OptionsLabel,
};

