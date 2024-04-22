import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";



function Head({ collapsed, setCollapsed }) {
  return (
    <>
      <div className="mainHead">
        <div className="headSection">
          <div className="menuFoldBtn">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="menuFoldIcon"
            />
          </div>
          <div className="navLogo">
            <div className="iconDot"></div>
            <div className="navText">
              <span className="navTextBold">arivaa</span>
              <span className="navtextserviceJob">ServiceJob</span>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Head;
