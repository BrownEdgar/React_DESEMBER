import { useState } from 'react';
import { MyContext } from './Contexts/MyContext';
import B from './B';


function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>App COMPONENT</h1>
      <MyContext value={{ setCount, count, name: "Hovhannes", skills: ["HTML", "CSS", "JS"] }}>
        <B />
      </MyContext>
    </div>
  );
}

export default App;
