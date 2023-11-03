import { Link, useParams } from "react-router-dom";
import { listloai, listsp } from "../data";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function SPTrongLoai() {
  let { id_loai } = useParams();
  let list_sp = listsp.filter((sp) => sp.id_loai == id_loai);
  let loai = listloai.find((loai) => loai.id_loai == id_loai);

  return (
    <div id="listsp">
      <h1>Sản phẩm trong 1 loại {loai.ten_loai}</h1>
      <div id="data">
        {list_sp.map((sp, i) => (
          <div className="sp" key={i}>
            <h4>
              <Link to={`/sp/${sp.id_sp}`}>{sp.ten_sp}</Link>
              {/* {sp.ten_sp} */}
            </h4>
            <img src={sp.hinh} alt={sp.ten_sp} width="3100%" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SPTrongLoai;
