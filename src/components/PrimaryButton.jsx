import styled from "styled-components";
import Styled from "./Styled"


const ButtonWrapper = styled.div`
  width: calc(${({width}) => (width)}% - ${({padding})=>(padding*2)}rem);
  padding: ${({padding})=>(padding)}rem;
`;

const PrimaryButton = ({children, onClick, padding, width}) => {
  padding = (padding ? padding : 3);
  width = (width ? width : 100);

  const handleClick = (e) => {
    onClick && onClick(e);
  }

  return (
    <ButtonWrapper padding={padding} width={width}>
      <Styled.PrimaryButton onClick={handleClick}>
        {children}
      </Styled.PrimaryButton>
    </ButtonWrapper>
  )
}

export default PrimaryButton;