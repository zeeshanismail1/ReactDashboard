import React from 'react'
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import { ShowWeek, TopLine } from '../Task/TaskStyles';
import PieGraph from './PieChart';
import Select from '../Select/Select';

const TaskChart = () => {
  return (
    <ChartContent>
        <TopLine>
            <Heading level={2}>Tasks</Heading>
            <ShowWeek>
                <Heading level={5}>Show:</Heading>
                <Select />
            </ShowWeek>
        </TopLine>
        <GraphContent>
        <PieGraph />
        <PieHeading>
        <ClosedDeal>
            <CloseIconActive />
            <Heading level={6} color >Active</Heading>
        </ClosedDeal>
        <ClosedDeal>
            <CloseIconCompleted />
            <Heading level={6} color >Completed</Heading>
        </ClosedDeal>
        <ClosedDeal>
            <CloseIconEnded />
            <Heading level={6} color >Ended</Heading>
        </ClosedDeal>
        </PieHeading>
        </GraphContent>
    </ChartContent>
  )
}

const ChartContent = styled.div`
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
const CloseIconActive = styled.div`
width: 8px;
height: 8px;
border: 2px solid #FFB946;
border-radius: 360px;
cursor: pointer;
`;
const CloseIconCompleted = styled(CloseIconActive)`
border: 2px solid #2ED47A;
`;
const CloseIconEnded = styled(CloseIconActive)`
border: 2px solid #F7685B;
`;
const GraphContent = styled.div`
display: flex;
align-items: center;

`;
const PieHeading = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
grid-gap: 10px;
`;
export default TaskChart