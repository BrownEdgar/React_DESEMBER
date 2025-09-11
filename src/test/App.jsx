import { useCallback, useMemo, useState } from "react";
import A from './A';
// Կոմպոնոնտը թարմանում է նաև props-ի փոփոխությունից
// եթե թարմանում է նրա ծնողը վերադաս կոմպոնենտը
// useCalback, useMemo




function App() {
  const [count, setCount] = useState(1);
  const y = useCallback(() => {
    console.log('click');
  }, [])

  const ComponentMemo = useMemo(() => <A y={y} />, [y])
  return <div className='App'>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>add Count</button>
    {ComponentMemo}
  </div>;
}

export default App;
