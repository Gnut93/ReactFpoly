import React from "react";
class GioiThieu extends React.Component {
  render() {
    return (
      <div id="gioithieu">
        <h3 className="text-center">Đây là trang giới thiệu</h3>
        <p className="text-center">
          Tôi nhớ mãi cái cảm giác ấm áp khi ta đứng bên nhau, những ngón tay
          kết vào nhau như từng câu chuyện truyền thống về tình yêu. Dù mưa rơi,
          chúng ta cùng nhau bước đi trên con đường ước mơ. Tôi tin rằng, dù
          trời mưa hay nắng, tình yêu của chúng ta sẽ luôn rạng ngời.
        </p>
        <img
          src="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="100%"
        />
      </div>
    );
  }
}
export default GioiThieu;
