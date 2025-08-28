import './Title.scss'

function Title({ title, variant }) {
  return (
    <h1 className={`title title__${variant}`}>{title}</h1>
  );
}

export default Title;
