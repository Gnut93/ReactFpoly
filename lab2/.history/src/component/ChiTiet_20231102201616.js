import { useParams } from "react-router-dom";
import { listsp } from "../data";
import "../ChiTiet.css";

function ChiTiet() {
  let { id } = useParams();
  let sp = listsp.find((sp) => sp.id_sp == parseInt(id));
  return (
    <div id="chitiet">
      <div className="row">
        <div className="col-md-6">
          <img src={sp.hinh} width="100%" alt={sp.ten_sp} />
        </div>
        <div className="col-md-6">
          <h2>{sp.ten_sp}</h2>
          <p className="gia">
            Giá: {parseInt(sp.gia).toLocaleString("vi")} VNĐ
          </p>
          <p className="mt-3">
            Giá Khuyến Mãi: {parseInt(sp.gia_km).toLocaleString("vi")} VNĐ
          </p>

          <p className="mt-3">
            Ngày: {new Date(sp.ngay).toLocaleDateString("vi-VN")}
          </p>
          <p className="mt-3">RAM: {sp.RAM}</p>
          <p className="mt-3">CPU: {sp.RAM}</p>
          <p className="mt-3">Màu Sắc: {sp.Mausac}</p>
          <p className="mt-3">Mô tả:{sp.mota}</p>

          <button className="btn btn-primary">Mua hàng</button>
        </div>
      </div>
      <div className="row1">
        <h3>Sản Phẩm Liên Quan</h3>
      </div>
    </div>
  );
}
export default ChiTiet;
