import { useParams, Link } from "react-router-dom";
import { listsp } from "../data";
import "../ChiTiet.css";
import LamTron from "../function/function";

function laySPLienQuan(id_loai, idHienTai) {
  return listsp
    .filter((sp) => sp.id_loai == id_loai && sp.id_sp != idHienTai)
    .slice(0, 3);
}

function ChiTiet() {
  let { id } = useParams();
  let sp = listsp.find((sp) => sp.id_sp == parseInt(id));
  let spLienQuan = getRelatedProducts(sp.id_loai, sp.id_sp);
  return (
    <div id="chitiet">
      <div className="row">
        <div className="col-md-6">
          <img src={sp.hinh} width="100%" alt={sp.ten_sp} />
        </div>
        <div className="col-md-6">
          <h2 style={{ fontWeight: "700" }}>{sp.ten_sp}</h2>
          <p className="gia">
            Giá: {LamTron(parseInt(sp.gia)).toLocaleString("vi")} VNĐ
          </p>
          <p className="mt-3">
            Giá Khuyến Mãi: {parseInt(sp.gia_km).toLocaleString("vi")} VNĐ
          </p>

          <p className="mt-3">
            Ngày: {new Date(sp.ngay).toLocaleDateString("vi-VN")}
          </p>
          <p className="mt-3">RAM: {sp.RAM}</p>
          <p className="mt-3">CPU: {sp.CPU}</p>
          <p className="mt-3">Màu Sắc: {sp.Mausac}</p>
          <p className="mt-3">Trọng lượng: {sp.Cannang}kg</p>

          <button className="btn btn-primary">Mua hàng</button>
        </div>
      </div>
      <div className="row1">
        <h3 className="mb-5">Sản Phẩm Liên Quan</h3>
      </div>
      <div className="row">
        {relatedProducts.map((relatedSp) => (
          <div className="col-md-4" key={relatedSp.id_sp}>
            <div className="related-product">
              <Link className="name-product" to={`/sp/${relatedSp.id_sp}`}>
                <img src={relatedSp.hinh} width="100%" alt={relatedSp.ten_sp} />
              </Link>
              <h4>{relatedSp.ten_sp}</h4>
              <p className="gia">
                Giá: {LamTron(parseInt(relatedSp.gia)).toLocaleString("vi")}
                VNĐ
              </p>
              <button className="btn btn-primary">Mua hàng</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChiTiet;
