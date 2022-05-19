
import logoImg from '../assets/logo.svg';
import { Container, Contente } from './styles';

interface HeaderPros {
    onModalTransactionIsOpen: () => void;
}

export function Header({onModalTransactionIsOpen}: HeaderPros){

    return (
        <Container>
            <Contente>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onModalTransactionIsOpen}>
                Nova transação
            </button>
            </Contente>
        </Container>
    );
}