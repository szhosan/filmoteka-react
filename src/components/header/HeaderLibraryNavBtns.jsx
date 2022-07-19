import { useLocation } from "react-router-dom";

const HeaderLibraryNavBtns = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="header-filter">
      <button className="header-filter__btn" name="watched-btn">
        WATCHED
      </button>
      <button className="header-filter__btn" name="queue-btn">
        QUEUE
      </button>
    </div>
  );
};

export default HeaderLibraryNavBtns;
