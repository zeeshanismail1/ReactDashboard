import React from 'react'
import styled from 'styled-components';
import ContactData from '../components/ContactTable/ContactData';

const Home = ({sidebarOpen}) => {
  return (
    <ContactContent isOpen={sidebarOpen}>
        <ContactData />
    </ContactContent>
  )
}
const ContactContent = styled.div`
margin-left:  ${({ isOpen }) => (isOpen ? `100px` : `270px`)};
margin-top: 40px;
margin-right: 10px;
margin-bottom: 20px;
@media screen and (max-width: 1100px) {
     margin: 40px 10px;
 }
`;

export default Home