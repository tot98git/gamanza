import { useParams, Link } from 'react-router-dom';
import { COMICS_FORMAT, COMICS_FORMAT_LABELS } from '../../constants/comics';
import logo from '../../assets/logo.svg';

const Header = () => {
  const { format } = useParams();

  const keys = Object.keys(COMICS_FORMAT);

  const currFormat = (current) => {
    return current === format || (!current && !format) ? '_current' : '';
  };

  const itemRenderer = (key) => {
    const currentFormat = COMICS_FORMAT[key] || '';

    return (
      <div className="item" key={key}>
        <Link className={currFormat(currentFormat)} to={`/${currentFormat}`}>
          <span>{COMICS_FORMAT_LABELS[key] || key}</span>
        </Link>
      </div>
    );
  };

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-items">
          {itemRenderer('All')}
          {keys.map(itemRenderer)}
        </div>
      </div>
    </div>
  );
};

export default Header;
