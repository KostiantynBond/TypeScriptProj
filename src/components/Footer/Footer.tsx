import './Footer.scss';
import { scrollTop } from '../../utils/scrollHelper';
import { NavLink  } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="wrapper__footer footer" data-theme={theme}>
      <div className="footer__container container">
        <NavLink
          to="/"
          className="footer__logo-image image"
        >
          <img
            src="/img/Logo.png"
            alt=""
            className="footer__logo-img img"
          />
        </NavLink>
        <nav className="footer__nav nav">
          <ul className="nav__list nav__list--footer">
            <li className="nav__item">
              <a
                href="https://github.com/KostiantynBond/TypeScriptProj"
                className="nav__link"
              >
              Github
              </a>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contacts"
                className="nav__link"
              >
              Contacts
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/rights"
                className="nav__link"
              >
              Rights
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__back-to-top">
          <p className="footer__back-to-top-text text">Back to top</p>
          <button
            className="footer__back-to-top-button button button--secondary button--round"
            onClick={scrollTop}
          >
            <i className="button__icon fa-solid fa-angle-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
 
};
