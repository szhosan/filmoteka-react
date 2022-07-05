import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container header-container">
        <div className="header-nav__container">
          <div className="header-logo">
            <Link to="/" className="header-logo__link">
              <svg className="header-logo__svg" width="24px" height="24px">
                <use href="../../images/svg/header.svg#icon-logo"></use>
              </svg>
              <h2 className="header-logo__text">Filmoteka</h2>
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item header-nav__isActive js-header-nav__home">
                <Link to="/" className="header-nav__item-link">
                  {" "}
                  HOME{" "}
                </Link>
              </li>
              <li className="header-nav__item js-header-nav__myLib">
                <Link to="/library" className="header-nav__item-link">
                  {" "}
                  MY LIBRARY{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="js-container-markup"></div>
        <label className="switch-theme">
          <input type="checkbox" id="switch" name="theme" />
          <span className="switch-theme__slider"></span>
        </label>
      </div>
    </>
  );
};

export default Header;
