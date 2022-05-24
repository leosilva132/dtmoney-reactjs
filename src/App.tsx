import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { NewTransactionModal } from "./NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [modalTransactionIsOpen, setModalTransactionIsOpen] = useState(false);

  function handleModalTransactionOpen(){
      setModalTransactionIsOpen(true)
  }

  function handleModalTransactionClose(){
      setModalTransactionIsOpen(false)
  }

  return (
    <TransactionsProvider>
     <Header onModalTransactionIsOpen={handleModalTransactionOpen} />

     <Dashboard />

     <NewTransactionModal isOpen={modalTransactionIsOpen} onRequestClose={handleModalTransactionClose} />
     <GlobalStyle />
    </TransactionsProvider>
  );
}


