const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-nav__container">
          <div className="header-logo">
            <a className="header-logo__link" href="#">
              <svg className="header-logo__svg" width="24px" height="24px">
                <use href="./images/svg/header.svg#icon-logo"></use>
              </svg>
              <h2 className="header-logo__text">Filmoteka</h2>
            </a>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item header-nav__isActive js-header-nav__home">
                <a className="header-nav__item-link" href="#">
                  {" "}
                  HOME{" "}
                </a>
              </li>
              <li className="header-nav__item js-header-nav__myLib">
                <a className="header-nav__item-link" href="#">
                  {" "}
                  MY LIBRARY{" "}
                </a>
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
    </header>
  );
};

export default Header;
