import React from "react";
import { Dropdown, Option } from "./Dropdown";

function Roles() {
  return (
    <div>
      <Dropdown >
        <Option selected value="Please Select Role" />
        <Option value="Superadmin" />
        <Option value="Bussiness Developer" />
      </Dropdown>
    </div>
  );
}

export default Roles