

function A({ y }) {
  console.log('A render');
  for (let i = 0; i < 1e4; i++) {
    console.log(i);

  }

  return <div>
    <h2>Component A</h2>
    <button onClick={y}>btn</button>
  </div>;
}

export default A;
