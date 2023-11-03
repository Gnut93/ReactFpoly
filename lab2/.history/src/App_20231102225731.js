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
          </article>
          <aside className="col-md-3">
            <h3
              style={{
                textAlign: "center",
                color: "rgb(11, 11, 17)",
                margin: "20px",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "1.5",
              }}
            >
              Top sản phẩm xem nhiều
            </h3>
            <SanPhamXemNhieu sotin={sotin} />
            <img
              className="mt-3"
              src="https://i.pinimg.com/originals/5d/dd/7c/5ddd7cac6ab6f16344bbe49ef72746d7.gif"
              width="100%"
            />
            <h3 className="text-center mt-4">Welcome to My Website</h3>
            <h5
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "#432342",
              }}
            >
              Name : Đào Duy Tùng
            </h5>
            <h5
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "#432342",
              }}
            >
              DOB : 27/02/1993
            </h5>
            <h5
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "#432342",
              }}
            >
              FB :
            </h5>
            <img src="https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-6/250899707_101137245715750_5934129261386211068_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fzPoBnjBDlsAX-fb6VM&_nc_ht=scontent.fsgn21-1.fna&oh=00_AfCOA-74cXuMreE8I9FoOHKv0iJPA5obNNIxuKNBIuccIA&oe=65494C83" />
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
