import "./App.css";
import Menu from "./component/Menu";
import Home from "./component/Home";
import React from "react";
import SanPhamXemNhieu from "./component/Sanphamxemnhieu";
import Banner from "./component/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GioiThieu from "./component/GioiThieu";
import ChiTiet from "./component/ChiTiet";
import NotFound from "./component/NotFound";
import SPTrongLoai from "./component/SPTrongLoai";
import TimKiem from "./component/TimKiem";

var sotin = 10;
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <Banner />
        </header>
        <nav>
          <Menu />
        </nav>
        <main className="d-flex">
          <article className="col-md-9">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/gioithieu" element={<GioiThieu />} />
              <Route path="/sp/:id" element={<ChiTiet />} />
              <Route path="/loai/:id_loai" element={<SPTrongLoai />} />
              <Route path="/timkiem/" element={<TimKiem />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Home /> */}
          </article>
          <aside className="col-md-3">
            <h3>Top 10 sản phẩm xem nhiều</h3>
            <SanPhamXemNhieu sotin={sotin} />
            <img
              className="mt-3"
              src="https://i.pinimg.com/originals/5d/dd/7c/5ddd7cac6ab6f16344bbe49ef72746d7.gif"
              width="100%"
            />
            <h3 className="text-center mt-3">Welcome to Website</h3>
          </aside>
        </main>
        <footer>
          <div className="line"></div>
          <p>Made By Đào Duy Tùng FPT Polytechnic</p>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
