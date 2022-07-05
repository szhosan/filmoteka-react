import Container from "./components/Container/Container.jsx";
import Header from "./components/Header/Header.jsx";
import "./sass/main.scss";
function App() {
  return (
    <header className="header">
      <Container>
        <Header />
      </Container>
    </header>
  );
}

export default App;
