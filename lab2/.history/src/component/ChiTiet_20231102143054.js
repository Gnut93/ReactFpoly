import { useParams } from "react-router-dom";
import { listsp } from "../data";

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
          <p className="gia">Giá: {(sp.gia)}</p>
          <p className="mt-3">{sp.mota}</p>
          <button className="btn btn-primary">Mua hàng</button>
        </div>
      </div>
    </div>
  );
}
export default ChiTiet;
