import { Container } from "./styles";

export function Transactions() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Padeiro</td>
                        <td className="deposit">R$ 1000</td>
                        <td>Fabricação</td>
                        <td>20/10/20</td>
                    </tr>
                    <tr>
                        <td>Agiota</td>
                        <td className="withdraw">- R$ 1000</td>
                        <td>Fabricação</td>
                        <td>20/10/20</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}