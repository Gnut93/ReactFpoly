import { listsp } from "./data";

function Home(){
    return (
        <div className="home">
            <h3>Sản Phẩm Xem nhiều</h3>
            {/* Lấy theo lượt xem sắp xếp từ cao đến thấp 6 sản phẩm */}
            {listsp.sort((a,b)=>b.luot_xem-a.luot_xem).slice(0,6).map((sp,i)=>{
                return (
                    <div className="card" key={i}>
                        <img src={sp.hinh} alt={sp.ten} />
                        <div className="card-body">
                            <h4>{sp.ten}</h4>
                            <p className="gia">{sp.gia.toLocaleString()}đ</p>
                            <p className="luotxem">Lượt xem: {sp.luot_xem}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

