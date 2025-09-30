import './Input.scss';
import { ErrorMessage, Field } from 'formik';

function Input({ type = "text", name, placeholder, value, hideErrorMessage }) {
  return (
    <div className="Form__input">
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />

      {!hideErrorMessage && (
        <ErrorMessage
          name={name}
          component={
            ({ children: message }) => <p className='Form__error'>{message}</p>}
        />
      )}


    </div>
  );
}

export default Input;
