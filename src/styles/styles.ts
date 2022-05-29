import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

const Main = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3rem 15px;

  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.mdMin}) {
    width: 100vw;
    height: 100vh;
    padding: 3rem 15px;
    border: 1px solid #ccc;
  }

  width: 100vw;
  height: 100vh;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
`;
const Form = styled.form`
  border: 1px solid #ccc;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: auto;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 100%;

    padding: 10px;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 90%;
    padding: 1rem 3rem;
  }
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    width: 80%;
    padding: 1rem 0;
  }
  @media (min-width: ${mediaQueries.lgMin}) {
    width: 75%;
    padding: 1rem 0;
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
};

