import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

const FormContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  margin: 0 0 1rem;

  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    &:nth-child(2) {
      justify-content: start;
    }
  }
`;
type IFormInner = {
  size: number;
};
const FormInner = styled.div<IFormInner>`
  width: ${({ size }) => size}%;
  display: flex;
  align-items: center;
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.lgMax}) {
    width: 50%;
    justify-content: center;
    &:nth-child(2) {
      justify-content: start;
    }
    &:first-child {
      justify-content: flex-end;
    }
  }

  @media (min-width: 1376px)  {
    width: 50%;
    &:nth-child(2) {
      justify-content: start;
    }
    &:first-child {
      justify-content: flex-end;
    }
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  @media (min-width: ${mediaQueries.xsMin}) and (max-width: ${mediaQueries.xsMax}) {
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.smMin}) and (max-width: ${mediaQueries.smMax}) {
    width: 55vw;
  }
  @media (min-width: ${mediaQueries.mdMin}) and (max-width: ${mediaQueries.mdMax}) {
    width: 11.5rem;
  }
  @media (min-width: ${mediaQueries.lgMin}) and (max-width: ${mediaQueries.lgMax}) {
    width: 11.5rem;
  }
  @media (min-width: ${mediaQueries.xlMin}) {
    width: 15rem;
  }
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
  @media (min-width: ${mediaQueries.xlMin}) {
    width: 15rem;
  }

  &:focus {
    border-bottom: 2px solid #6c63ff;
    border: none;
  }
`;
const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: #6c63ff;
  border: none;
  color: #f5f5f5;
  font-weight: bold;
  &:hover {
    box-shadow: 1px 2px 7px #6c63bb;
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
    background-color: #bdbdbd;
    box-shadow: none;
  }
`;
export { Button, FormInner, FormContainer, Input, InputLabel, Select };

