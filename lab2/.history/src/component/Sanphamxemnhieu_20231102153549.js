import { listsp } from "../data";
import { useParams } from "react-router-dom";

const SanPhamXemNhieu = (props) => {
  var 
  let jsxcode = (
    <div id="spxn">
      {listsp
        .sort((a, b) => b.soluotxem - a.soluotxem)
        .slice(0, props.sotin)
        .map((sp, i) => (
          <div className="sp" key={i}>
            <li>
              <a href="#">{sp["ten_sp"]}</a>
            </li>
          </div>
        ))}
    </div>
  );

  return jsxcode;
};

export default SanPhamXemNhieu;
