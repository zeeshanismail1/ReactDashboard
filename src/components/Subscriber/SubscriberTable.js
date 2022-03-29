import React, {useState, useEffect} from "react";
import TableRow from "./SubcriberTableRow";
import TableHeadItem from "./SubscriberTableHead";
import styled from "styled-components";
import axios from "axios";
const Table = ({theadData}) => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/allUsers");
      setUser(res.data.data);
    } catch (err) {
      console.log("the error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TableStyle>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        <TableRow data={user} />;
      </tbody>
    </TableStyle>
  ); 
};

export const TableStyle = styled.table`
width: 100%;
background: #fff;
padding: 0 10px;
th{
    height: 48px;
    text-align: left;
    border-radius: 4px;
}
tbody tr{
    height: 64px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #00bf80;
}



`;
export default Table;