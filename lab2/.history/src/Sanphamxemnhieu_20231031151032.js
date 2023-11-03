import { listsp } from "./data";

const  SanPhamXemNhieu = () => {
    let jsxcode = 
    <div id='spxn'>
    {listsp.sort((a, b) => b.soluotxem - a.soluotxem).slice(0, 6).map((sp, i) => {
        <div className="sp" key={i}>{sp['']}</div>

    }


    </div>



}

export default SanPhamXemNhieu; 
   
    