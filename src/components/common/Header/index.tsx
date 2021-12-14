import SignIn from "./SignIn"
import Logo from "./Logo" 
import styled from "styled-components"

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: clamp(10px, 2vh, 25px) clamp(20px, 4vh, 50px);
`

export default function Header () {
    return(
        <HeaderContainer>
            <Logo/>
            <SignIn />
        </HeaderContainer>
    )
}