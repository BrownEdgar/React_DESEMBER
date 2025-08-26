import { useState } from 'react';
import { Layouts } from './Contexts/MyContext';
import Dashboard from './Dashboard';

function App() {
  const [data, setData] = useState([2, 4, 6]);

  return <div className='App'>
    <Layouts value={{ data, setData }}>
      <Dashboard />
    </Layouts>
  </div>;
}

export default App;
