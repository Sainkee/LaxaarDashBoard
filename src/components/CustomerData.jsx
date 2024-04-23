import React, { useState } from "react";

import CustomerInfo from "./CustomerInfo";
import { SearchOutlined } from "@ant-design/icons";

function CustomerData() {
  const [active, setActive] = useState(false);

  const handleFocus = () => setActive(true);
  const handleBlur = () => setActive(false);
  const isActive = active ? "searchIconActive" : "";

  return (
    <>
      <div className="customerDataSection">
        <div className="inputBox">
        <SearchOutlined className={`searchIcon ${isActive}`} />
          <input
            type="text"
            className="InputText"
            placeholder="   Search..."
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <CustomerInfo />
      </div>
    </>
  );
}

export default CustomerData;
