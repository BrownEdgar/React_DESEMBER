// 1. useReducer
import { useReducer } from 'react';
import { initialState, reducer } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>
    <div className="buttons">
      <h2>{JSON.stringify(state, null, 2)}</h2>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "push" })}>Push</button>
      <button onClick={() => dispatch({ type: "uniq" })}>uniq</button>
      <button onClick={() => dispatch({ type: "sort" })}>sort</button>
      <button onClick={() => dispatch({ type: "delete", payload: { index: 2 } })}>delete</button>
      <button onClick={() => dispatch({ type: "save", payload: { n: 1 } })}>delete</button>
    </div>
  </div>;
}

export default App;
