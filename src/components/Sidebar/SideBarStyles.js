import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {BsDoorOpen} from 'react-icons/bs'


export const Sidebar = styled.div`
width: ${({ isOpen }) => (isOpen ? `90px` : `256px`)};
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: 850ms;
background: #FFFFFF;
box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
transition: all 0.2s ease-in-out;
padding: 20px;
align-items: ${({ isOpen }) => (isOpen ? `center` : `none`)};

@media screen and (max-width: 1100px) {
     display: ${({ isOpen }) => (isOpen ? "none" : "block")};
     top: 60px;
 }
`;

export const SidebarMenu = styled.div`
display: flex;
flex-direction: column;
grid-gap: 30px;
transition: all 0.2s ease-in-out;
align-items: ${({ isOpen }) => (isOpen ? `center` : `none`)};
`;

export const SidebarsItems = styled.div`
display: flex;
flex-direction: column;
grid-gap: 20px;
`;

export const LogoText = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
color: #434955;
cursor: pointer;
display: ${({ isOpen }) => (isOpen ? `none` : `flex`)};
grid-gap: 5px;
left: 24;
`;

export const Profile = styled.div`
cursor: pointer;
display: flex;
grid-gap: 10px;
height: 46px;
align-items: center;
`;

export const ProfileData = styled.div`
display: ${({ isOpen }) => (isOpen ? `none` : `flex`)};
flex-direction: column;
`;
export const SidebarLi = styled.li`
list-style: none;
display: ${({ isOpen }) => (isOpen ? `none` : `block`)};
`;

export const SidebarLink = styled(NavLink)`
text-decoration: none;
display: flex;
grid-gap: 10px;
font-weight: 500;
font-size: 13px;
line-height: 19px;
color: #434955;
align-items: center;

&.active{
   color: #00bf80;
}
`;
export const ClosedIcon = styled.li`
list-style: none;
display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
`;
export const Setting = styled.div`
display: flex;
grid-gap: 10px;
cursor: pointer;
`;


export const FooterText = styled.div`
display: flex;
grid-gap: 10px;
cursor: pointer;
`;

export const ToggleIcon = styled(BsDoorOpen)`
color: #434955;
`;

export const Divider = styled.div`
background: #00bf80;
height: 1px;
width: 100%;
`;