import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import Subscribers from './Subscribers';
const SubscriberList = () => {
  return (
    <ContactContainer>
            <Heading level={1}>Subscribers List</Heading>
        <Subscribers />
    </ContactContainer>
  )
}

export const ContactContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
grid-gap: 30px;
`;

export default SubscriberList