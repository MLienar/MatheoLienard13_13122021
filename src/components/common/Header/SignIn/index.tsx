import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Button = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c3e50;
    text-decoration: none;
    font-weight: 600;
`

const ButtonText = styled.p`
    margin-left: 10px;
`

export default function SignIn() {
    return(
        <Button href="/">
            <FontAwesomeIcon icon={faUserCircle} />
            <ButtonText>Sign In</ButtonText>     
        </Button>
    )
}