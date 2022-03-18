import React from 'react'
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import { Divider, ShowWeek,TopLine } from '../Task/TaskStyles';
import LineGraph from './LineChart';
import Select from '../Select/Select';

const DealChart = () => {
  return (
    <LineChartContent>
        <TopLine>
            <Heading level={2}>Deal</Heading>
            <ShowWeek>
                <Heading level={5}>Show:</Heading>
                <Select />
            </ShowWeek>
        </TopLine>
        <Divider />
        <ClosedDeal>
            <CloseIcon></CloseIcon>
            <Heading level={6} color >Closed deals</Heading>
        </ClosedDeal>
        <LineGraph />
    </LineChartContent>
  )
}

const LineChartContent = styled.div`
background: #FFFFFF;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
padding: 15px;
display: flex;
flex-direction: column;
grid-gap: 20px;
`;
const ClosedDeal = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
`;
const CloseIcon = styled.div`
width: 8px;
height: 8px;
border: 2px solid #109CF1;
border-radius: 360px;
cursor: pointer;
`;
export default DealChart