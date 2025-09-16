import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string, } from 'yup';

import './WithError.scss'

function WithError() {
  const handleSubmit = (values, formik) => {
    console.log(formik)
    formik.resetForm()
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
  })

  return (
    <div>
      <h1>WithError</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="p" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" />
        </Form>
      </Formik>
    </div>
  )
}

export default WithError