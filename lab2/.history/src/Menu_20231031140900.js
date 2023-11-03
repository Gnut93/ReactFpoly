import React from "react";
import { listloai } from "./data";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="#">Trang chủ</a>
        </li>

        {listloai.map((listloai, i) => {
          return (
            <li key={i}>
              <a href="#">{listloai}</a>
            </li>
          );
        })}
      </ul>
    ); //render
  }
}
export default Menu;
