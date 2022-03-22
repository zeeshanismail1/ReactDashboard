import React from "react";
import { Dropdown, Option } from "./Dropdown";

function Roles() {
  return (
    <div>
      <Dropdown >
        <Option selected value="Please Select Role" />
        <Option value="Super Admin" />
        <Option value="Admin" />
        <Option value="User" />
      </Dropdown>
    </div>
  );
}

export default Roles