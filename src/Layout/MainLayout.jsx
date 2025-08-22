import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import LoginModal from "../components/LoginModal/LoginModal";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Navbar openModal={handleOpenModal} />
      {children}
      <Contact />
      <LoginModal isOpen={isModalOpen} closeModal={handleCloseModal} />
    </div>
  );
}
