import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContainer } from "./styles";

type StarProps = {
  checked: boolean;
};

const Star = ({ checked }: StarProps) => {
  return (
    <IconContainer checked={checked}>
      <FontAwesomeIcon width={"1rem"} icon={faStar} />
    </IconContainer>
  );
};

export default Star;
