import { useEffect } from "react";
import { Container } from "./styles";

export function Transactions() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions').then(response => response.json())
        .then(data => console.log(data))
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