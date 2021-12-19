type account = {
    amount: number,
    accountName: string,
    available: boolean,
    code: string
}

const accounts:account[] = [
    {
        amount: 2082.79,
        accountName: 'Checking',
        available: true,
        code: "x8349"
    },
    {
        amount: 10928.42,
        accountName: 'Savings',
        available: true,
        code: "x6712"
    },
    {
        amount: 184.30,
        accountName: 'Credit Card',
        available: false,
        code: "x8349"
    }
]

export default accounts