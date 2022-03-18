import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading';
import {TiTick} from 'react-icons/ti'
import {BsExclamationLg} from 'react-icons/bs'
const ChatContact = ({img,alt,name,message,date,ShowBox, count,Background,Border,ShowTick,ShowExSign}) => {
  return (<>
    <ResponsiveContact><ContactImg><img src={img} alt={alt} /></ContactImg></ResponsiveContact>
    <ChatContactContent>
            <FirstLine>
                <ContactImg><img src={img} alt={alt} /></ContactImg>
                <Heading level={3}>{name}
                  <Heading level={6} clr >{message} </Heading>
                </Heading>
            </FirstLine>
            <SecondLine>
                <Heading level={6}>{date}</Heading>
                <CounterBox ShowBox= {ShowBox} Background={Background} Border={Border} >
                  <Tick ShowTick = {ShowTick} />
                  {count}
                  <ExSign ShowExSign = {ShowExSign} />
                </CounterBox>
            </SecondLine>
    </ChatContactContent>
    </>
  )
}
export const ResponsiveContact = styled.div`
display: none;
@media screen and (max-width: 600px) {
     display: block;
 }
`;
export const ChatContactContent = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
@media screen and (max-width: 600px) {
     display: none;
 }
`;
export const FirstLine = styled.div`
display: flex;
grid-gap: 10px;
`;
export const ContactImg = styled.div`
width: 24px;
height: 24px;
`;
export const SecondLine = styled.div`
display: flex;
flex-direction: column;
text-align: right;
align-items: flex-end;
justify-content: space-between;
`;
export const CounterBox = styled.div`
width: 16px;
height: 16px;
background: ${({Background}) => (Background ? '#109CF1' : '#fff')};
border: ${({Border}) => (Border ? '1px solid #2ED47A' : 'none')};
border-radius: 4px;
color: #fff;
font-weight: bold;
font-size: 9px;
line-height: 14px;
display: ${({ShowBox}) => (ShowBox ? 'flex' : 'none')};
align-items: center;
text-align: center;
justify-content: center;
`;

export const Tick = styled(TiTick)`
font-size: 20px;
color: #2ED47A;
display: ${({ShowTick}) => (ShowTick ? 'flex' : 'none')};
`;
export const ExSign = styled(BsExclamationLg)`
color: #FF3C5F;
display: ${({ShowExSign}) => (ShowExSign ? 'flex' : 'none')};
`;


export default ChatContact