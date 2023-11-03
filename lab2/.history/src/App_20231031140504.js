import "./App.css";
import Menu from "./Menu";

function App() {
  return (
    <div className="container">
      <header></header>
      <nav><Menu/></nav>
      <main className="d-flex">
        <article className="col-md-9"></article>
        <aside className="col-md-3"></aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
