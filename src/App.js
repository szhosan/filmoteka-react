import { useLocation } from "react-router-dom";
import Container from "./components/Container/Container.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ClassList from "./services/classList.js";
import "./sass/main.scss";

function App() {
  //change background image when user is in Library
  const { pathname } = useLocation();
  const headerClassList = new ClassList("header");
  headerClassList.add("header_libr", pathname.includes("/library"));
  //---

  return (
    <div className="main-wrapper">
      <header className={headerClassList}>
        <Container>
          <Header />
        </Container>
      </header>
      <main></main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
