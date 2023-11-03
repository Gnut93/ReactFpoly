import React from "react";
import { listloai } from "./data";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="#">Trang chủ</a>
        </li>

        {listloai.map((lítloai, i) => {
          return (
            <li key={i}>
              <a href="#">{loai}</a>
            </li>
          );
        })}
      </ul>
    ); //render
  }
}
export default Menu;
