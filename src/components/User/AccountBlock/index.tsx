import styled from "styled-components"
import Button from "../../common/Button"
import AccountType from "./AccountType"
import AccountBalance from "./AccountBalance"
import AccountSubtitle from "./AccountSubtitle"

interface AccountDetails {
    amount: number,
    accountName: string,
    available: boolean,
    code: string
}

const Block = styled.div`
    display: flex;
    background: white;
    padding: 20px;
    justify-content: space-between;
    width: clamp(400px, 50vw, 800px);
`

const Details = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`

export default function AccountBlock(props: AccountDetails) {
    return(
        <Block>
            <Details>
                <AccountType type={props.accountName} code={props.code}/>
                <AccountBalance balance={props.amount} />
                <AccountSubtitle available={props.available}/>
            </Details>
            <Button text="View transactions" />
        </Block>
    )
}