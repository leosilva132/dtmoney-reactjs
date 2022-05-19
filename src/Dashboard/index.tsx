

import { Summary } from "../Summary";
import { TransacationTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard(){
    return (
        <Container >
            <Summary />
            <TransacationTable />
        </Container>
    );
}