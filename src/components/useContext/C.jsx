import { useContext } from 'react';
import { MyContext } from './Contexts/MyContext';
import D from './D';


function C() {
  const { count, setCount } = useContext(MyContext);

  return (
    <>
      <h2>Compoennt C</h2>
      <button>btn-{count}</button>
      <button onClick={() => setCount(count + 1)}>change Count</button>
      <D />
    </>
  );
}

export default C;
