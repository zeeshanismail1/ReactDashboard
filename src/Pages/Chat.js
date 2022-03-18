import React from 'react'
import styled from 'styled-components';
import Messages from '../components/Messages/Messages';

const Chat = ({sidebarOpen}) => {
  return (
    <ChatContent isOpen={sidebarOpen}>
      <Messages />
    </ChatContent>
  )
}
const ChatContent = styled.div`
margin-left:  ${({ isOpen }) => (isOpen ? `100px` : `270px`)};
margin-top: 20px;
display: flex;
grid-gap: 20px;
@media screen and (max-width: 1100px) {
  margin: 40px 0;
 }
`;


export default Chat