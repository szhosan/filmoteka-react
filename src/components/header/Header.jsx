import { Link, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import SVGLogo from "../../images/svg/header.svg";
import HeaderHomeSearchField from "./HeaderHomeSearchField";
import HeaderLibraryNavBtns from "./HeaderLibraryNavBtns";

const activeLinkHighlight = (navData) =>
  navData.isActive
    ? "header-nav__item-link header-nav__isActive"
    : "header-nav__item-link";

const Header = () => {
  return (
    <>
      <div className="container header-container">
        <div className="header-nav__container">
          <div className="header-logo">
            <Link to="/" className="header-logo__link">
              <svg className="header-logo__svg" width="24px" heigh="24px">
                <use href={`${SVGLogo}#icon-logo`} />
              </svg>
              <h2 className="header-logo__text">Filmoteka</h2>
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item js-header-nav__home">
                <NavLink to="/" className={activeLinkHighlight}>
                  {" "}
                  HOME{" "}
                </NavLink>
              </li>
              <li className="header-nav__item js-header-nav__myLib">
                <NavLink to="/library" className={activeLinkHighlight}>
                  {" "}
                  MY LIBRARY{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="js-container-markup">
          <Routes>
            <Route path="/" element={<HeaderHomeSearchField />} />
            <Route path="/library" element={<HeaderLibraryNavBtns />} />
          </Routes>
        </div>
        <label className="switch-theme">
          <input type="checkbox" id="switch" name="theme" />
          <span className="switch-theme__slider"></span>
        </label>
      </div>
    </>
  );
};

export default Header;
