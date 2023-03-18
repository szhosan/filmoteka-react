import { useParams } from "react-router-dom";
import Container from "./components/Container/Container.jsx";
import Header from "./components/Header/Header.jsx";
import "./sass/main.scss";
function App() {
  //change background image when user is in Library
  const curURL = useParams();
  //---

  return (
    <header
      className={
        "header" + curURL ?? curURL.contains("/library") ? "header_libr" : ""
      }
    >
      <Container>
        <Header />
      </Container>
    </header>
  );
}

export default App;
