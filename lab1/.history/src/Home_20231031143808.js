import React from "react";
import { listsp } from "./data";

function Home() {
  return (
    <React.Fragment>
      <h3>Sản Phẩm Xem nhiều</h3>
      <div className="home">
        {/* Lấy theo lượt xem sắp xếp từ cao đến thấp 6 sản phẩm */}
        {listsp
          .sort((a, b) => b.soluotxem - a.soluotxem)
          .slice(0, 6)
          .map((sp, i) => {
            return (
              <div className="sp" key={i}>
                <img src={sp.hinh} alt={sp.ten_sp} />

                <h4>{sp.ten_sp}</h4>
                <p className="gia">{parseFloat.toLocaleString("vi-VI")}đ</p>
                <p className="luotxem">Lượt xem: {sp.soluotxem}</p>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Home;
