import "./Users.scss";

function Users({ data, handleDelete }) {
  return <div className='Users'>
    {
      data.map((elem) => <div key={elem.id} className='Users__item'>
        <button className='Users__btn' onClick={() => handleDelete(elem.id)}>DELETE</button>
        <h1>{elem.username}</h1>
        <p>Email: {elem.email}</p>
      </div>)
    }
  </div>;
}

export default Users;
