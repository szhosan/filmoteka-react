import s from "./header.module.scss";

const Header = () => {
  return (
    <div className={s.container + " " + s.header_container}>
      <div className={s.header - nav__container}>
        <div className="s.header-logo">
          <a className="s.header-logo__link" href="#">
            <svg className="s.header-logo__svg" width="24px" height="24px">
              <use href="./images/svg/header.svg#icon-logo"></use>
            </svg>
            <h2 className="s.header-logo__text">Filmoteka</h2>
          </a>
        </div>
        <nav className="s.header-nav">
          <ul className="s.header-nav__list">
            <li className="s.header-nav__item header-nav__isActive js-header-nav__home">
              <a className="s.header-nav__item-link" href="#">
                {" "}
                HOME{" "}
              </a>
            </li>
            <li className="s.header-nav__item js-header-nav__myLib">
              <a className="s.header-nav__item-link" href="#">
                {" "}
                MY LIBRARY{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="s.js-container-markup"></div>
      <label className="s.switch-theme">
        <input type="checkbox" id="switch" name="theme" />
        <span className="s.switch-theme__slider"></span>
      </label>
    </div>
  );
};

export default Header;
