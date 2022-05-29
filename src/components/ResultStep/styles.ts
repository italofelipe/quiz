import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

const ResultStepContainer = styled.section`
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
const ProgressContainer = styled.div`
  width: 25%;
`;
const LowerContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  div {
    margin: 1rem 0;
  }
`;

export { LowerContainer, ProgressContainer, ResultStepContainer };

