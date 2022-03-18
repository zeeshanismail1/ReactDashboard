import React from "react";
import styled from "styled-components";
import UserDetail from "./UsersDetail/UserDetail";

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
    margin-top: 200px;
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
 
const PopupShowDetail = props => {
  return (
    <PopupBox>
        <CloseIcon onClick={props.handleClose}>x</CloseIcon>
      <Box>
        <UserDetail />
      </Box>
    </PopupBox>
  );
};
 
export default PopupShowDetail;