import { useContext } from 'react'
import { MyContext } from './MyContext'
import './Posts.scss'

function Posts() {
  const { data } = useContext(MyContext)
  return (
    <div>
      {
        data.map((elem) => {
          return <div key={elem.id} style={{ padding: '10px', maxWidth: '718px', minWidth: '440px' }}>
            <h3 >{elem.title} </h3>
            <img
              src={elem.img}

            />
            <button>{elem.year}</button>
            <p style={{ color: 'rgba(0, 0, 0, 0.4)' }}>{elem.description}</p>
            <p>{elem.text}</p>
            <hr />
          </div>
        })
      }

    </div>
  )
}

export default Posts