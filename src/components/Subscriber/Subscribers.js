import React from "react";
import styled from "styled-components";
import Table from './SubscriberTable'
const Subscribers = () => {
    const theadData = [ "Name", "Email"];

    return (
        <TableContent>
            <Table theadData={theadData} />
        </TableContent>
    );
};

export const TableContent = styled.div`
overflow-x: auto;
`;

export default Subscribers;