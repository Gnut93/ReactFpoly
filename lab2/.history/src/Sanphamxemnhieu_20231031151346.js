import { listsp } from "./data";

const SanPhamXemNhieu = () => {
  let jsxcode = (
    <div id="spxn">
      {listsp
        .sort((a, b) => b.soluotxem - a.soluotxem)
        .slice(0, 10)
        .map((sp, i) => (
          <div className="sp" key={i}>
            {sp["ten_sp"]}
          </div>
        ))}
    </div>
  );

  return jsxcode;
};

export default SanPhamXemNhieu;
