import React from "react";
import { listloai } from "../data";
import { Link } from "react-router-dom";


class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <
          link href="#" className="list">
            Trang chủ
          
        </li>

        {listloai.map((loai, i) => {
          return (
            <li key={i} className="list">
              <a href="#">{loai.ten_loai}</a>
            </li>
          );
        })}
      </ul>
    ); //render
  }
}
export default Menu;
