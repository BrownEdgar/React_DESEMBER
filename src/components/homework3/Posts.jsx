import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function Posts() {
  const { data, setData } = useContext(MyContext)


  return (
    <div>
      {
        data.map((elem) => {
          return <div key={elem.id} style={{ padding: '10px',maxWidth:'718px',minWidth:'440px' }}>
            <h3 >{elem.title} </h3>
            <img
              src={elem.img}
              style={{
                width: "180px",
                borderRadius: "5px",
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />

            <button style={{
              display: 'block',
              borderRadius: '10px',
              background: 'black',
              color: 'white',
              marginTop: '10px'
            }}>
              {elem.year}
            </button>
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