import { useSelector } from "react-redux"
import { selectUser } from "../../../services/selectors"
import styled from "styled-components"

const Header = styled.header`
    color: white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    font-size: 1.5rem;
`

const NameDisplay = styled.div`
    display: flex;
`

const FirstName = styled.h2`
    margin-right: 0.8rem;
`

const LastName = styled(FirstName)`
    margin-right: 0;
`

export default function ProfileHeader () {
    const user = useSelector(selectUser).user
    const firstName = user.firstName
    const lastName = user.lastName

    return(
        <Header>
            <h2>Welcome back</h2>
            { firstName && lastName ? (
                <NameDisplay>
                    <FirstName>{ firstName }</FirstName>
                    <LastName>{ lastName } !</LastName>
                </NameDisplay>
            ) : (
                <NameDisplay>
                    <h2>{ firstName }</h2>
                    <h2>{ lastName }</h2>
                </NameDisplay>
            )}
           
        </Header>
    )
}