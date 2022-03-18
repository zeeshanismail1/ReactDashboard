import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";
import styled from "styled-components";

const Table = ({ theadData, tbodyData}) => {
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
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
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
tbody tr :not(:first-child){
    height: 64px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #707683;
}



`;
export default Table;