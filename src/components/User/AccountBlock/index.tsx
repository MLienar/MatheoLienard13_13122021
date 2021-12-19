import styled from "styled-components"
import Button from "../../common/Button"
import AccountType from "./AccountType"
import AccountBalance from "./AccountBalance"
import AccountSubtitle from "./AccountSubtitle"

type AccountDetails = {
    amount: number,
    accountName: string,
    available: boolean,
    code: string
}

interface Props {
    account: AccountDetails
}

const Block = styled.div`
    display: flex;
    background: white;
    padding: 20px 30px;
    margin: 20px 0;
    justify-content: space-between;
    align-items: center;
    width: clamp(400px, 50vw, 800px);
`

const Details = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`

export default function AccountBlock(props: Props) {
    const account = props.account
    return(
        <Block>
            <Details>
                <AccountType type={account.accountName} code={account.code}/>
                <AccountBalance balance={account.amount} />
                <AccountSubtitle available={account.available}/>
            </Details>
            <Button text="View transactions" active />
        </Block>
    )
}