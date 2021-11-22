import styled from "styled-components";

const theme = {
  colors: {
    text: (a=1) => `rgba(10,10,10,${a})`,
    primary: (a=1) => `rgba(150,230,200,${a})`,
    secondary: (a=1) => `rgba(220,220,220,${a})`,
  },

}

const Title = styled.h2`
  
`;

const Main = styled.main`

`;

const Section = styled.section`
  
`;

const Button = styled.button`
  width: 100%;  
  height: 3rem;
  border-radius: 30px;
`;

const PrimaryButton = styled(Button)`
  color: ${theme.colors.text()};
  background-color: ${theme.colors.primary()};
`;

const BackButton = styled.button`
  background: none;
  border: none;

  font-size: 1.5rem;
  padding: 1.5rem;
`;


export default {
  Title,
  Main,
  Section,
  PrimaryButton,
  BackButton,
}