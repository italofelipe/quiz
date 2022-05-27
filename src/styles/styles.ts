import styled from "styled-components";

const mediaQueries = {
  xsMin: "320px",
  xsMax: "576px",
  smMin: "577px",
  smMax: "768px",
  mdMin: "769px",
  mdMax: "1023px",
  lgMin: "1024px",
  lgMax: "1376px",
  xlMin: "1377px",
};

const Main = styled.main`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 100vw;
    height: 100vh;
    padding: 10px 15px;
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
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 60vw;
    height: 60vh;
    border: 1px solid #ccc;
  }
`;

const Input = styled.input`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    background: none;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    margin: 15px 0;
    padding: 0.5em;
  }

  &:focus {
    border-bottom: 2px solid #6c63ff;
    border: none;
  }
`;

export { Form, Input, Main, PageTitle };

