import { listsp } from "../data";

const SanPhamXemNhieu = (props) => {
  let jsxcode = (
    <div id="spxn">
      {listsp
        .sort((a, b) => b.soluotxem - a.soluotxem)
        .slice(0, 11)
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
