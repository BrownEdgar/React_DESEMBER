import s from './App.module.css'

function App() {

  const style = {
    color: 'red',
    backgroundImage: `url("https://images.unsplash.com/photo-1568271941775-36823f9c1fef?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
  }

  return <div className={s.App}>
    <h1 style={style}> Module CSS in React</h1>
  </div>;
}

export default App;
