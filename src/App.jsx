import { useState } from "react";
import Cards from "./components/cards";
import Modal from "./components/Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Cards onCardClick={openModal} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {modalContent}
      </Modal>
    </div>
  );
}
