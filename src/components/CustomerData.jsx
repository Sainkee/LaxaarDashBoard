import React from "react";
import CustomerInfo from "./CustomerInfo";

function CustomerData() {
 
  return (
    <>
      <div className="customerDataSection">
        <div className="inputBox">
          <input
            type="text"
            className="InputText"
            placeholder=" Search..."
          />
        </div>
        <CustomerInfo />
      </div>

     
    </>
  );
}

export default CustomerData;
