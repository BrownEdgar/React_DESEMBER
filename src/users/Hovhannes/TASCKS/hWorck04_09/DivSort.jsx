import React from "react";

function DivSort({ setLetrArr, letrArr }) {
  return <div>
    <button onClick={() => setLetrArr(letrArr.toSorted())}>sort</button>
  </div>;
}

export default DivSort;
