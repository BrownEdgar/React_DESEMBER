import { ErrorMessage, Field, Form, Formik } from 'formik';
import './UserForm.scss';
import { useNavigate, useOutletContext } from 'react-router';
import * as yup from "yup";

const initialValues = {
  name: '',
  email: '',
  password: '',
}

function UserForm() {
  const navigate = useNavigate();
  const { addUser } = useOutletContext();
  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: Date.now(),
      ...values
    };
    addUser(user);
    resetForm();
    navigate('/users');
  }


  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  })

  return <div className='UserForm'>
    <h1>Add New User</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <Field name="name" placeholder="Name" required />
          <ErrorMessage name="name" component="p" className="error" />
          <Field name="email" type="email" placeholder="Email" required />
          <ErrorMessage name="email" component="p" className="error" />
          <Field name="password" type="password" placeholder="Password" required />
          <ErrorMessage name="password" component="p" className="error" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>;
}

export default UserForm;
