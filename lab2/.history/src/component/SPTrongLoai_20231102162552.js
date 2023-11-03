import { Link, useParams } from "react-router-dom";
import { listloai, listsp } from "../data";

function SPTrongLoai() {
  let { id_loai } = useParams();
  let list_sp = listsp.filter((sp) => sp.id_loai === id_loai);
  let loai = listloai.find((loai) => loai.id_loai === id_loai);
  return (
    <div id="listsp">
      <h1>Sản phẩm trong 1 loại{loai.ten_loai}</h1>
      <div id="data">
        {list_sp.map((sp, i) => {
          <div className="sp" key={i}>
            <h4><Link to={`/sp/${sp.id_sp}`}>{`sp.ten_sp`}</Link></h4>
          </div>
        })}
      </div>
    </div>
  );
}
export default SPTrongLoai;
