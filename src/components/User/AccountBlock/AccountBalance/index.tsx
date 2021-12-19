interface Props {
    balance: number
}

export default function AccountBalance(props: Props) {
    return (
        <h3>{props.balance} $</h3>
    )
}