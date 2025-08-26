import { useContext } from 'react';
import { Layouts } from './Contexts/MyContext';


function Posts() {
  const { data, setData } = useContext(Layouts);


  return <div>
    <h1>data: {JSON.stringify(data)}</h1>
    <button onClick={() => setData([])}>change date</button>

  </div>;
}

export default Posts;
