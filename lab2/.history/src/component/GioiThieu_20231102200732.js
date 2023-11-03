import React from "react";
class GioiThieu extends React.Component {
  render() {
    return (
      <div id="gioithieu">
        <h3 className="text-center">Đây là trang giới thiệu</h3>
        <p className="text-center">
          "Sự khác biệt giữa người thành công và người không thành công là người
          thành công đã thất bại nhiều lần hơn."
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
