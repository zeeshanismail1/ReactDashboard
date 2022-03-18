import React from "react";
import styled from "styled-components";
import AddUser from "./AddUser";

const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
   
const Box = styled.div`
    display: flex;
    justify-content: center;
`;
   
const CloseIcon = styled.div`
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: 0;
  font-size: 30px;
  color: #fff;
`;
 
const PopupAddUser = props => {
  return (
    <PopupBox>
        <CloseIcon onClick={props.handleClose}>x</CloseIcon>
      <Box>
        <AddUser />
      </Box>
    </PopupBox>
  );
};
 
export default PopupAddUser;