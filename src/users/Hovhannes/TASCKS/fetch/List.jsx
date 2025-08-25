import React from "react";
import "./List.scss"


export default function List({data }) {
  function greenRed({data}){
  const green = []
  const red = []
  data.map((elem) => {
    elem.completed ? green.push(elem) : red.push(elem);
  })
  return [green, red]
}
const nData = greenRed({data})
//console.log(greenRed({data}));
  return <div className="List">
    {nData[0].map((elem) => {
      const cl = `"List__item" ${elem.completed
        ? "List__item_green"
        : "List__item_red"}`;
      return(
        <div key={elem.id} className={cl}>
          <h3>{elem.title}</h3>
        </div>
      )
    })}
    {nData[1].map((elem) => {
      const cl = `"List__item" ${elem.completed
        ? "List__item_green"
        : "List__item_red"}`;
      return(
        <div key={elem.id} className={cl}>
          <h3>{elem.title}</h3>
        </div>
      )
    })}
  </div>
}