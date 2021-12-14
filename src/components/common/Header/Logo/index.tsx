import { logo }  from "../../../../assets/img"
import styled from 'styled-components'

const LogoDiv = styled.img`
    height: clamp(40px, 8vh, 60px);
    width: auto;
`

export default function Logo() {
    return (
        <a href="/">
            <LogoDiv src={logo} alt="logo" />    
            <h1 className="sr-only">Argent Bank</h1>
        </a> 
    )
}