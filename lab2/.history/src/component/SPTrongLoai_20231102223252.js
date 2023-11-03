import { Link, useParams } from "react-router-dom";
import { listloai, listsp } from "../data";

function SPTrongLoai() {
  let { id_loai } = useParams();
  let list_sp = listsp.filter((sp) => sp.id_loai == id_loai);
  let loai = listloai.find((loai) => loai.id_loai == id_loai);

  return (
    <div id="listsp">
      <h3>Danh sách các loại máy {loai.ten_loai}</h3>
      <div className="loaisp" id="data">
        {list_sp.map((sp, i) => (
          <div className="sp-bomayday" key={i}>
            <h3>
              <Link className="name-product" to={`/sp/${sp.id_sp}`}>
                {sp.ten_sp}
              </Link>
            </h3>
            <Link className="name-product" to={`/sp/${sp.id_sp}`}><img className="img" src={sp.hinh} alt={sp.ten_sp} /></
          </div>
        ))}
      </div>
    </div>
  );
}

export default SPTrongLoai;
