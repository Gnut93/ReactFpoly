import "./App.css";
import Menu from "./Menu";
import Home from "./Home";

function App() {
  return (
    <div className="container">
      <header></header>
      <nav>
        <Menu />
      </nav>
      <main className="d-flex">
        <article className="col-md-9">
          <Home />
        </article>
        <aside className="col-md-3"></aside>
      </main>
      <footer>
        <p>Made By Đào Duy Tùng Fpoly</p>{" "}
      </footer>
    </div>
  );
}

export default App;
