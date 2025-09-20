import { Link } from 'react-router';
import './Contact.scss';

function Contact() {
  return <div className="contact">
    <h1>Contact Page</h1>
    <Link to="/" className="contact__btn">Go to Home</Link>
  </div>;
}

export default Contact;
