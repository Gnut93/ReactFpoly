import React from "react";
import { listsp } from "./data";

function Home() {
  return (
    <React.Fragment>
      <h3>Sản Phẩm Xem nhiều</h3>
      <div className="home">
        {/* Lấy theo lượt xem sắp xếp từ cao đến thấp 6 sản phẩm */}
        {listsp
          .sort((a, b) => b.luot_xem - a.luot_xem)
          .slice(0, 6)
          .map((sp, i) => {
            return (
              <div className="sp" key={i}>
                <img src={sp.hinh} alt={sp.ten} />

                <h4>{sp.ten}</h4>
                <p className="gia">
                  {sp.gia.toLocaleString("vi-VI", {
                    style: "currency",
                    currency: "VND",
                  })}
                  đ
                </p>
                <p className="luotxem">Lượt xem: {sp.soluotxem}</p>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Home;
