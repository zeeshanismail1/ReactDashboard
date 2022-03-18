import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import { Divider, TopLine } from '../Task/TaskStyles';
import ChatContact from './ChatContact';
import Lin from '../../assets/images/Lin.png'
import Geo from '../../assets/images/Geo.png'
import MsgIconOne from '../../assets/images/MsgIconOne.png'
import MsgIconTwo from '../../assets/images/MsgIconTwo.png'
import {FiMoreVertical} from 'react-icons/fi'
import { ContactFive, ContactFour, ContactOne, ContactSix, ContactThree, ContactTwo } from './ChatContactData';

const Messages = () => {
  return (
    <MessagesContent>
        <ContactList>
            <ChatContact {...ContactOne} />
            <Divider />
            <ChatContact {...ContactTwo} />
            <Divider />
            <ChatContact {...ContactThree} />
            <Divider />
            <ChatContact {...ContactFour} />
            <Divider />
            <ChatContact {...ContactFive} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
            <ChatContact {...ContactSix} />
            <Divider />
        </ContactList>
        <ChatFeed>
          <TopLine>
            <Messenger>
              <img src={Lin} alt="Lin" />
              <Heading level={2}>Lindsey Stroud</Heading>
              <CircleSign />
            </Messenger>
            <MoreIcon />
          </TopLine>
          <Heading level={4} Cen >dolor sit amet consecteturg</Heading>
          <MessageBox>
          <Messenger>
              <img src={Lin} alt="Lin" />
              <Heading level={6} color >Lindsey Stroud</Heading>
              <Heading level={6} >11:12</Heading>
            </Messenger>
            <Msg primary >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
              mattis molestie. Ligula ullamcorper malesuada proin libero nunc
              consequat interdum. A lacus vestibulum sed arcu non odio euismod
              lacinia. Aliquet eget sit amet tellus cras adipiscing enim.
            </Msg>
          </MessageBox>
          <MessageBox End >
          <Messenger>
              <img src={Geo} alt="Geo" />
              <Heading level={6} color >You</Heading>
              <Heading level={6} >11:12</Heading>
            </Messenger>
            <Msg Clr >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus 
            proin nibh nisl. Suspendisse faucibus interdum posuere lorem ipsum 
            dolor sit amet consecteturg.
            </Msg>
          </MessageBox>
          <MessageBox>
          <Messenger>
              <img src={Lin} alt="Lin" />
              <Heading level={6} color >Lindsey Stroud</Heading>
              <Heading level={6} >11:12</Heading>
            </Messenger>
            <Msg primary >
              Your idea for this application is nice! 
            </Msg>
          </MessageBox>
          <MessageBox>
          <Messenger>
              <img src={Lin} alt="Lin" />
              <Heading level={6} color >Lindsey Stroud</Heading>
              <Heading level={6} >Typing a message...</Heading>
            </Messenger>
            <Divider />
          </MessageBox>

            <CreateMessage>
               <Input type="Message" placeholder="Type a message..." />
               <MsgIcons>
                  <DividerLine />
                  <img src={MsgIconOne} alt= "i" />
                  <img src={MsgIconTwo} alt= "i" />
               </MsgIcons>
            </CreateMessage>
        </ChatFeed>
    </MessagesContent>
  )
}

export const MessagesContent = styled.div`
width: 100%;
display: flex;
grid-gap: 30px;
`;
export const ContactList = styled.div`
display: flex;
flex-direction: column;
grid-gap: 5px;
width: 350px;
background: #FFFFFF;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
height: 758px;
overflow-y: auto;
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #109CF1;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
@media screen and (max-width: 600px) {
     width: 70px;
     height: 860px;
     justify-content: center;
     align-items: center;
 }
`;

export const ChatFeed = styled.div`
display: flex;
flex-direction: column;
grid-gap: 30px;
background: #FFFFFF;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
padding: 20px;
width: 70%;
`;

export const CircleSign = styled.div`
width: 6px;
height: 6px;
background: #2ED47A;
border-radius: 360px;
`;
export const MoreIcon = styled(FiMoreVertical)`
width: 24px;
height: 24px;
color: #C2CFE0;
cursor: pointer;
`;
export const MessageBox = styled.div`
display: flex;
flex-direction: column;
grid-gap: 5px;
align-items: ${({End}) => (End ? 'flex-end' : '')};
`;
export const Messenger = styled.div`
display: flex;
grid-gap: 10px;
align-items: center;
`;
export const Msg = styled.div`
background: ${({primary}) => (primary ? '#109CF1' : '#fff')};
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 21px;
letter-spacing: 0.01em;
color: ${({Clr}) => (Clr ? '#334D6E' : ' #FFFFFF')};
padding: 20px;
width: 524px;
border: 1px solid #E4E9EE;
border-radius: 4px;
@media screen and (max-width: 1100px) {
     width: 100%;
 }
`;
export const CreateMessage = styled.div`
display: flex;
justify-content: space-between;
`;
export const Input = styled.input`
border: none;
outline: none;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 21px;
letter-spacing: 0.01em;
color: #192A3E;
opacity: 0.4;
width: 100%;
`;
export const DividerLine = styled.div`
width: 1px;
height: 40px;
background: #EBEFF2;
`;
export const MsgIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
grid-gap: 10px;
cursor: pointer;
`;

export default Messages