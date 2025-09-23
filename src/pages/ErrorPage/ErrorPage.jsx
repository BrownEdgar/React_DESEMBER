import { Link } from 'react-router';

function ErrorPage() {
  return <div className="error-page">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/users">Go to Users Page</Link>
  </div>;
}

export default ErrorPage;
