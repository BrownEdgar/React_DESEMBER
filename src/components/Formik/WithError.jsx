import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string, } from 'yup';

import './WithError.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users';


const initialValues = {
  username: '',
  password: '',
  email: '',
}


function WithError() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, formik) => {
    console.log(values)

    const user = {
      ...values,
      id: String(Date.now())
    }

    axios.post('http://localhost:3000/users', user)
      .then(() => setUsers([...users, user]))
      .then(() => formik.resetForm())
      .catch(err => console.log(err))
  }


  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(err => console.log(err))
  }

  const schema = object({
    username: string()
      .min(3, 'Username must be at least 3 characters')
      .max(10, 'Username must be at most 10 characters')
      .required('Username is required'),
    password: string().matches(/^[A-Z]/, 'Password must start with uppercase')
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is required'),
    email: string().email('Invalid email').required('Email is required'),
  })

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, []);


  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}>
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" type="text" />
          <ErrorMessage name="username" component="p" className="error" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" component="p" className="error" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="p" className="error" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <hr />
      <Users data={users} handleDelete={handleDelete} />
    </div>
  )
}

export default WithError