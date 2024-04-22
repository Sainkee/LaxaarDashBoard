import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile ,faEarthAmericas ,faCaretDown} from '@fortawesome/free-solid-svg-icons';


function Head({ collapsed, setCollapsed ,imageUrl}) {
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
        <div className="usersection">
          <div className="Doc"> <span>   <FontAwesomeIcon icon={faFile} />   Documentaion</span></div>
          <div><span className="navLang"><FontAwesomeIcon icon={faEarthAmericas}  /> <span> English</span>  <FontAwesomeIcon icon={faCaretDown} /></span></div>
          <div className="navbar-img-container"><img src={imageUrl} className ="navbar-img" alt="User Profile" /></div>
        </div>
        
        
      </div>
    </>
  );
}

export default Head;
