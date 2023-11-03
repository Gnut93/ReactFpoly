import React from "react";
import { listloai } from "../data";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="#">Trang chủ</a>
        </li>

        {listloai.map((loai, i) => {
          return (
            <li key={i} className="li">
              <a href="#">{loai.ten_loai}</a>
            </li>
          );
        })}
      </ul>
    ); //render
  }
}
export default Menu;
