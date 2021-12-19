import ProfileButton from "./ProfileButton"
import LogOut from "./LogOut"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export default function LoggedInNav() {
    return(
        <Nav>
            <ProfileButton />
            <LogOut />
        </Nav>
    )
}