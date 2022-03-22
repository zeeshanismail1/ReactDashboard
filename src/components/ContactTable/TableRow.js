import React,{useState} from "react";
import styled from "styled-components";
import {Button} from '../GlobalStyles'
import Heading from "../Heading/Heading";
import ModalContainer from "../ModalContainer/ModalContainer";
import UserDetail from "./UsersDetail/UserDetail";
import AddUser from "./AddUser";
import {MdModeEditOutline, MdDelete} from 'react-icons/md'

const TableRow = ({data}) => {
  const [ButtonLabelTwo, setButtonLabelTwo] = useState(false);
  const onClick = () => {
    setButtonLabelTwo(!ButtonLabelTwo);
};
  return data.map((item) => {
    return (
      <tr key={item._id}>
        <td>
          <ModalContainer
                lg
                title="User Detail"
                btnComponent={({ onClick }) => ( 
                  <Heading level={4} clr onClick={onClick}>
                    {item.firstName}
                  </Heading> 
                )}
                content={({ onClose }) => <UserDetail onClose={onClose} />}
              />
        </td>
        <td> {item.email} </td>
        <td> {item.role}</td>
        <td> 
          <Button onClick={onClick}>
            {ButtonLabelTwo ? (item.status) : "De Active"}
          </Button> 
        </td>
        <td>
          <ModalContainer
                lg
                title="Create New User"
                btnComponent={({ onClick }) => ( 
                  <Heading level={4} onClick={onClick}>
                    <EditIcon />
                  </Heading> 
                )}
                content={({ onClose }) => <AddUser onClose={onClose} />}
              />
        </td>
        <td><DeleteIcon /></td>
      </tr>
    );
  });
};


export const StatusIcons = styled.div`
display: flex;
grid-gap: 10px;
justify-content: flex-start;
align-items: center;
`;
export const EditIcon = styled(MdModeEditOutline)`
color: #00bf80;
cursor: pointer;
`;
export const DeleteIcon = styled(MdDelete)`
color: #00bf80;
cursor: pointer;
`;

export default TableRow;