import { useContext } from 'react';
import { MyContext } from './Contexts/MyContext';



function D() {
  const { skills } = useContext(MyContext)
  return <div>
    {skills.map((elem) => <h2 key={elem}>{elem}</h2>)}
  </div>;
}

export default D;
