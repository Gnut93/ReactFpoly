import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import { listsp } from "../data";

function Home() {
  return (
    <>
      <h3 className="title">Sản Phẩm Nổi Bật</h3>
      <div className="home">
        {/* Lấy theo lượt xem sắp xếp từ cao đến thấp 6 sản phẩm */}
        {listsp
          .sort((a, b) => b.soluotxem - a.soluotxem)
          .slice(0, 6)
          .map((sp, i) => {
            return (
              <div className="sp" key={i}>
                <img src={sp.hinh} alt={sp.ten_sp} />

                <h4 className="ten" style={{ font-we }}>{sp.ten_sp}</h4>
                <p className="gia" style={{ textDecoration: "line-through" }}>
                  Giá: {parseFloat(sp.gia).toLocaleString("vi-VI")}VNĐ
                </p>
                <p className="luotxem">Lượt xem: {sp.soluotxem}</p>
                <button className="btn">Đặt Hàng</button>
                <button className="btn">
                  <Link to={`/sp/${sp.id_sp}`}> Chi Tiết</Link>
                </button>
              </div>
            );
          })}
      </div>
      <h3 className="title">Sản Phẩm Hot</h3>
      <div className="home">
        {/* Lấy 6 sản phẩm hot có hot  trong data */}
        {listsp
          .filter((sp) => sp.hot === "1")
          .slice(0, 6)
          .map((sp, i) => {
            return (
              <div className="sp" key={i}>
                <img src={sp.hinh} alt={sp.ten_sp} />

                <h4>{sp.ten_sp}</h4>
                <p className="gia" style={{ textDecoration: "line-through" }}>
                  Giá: {parseFloat(sp.gia).toLocaleString("vi-VI")}VNĐ
                </p>
                <p className="luotxem">Lượt xem: {sp.soluotxem}</p>
                <button className="btn">Đặt Hàng</button>
                <button className="btn">
                  <Link to={`/sp/${sp.id_sp}`}> Chi Tiết</Link>
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
