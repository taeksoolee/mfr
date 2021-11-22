import Styled from "./Styled";

const Layout = ({children}) => {
  return (
    <Styled.Main>
      {children}
    </Styled.Main>
  )
}

export default Layout;