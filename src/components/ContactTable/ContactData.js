import React,{useState} from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import {TopLine } from '../Task/TaskStyles';
import ContactTable from './ContactTable';
import PopupAddUser from './PopupAddUser';
const ContactData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  return (
    <ContactContainer>
        <TopLine>
            <Heading level={1 }>Webevis Users List</Heading>
            <Btn onClick={togglePopup}>Add User</Btn>
            {isOpen && <PopupAddUser handleClose={togglePopup} />}
        </TopLine>
        <ContactTable />
    </ContactContainer>
  )
}

export const ContactContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 30px;
`;
export const Btn = styled.div`
padding: 10px 20px;
display: flex;
justify-content: center;
align-items: center;
background: #109CF1;
box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
border-radius: 4px;
color: #fff;
cursor: pointer;
`;

export default ContactData