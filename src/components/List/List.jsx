import "./List.css";

function List(props) {

  return <div className='List'>
    <ul>
      {
        props.data.map((elem) => <li key={elem}>{elem}</li>)
      }
    </ul>
  </div>;
}

export default List;
