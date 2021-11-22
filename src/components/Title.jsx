import styled from "styled-components";
import BackButton from "./BackButton";
import Styled from "./Styled";

const TitleWrapper = styled.div`
  width: 100vw;
  height: 3rem;
  text-align: center;
`;

const Title = ({children, onBack}) => {
  return (
    <TitleWrapper>
      <Styled.Title>{children}</Styled.Title>
      {onBack && <BackButton onClick={onBack}></BackButton>}
    </TitleWrapper>
  )
}

export default Title;