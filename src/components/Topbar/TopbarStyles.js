import styled from "styled-components";
import {FaBars} from 'react-icons/fa'
import {MdOutlineSearch} from 'react-icons/md'



export const BurgerMenu = styled(FaBars)`
display: block;
@media screen and (max-width: 1100px) {
     display: block;
     color: #00bf80;
     position: sticky;
     z-index: 1;
     top: 20px;
     left: 20px;
 }
`;
export const Topbar = styled.div`
 height: 60px;
 background: #FFFFFF;
`;

export const TopbarItems = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
height: 60px;
left: ${({ isOpen }) => (isOpen ? `90px` : `256px`)};
right: 0;
top: 0;
padding: 0 20px;
@media screen and (max-width: 1100px) {
     left: 50px;
 }
`;


export const NotificationIcon = styled.div`
width: 16px;
height: 20px;
background: #FFFFFF;
cursor: pointer;
`;

export const Searchbar = styled.div`
display: flex;
align-items: center;
grid-gap: 5px;
cursor: pointer;
width: 100%;

input{
height: 30px;
color: #00bf80;
border: none;
outline: none;
padding: 10px;
width: 100%;

::placeholder{
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.01em;
color: #00bf80;
}
}
`;

export const SearchIcon = styled(MdOutlineSearch)`
width: 15px;
height: 15px;
color: #00bf80;
`;