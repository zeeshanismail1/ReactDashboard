import React from 'react'
import styled from 'styled-components';
import Queries from '../components/Queries';

const Email = ({sidebarOpen}) => {
  return (
    <EmailContent isOpen={sidebarOpen}>
        <Queries />
    </EmailContent>
  )
}
const EmailContent = styled.div`
margin-left:  ${({ isOpen }) => (isOpen ? `100px` : `270px`)};
margin-top: 40px;
margin-right: 10px;
margin-bottom: 20px;
@media screen and (max-width: 1100px) {
     margin: 40px 10px;
 }
`;

export default Email