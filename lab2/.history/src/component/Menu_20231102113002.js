import React from "react";
import { listloai } from "../data";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
          
        </li>

        {listloai.map((loai, i) => {
          return (
            <li key={i} className="list"> 
              <Link to={`/loai/{}`}>{loai.ten_loai}</Link>
            </li>
          );
        })}
      </ul>
    ); //render
  }
}
export default Menu;
