import { useState } from 'react';
import Users from './components/Users';
import './App.scss'

function App() {
  const [data, setData] = useState(
    [
      {
        id: 1,
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos.'
      },
      {
        id: 2,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos.'
      },
      {
        id: 3,
        title: 'Web Solutions',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos.'
      },
    ]
  );

  const handleDelete = (id) => {
    const result = data.filter((elem) => {
      return elem.id !== id
    })
    setData(result)
  }
  const addBlock = () => {
    const x = {
      id: Math.round(Math.random() * 1e5),
      title: 'New Block Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur est quos. asdljsank'
    }

    const ifExist = data.some((elem) => elem.title.toLowerCase() === x.title.toLowerCase());

    if (!ifExist) {
      const newData = [...data, x];
      setData(newData)
    } else {
      alert("this product is alredy exist!")
    }
  }

  return (
    <div className='App'>
      <div className="buttons">
        <button onClick={addBlock}>Add new Block</button>
      </div>
      <Users data={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
