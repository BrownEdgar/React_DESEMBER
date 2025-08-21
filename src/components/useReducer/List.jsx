
import './List.scss'
function List({ data }) {
  return <div className='List'>
    {data.map((elem) => {
      const cl = `List__item ${elem.completed ? 'List__item-green' : 'List__item-red'}`;
      return (
        <div key={elem.id} className={cl}>
          <h3>{elem.title}</h3>
        </div>
      )
    })}
  </div>;
}

export default List;
