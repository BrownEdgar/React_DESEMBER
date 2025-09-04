import { useState } from 'react';
import Modal from './Modal';
import './App.scss';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen)
  const [currentIndex, setcurrentIndex] = useState(-1);
  const [arr, setArr] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);
  const deleteItem = () => {
    setArr(arr.toSpliced(currentIndex, 1))
  }

  return (
    <div className='App'>
      <div className="App__block">
        {arr.map((elem, index) => {
          return (
            <div key={elem}>
              <h2>{elem}</h2>
              <button onClick={() => {
                toggleModal()
                setcurrentIndex(index)
              }}>Delete</button>
            </div>
          )
        })}
      </div>


      {
        isOpen ? (
          <Modal toggleModal={toggleModal} variant='error'>
            <h1>Are you sure?</h1>
            <button onClick={toggleModal}>cancel</button>
            <button onClick={() => {
              deleteItem()
              toggleModal()
            }}>DELETE</button>
          </Modal>
        ) : null}

    </div>
  );
}

export default App;
