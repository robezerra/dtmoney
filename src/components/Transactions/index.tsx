import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Transactions() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

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