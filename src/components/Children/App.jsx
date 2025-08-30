import { useState } from 'react';
import Modal from './Modal';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <div className='App'>
      <button onClick={toggleModal}>open Modal</button>
      {
        isOpen ? (
          <Modal toggleModal={toggleModal} variant='warn'>
            <h1>Modal title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nostrum commodi rem perferendis omnis?</p>
          </Modal>
        ) : null}

    </div>
  );
}

export default App;
