import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from '../../features/UserProfile'
import { selectLogin } from "../../services/selectors"
import styled from "styled-components"
import ProfileHeader from "../../components/User/ProfileHeader"

const Main  = styled.main`
    background: #12002b;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

export default function User () {
    const dispatch = useDispatch()
    const token = useSelector(selectLogin).token
    useEffect(() => {
        dispatch(fetchUserProfile(token))
    }, [dispatch, token])

    return(
        <Main>
            <ProfileHeader />
        </Main>
    )
}