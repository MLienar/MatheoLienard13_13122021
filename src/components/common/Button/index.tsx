import styled from "styled-components"


interface Props {
    text: string,
    active?: boolean,
}

const Btn = styled.button.attrs((props:Props) => ({
    active: props.active
}))`
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border: none;
  background-color: ${props => props.active ? "#00bc77" : "#acacac"};
  color: #fff;
  width: 100%;
`


export default function Button (props:Props) {
    return(
        <Btn active={props.active}>{props.text}</Btn>
    )
}