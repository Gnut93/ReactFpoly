import { useParams } from "react-router-dom";
import { listloai, listsp } from "../data";

function SPTrongLoai() {
  let {id_loai} = useParams();
  let list_sp
  return (
    <div>
      <h1>Sản phẩm trong 1 loại</h1>
    </div>
  );
}
export default SPTrongLoai;
