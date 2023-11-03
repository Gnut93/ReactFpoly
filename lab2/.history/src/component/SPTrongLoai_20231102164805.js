import { Link, useParams } from "react-router-dom";
import { listloai, listsp } from "../data";

<style>
/* Thêm class container cho thẻ div cha bao lấy danh sách sản phẩm */
.container {
  display: flex; /* Sử dụng flexbox */
  flex-wrap: wrap; /* Cho phép các sản phẩm xuống dòng khi không đủ chỗ */
  justify-content: space-between; /* Cách đều giữa các sản phẩm */
}

/* Thêm class product cho thẻ div của từng sản phẩm */
.sp {
  width: 30%; /* Đặt chiều rộng của sản phẩm để có 3 sản phẩm trên một hàng */
  margin-bottom: 20px; /* Khoảng cách dưới giữa các sản phẩm */
  padding: 10px; /* Khoảng cách xung quanh sản phẩm */
  border: 1px solid #ccc; /* Đường viền xung quanh sản phẩm */
  text-align: center; /* Căn giữa nội dung trong sản phẩm */
}

/* Tùy chỉnh kiểu hiển thị của tên sản phẩm */
.name-product {
  text-decoration: none; /* Loại bỏ đường gạch chân mặc định của liên kết */
  color: #333; /* Màu chữ của tên sản phẩm */
  font-weight: bold; /* Đậm */
}

/* Điều chỉnh hiển thị của hình ảnh sản phẩm */
.sp img {
  max-width: 100%; /* Đảm bảo hình ảnh không bị tràn khỏi khung sản phẩm */
}

</style>;

function SPTrongLoai() {
  let { id_loai } = useParams();
  let list_sp = listsp.filter((sp) => sp.id_loai == id_loai);
  let loai = listloai.find((loai) => loai.id_loai == id_loai);

  return (
    <div id="listsp">
      <h1>Sản phẩm trong 1 loại {loai.ten_loai}</h1>
      <div className="container" id="data">
        {list_sp.map((sp, i) => (
          <div className="sp" key={i}>
            <h4>
              <Link className="name-product" to={`/sp/${sp.id_sp}`}>
                {sp.ten_sp}
              </Link>
            </h4>
            <img src={sp.hinh} alt={sp.ten_sp} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SPTrongLoai;
