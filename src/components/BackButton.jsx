import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Styled from "./Styled"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
`;

const BackButton = ({children, onClick}) => {
  return (
    <Wrapper>
      <Styled.BackButton onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
        {children}
      </Styled.BackButton>
    </Wrapper>
  )
}

export default BackButton;