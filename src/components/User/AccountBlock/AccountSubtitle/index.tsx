interface Props {
    available: boolean
}

export default function AccountSubtitle(props:Props) {
    return(
        <p>{ props.available ? ("Available"): ("Current")} Balance</p>
    )
}