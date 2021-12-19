import { ChangeEvent } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import * as loginAction from "../../../features/Login"
import { selectLogin } from "../../../services/selectors"

const Container = styled.div`
    display: flex;
    align-items: center;
`
const Label = styled.label`
    margin-left: 0.5rem;
`


interface Props {
    type: string,
    text: string
}

export default function FormCheckbox (props:Props) {
    const dispatch = useDispatch()  
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const rememberMe = e.currentTarget.checked
        dispatch(loginAction.remember(rememberMe))
    }

    const checked = useSelector(selectLogin).remember

    return(
        <Container>
            <input type="checkbox" checked={checked} id={props.type} onChange={handleChange} />
            <Label htmlFor={props.type}>{props.text}</Label>
        </Container>
    )
}