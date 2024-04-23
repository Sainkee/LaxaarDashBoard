import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faEarthAmericas,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Head({ collapsed, setCollapsed, imageUrl }) {
  const popoverContent = (
    <div >
     <div className="popoverContent-data">
       
     <div className="navbar-img-container">
      <img src={imageUrl} className="pop-img" alt="User Profile" />
      </div>
      <div>
        <p>userName</p>
        <p>sainkee1997@gmail.com</p>

      </div>
     
     </div>
     
      

      {/* Add a logout button */}
      
      <div className="devider"></div>
      <div>
         <Button type="primary" danger>
        Logout
      </Button>
      </div>
     
      </div>
     
    
    );
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
          <div className="Doc">
            {" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faFile} /> Documentaion
            </span>
          </div>
          <div>
            <span className="navLang">
              <FontAwesomeIcon icon={faEarthAmericas} /> <span> English</span>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
         

          <div className="navbar-img-container">
            <Popover
              placement="bottomRight"
             
              content={popoverContent}
            >
              <img src={imageUrl} className="navbar-img" alt="User Profile" />
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
