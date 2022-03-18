import React from 'react'
import styled from 'styled-components';
import Charts from '../components/Charts/Charts';
import TaskPage from '../components/Task/Task'

const Home = ({sidebarOpen}) => {
  return (
    <HomeContent isOpen={sidebarOpen}>
      <TaskPage />
      <Charts />
    </HomeContent>
  )
}
const HomeContent = styled.div`
margin-left:  ${({ isOpen }) => (isOpen ? `100px` : `270px`)};
margin-top: 20px;
margin-right: 10px;
margin-bottom: 20px;
display: flex;
grid-gap: 20px;
@media screen and (max-width: 1100px) {
  margin: 40px 0;
 }
 @media screen and (max-width: 920px) {
     flex-wrap: wrap;
 }
`;

export default Home