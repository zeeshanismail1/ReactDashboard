import React from "react";
import { Dropdown, Option } from "./Dropdown";

function Roles() {
  return (
    <div>
      <Dropdown >
        <Option selected value="Please Select Role" />
        <Option value="CEO" />
        <Option value="Manager" />
        <Option value="Developer" />
      </Dropdown>
    </div>
  );
}

export default Roles