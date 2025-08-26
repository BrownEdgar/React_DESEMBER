

import { useState } from 'react'
import './List.scss'


function List({ data }) {
    const [sorted,setSorted] =useState(false)
   const greenCount = data.filter((elem)=>elem.completed).length
   const redCount = data.filter((elem)=> !elem.completed).length
   const newData = sorted?[...data].sort((a,b)=> b.completed - a.completed):data
 
    return (
        <div className='List'>
               <button className='List__grenCount'>Completed {greenCount }</button>
               <button className='List__redCount' >No Completed {redCount}</button>
               <button className='List__sort' onClick={()=>setSorted(true)}>Sort</button>
            {newData.map((elem) => {
                const cl = `List__item ${elem.completed ?'List__item-green' : 'List__item-red'}`
                return (
              
                    <div key={elem.id} className={cl}>
             
                         <h3>{elem.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default List


