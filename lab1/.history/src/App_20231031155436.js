import "./App.css";
import Menu from "./component/Menu";
import Home from "./component/Home";
import React from "react";
import SanPhamXemNhieu from "./component/Sanphamxemnhieu";
import Ban

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
        <aside className="col-md-3">
          <h3>Top 10 sản phẩm xem nhiều</h3>
          <SanPhamXemNhieu />
        </aside>
      </main>
      <footer>
        <p>Made By Đào Duy Tùng Fpoly</p>{" "}
      </footer>
    </div>
  );
}

export default App;
