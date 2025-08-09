import './Users.scss'

// props = {}
function Users({ data, handleDelete }) {
  return (
    <div className='Users'>
      {data.map((elem) => {
        return (
          <div className="Users__block" key={elem.id}>
            <h1>{elem.title}</h1>
            <p>{elem.description}</p>
            <button className='Users__btn' onClick={() => handleDelete(elem.id)}>DELETE</button>
          </div>
        )
      })}
    </div>
  );
}

export default Users;
