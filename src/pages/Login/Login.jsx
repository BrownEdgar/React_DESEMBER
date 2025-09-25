import './Login.scss';
import { Form, Formik } from 'formik';
import Input from '../../shared/UI/Input/Input';
import * as yup from "yup";
import { useNavigate } from 'react-router';

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).strict()


function Login() {
  const navigate = useNavigate();
  const handleSubmit = ({ email, password }) => {
    if (email === 'admin@gmail.com' && password === '123456') {
      localStorage.setItem('token', 'admin');
      navigate('/users');
    } else {
      localStorage.removeItem('token');
      alert('Invalid credentials')
    }
  }
  return (
    <div className='Login'>
      <h1>Login Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='Login__form'>
          <Input type="email" name='email' placeholder="Email" />
          <Input type="password" name='password' placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
