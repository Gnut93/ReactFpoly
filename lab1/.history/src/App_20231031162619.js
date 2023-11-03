import "./App.css";
import Menu from "./component/Menu";
import Home from "./component/Home";
import React from "react";
import SanPhamXemNhieu from "./component/Sanphamxemnhieu";
import Banner from "./component/Banner";

function App() {
  return (
    <div className="container">
      <header>
        <Banner />
      </header>
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
          <img src='https://i.pinimg.com/564x/ce/2e/05/ce2e05dbfeaa6a0af07d7576f2541979.jpg'/></img>
        </aside>
      </main>
      <footer>
        <div className="line"></div>
        <p>Made By Đào Duy Tùng Fpoly</p>{" "}
      </footer>
    </div>
  );
}

export default App;
