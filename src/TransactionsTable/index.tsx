import { useEffect } from 'react';
import { api } from '../services/api';
import { Container } from './styles'

export function TransacationTable(){


    useEffect(()=> {
        api.get('transacations')
        .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td  className='deposit'>R$ 12000,00</td>
                        <td>Venda</td>
                        <td>19/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='withdraw'>- R$ 1000,00</td>
                        <td>Casa</td>
                        <td>22/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}