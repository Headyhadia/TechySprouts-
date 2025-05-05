import { useState } from 'react';
import styles from './App.module.css';
import  Navbar  from "./components/Navbar/Navbar";
import Learn from "./components/Learn/Learn";
import Whyus from './components/Whyus/Whyus';
import Program from './components/Programs/Programs';
import Contact from './components/Contact/Contact';
import LoginModal from './components/LoginModal/LoginModal';

function App() {
const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => {
  setIsModalOpen(true);
}

const handleCloseModal =() => {
  setIsModalOpen(false);
}

  return (
    <div className={styles.App}>
      <Navbar openModal={handleOpenModal} />
      <LoginModal isOpen={isModalOpen} closeModal={handleCloseModal}/>
      <Learn />
      <Whyus />
      <Program/>
      <Contact />
    </div>
  )
}

export default App
