import React from "react";
import CustomerInfo from "./CustomerInfo";
import { SearchOutlined } from '@ant-design/icons';

function CustomerData() {
 
  return (
    <>
      <div className="customerDataSection">
        <div className="inputBox">
        <SearchOutlined className="searchIcon"/>
          <input
            type="text"
            className="InputText"
            placeholder="   Search..."
           
          />
        </div>
        <CustomerInfo />
      </div>

     
    </>
  );
}

export default CustomerData;
