import React from 'react'
import styled from 'styled-components'
import DealChart from './DealChart'
import TaskChart from './TaskCharts'

const Charts = () => {
  return (
    <DashboardCharts>
     <DealChart />
     <TaskChart />
    </DashboardCharts>
  )
}

export const DashboardCharts = styled.div`
display: flex;
flex-direction: column;
grid-gap: 30px;
width: 35%;
@media screen and (max-width: 920px) {
     width: 100%;
 }
`;


export default Charts