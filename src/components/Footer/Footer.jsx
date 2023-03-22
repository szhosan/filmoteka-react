import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-box">
        <p className="footer-box__text">
          &#x000A9; 2022 | All Rights Reserved |
        </p>
        <p className="footer-box__text developers">
          <span className="footer-box__text--after">Developed with</span>
          <Link className="footer__link" id="footer-modal-link" to={"/"}>
            GoIT Students
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
