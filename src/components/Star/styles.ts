import styled from "styled-components";

type ICustomIcon = {
  checked: boolean;
};
const IconContainer = styled.span<ICustomIcon>`
  svg {
    color: ${({ checked }) => (checked ? "#FFA000" : "unset")};
  }
`;
export { IconContainer };

