const HeaderHomeSearchField = () => {
  return (
    <form className="header-form js-header-form">
      <input
        className="header-form__input"
        placeholder="Search films"
        type="input"
        name="input"
        autocomplete="off"
      />
      <button className="header-form__btn" aria-label="Search Button"></button>
    </form>
  );
};

export default HeaderHomeSearchField;
