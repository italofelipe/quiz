import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

const FormContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  margin: 0 0 1rem;
`;
type IFormInner = {
  size: number;
};
const FormInner = styled.div<IFormInner>`
  width: ${({ size }) => size}%;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 55vw;
  }
  padding: 0.5rem;
`;

const InputLabel = styled.label`
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    font-size: 10px;
  }
  margin: 0 1rem;
`;
const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  margin: 15px 0;
  padding: 0.5em;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    background: none;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    margin: 15px 0;
    padding: 0.5em;
    width: 55vw;
  }

  &:focus {
    border-bottom: 2px solid #6c63ff;
    border: none;
  }
`;

export { FormInner, FormContainer, Input, InputLabel, Select };

