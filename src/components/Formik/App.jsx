import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import React, { useEffect, useState } from "react";

const initialValues = {
  target: '',
  count: ''
}
const targets = ['todos', 'posts', 'comments', 'albums', 'photos'];

function App() {
  const [data, setData] = useState({ target: '', count: '' });

  const handleSubmit = (values) => {
    setData(values);
  }


  useEffect(() => {
    const { target, count } = data;

    axios.get(`https://jsonplaceholder.typicode.com/${target}`, {
      params: {
        _limit: count,
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }, [data]);

  return (
    <div className='App'>
      <h1>Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field as="select" name="target" >
            {targets.map(target => <option value={target} key={target}>{target}</option>)}
          </Field>
          <Field type="number" name="count" />
          <button type="submit">Submit</button>
        </Form>


      </Formik>
    </div>
  );
}

export default App;
