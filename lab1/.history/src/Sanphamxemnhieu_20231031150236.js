import { listsp } from "./data";

function Sanphamxemnhieu() {
    let jsxcode =
    <div id="spxn">
    {/* lấy 6 sản phẩm xem nhiều sắp xếp theo sort từ cao đến thấp */}
    {listsp
      .sort((a, b) => b.soluotxem - a.soluotxem)
      .slice(0, 6)
      .map((sp, i) => {
        return (
          <div className="sp" key={i}>
            <img src={sp.hinh} alt={sp.ten_sp} />

            <h4>{sp.ten_sp}</h4>
            <p className="gia">
              {parseFloat(sp.gia).toLocaleString("vi-VI")}VNĐ
            </p>
            <p className="luotxem">Lượt xem: {sp.soluotxem}</p>
            <button className="btn">Đặt Hàng</button>
          </div>
        );
      }}
      

    </div>