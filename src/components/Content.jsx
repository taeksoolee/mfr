import styled from 'styled-components';
import Styled from "./Styled"

const ContentWrapper = styled(Styled.Section)`
  
`;

const Content = ({children}) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default Content;
