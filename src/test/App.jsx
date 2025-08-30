import { Fragment, useState } from 'react';


export default function App() {
  const [arr, setarr] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);


  return (
    <div className='App'>
      {
        arr.map((elem, index) => {
          return (
            <Fragment key={elem}>
              <p>{elem}</p>
            </Fragment>
          )
        })
      }
    </div>
  );
}
