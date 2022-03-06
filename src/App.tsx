import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
      setIsModalOpen(true)
  }

  function handleCloseModal() {
      setIsModalOpen(false)
  }
  return (
    <>
      <Header onOpenModal={handleOpenModal}/>

      <Dashboard />

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
