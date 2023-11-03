import { useParams } from "react-router-dom";
import { listsp } from "../data";


function ChiTiet() {
  let { id } = useParams();
  
  return (
    <div id="chitiet">
      <h1>Đây là trang chi tiết sản phẩm</h1>
    </div>
  );
}
export default ChiTiet;
