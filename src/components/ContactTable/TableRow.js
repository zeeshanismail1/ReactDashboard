import React, {useState} from "react";
import styled from "styled-components";
import {Button} from "../GlobalStyles";
import Heading from "../Heading/Heading";
import ModalContainer from "../ModalContainer/ModalContainer";
import UserDetail from "./UsersDetail/UserDetail";
import AddUser from "./AddUser";
import {MdModeEditOutline, MdDelete} from "react-icons/md";
import axios from "axios";

const TableRow = ({data}) => {
  const [ButtonLabelTwo, setButtonLabelTwo] = useState(false);
  const onClick = () => {
    setButtonLabelTwo(!ButtonLabelTwo);
  };

  const handleDelete = (idparam) => {
    axios
      .delete(`http://localhost:5000/api/user/removeUserById/${idparam}`)
      .then((res) => {});
  };

  return data.map((item) => (
    <tr key={item._id}>
      <td>
        <ModalContainer
          lg
          title={`${item.name} Details`}
          btnComponent={({onClick}) => (
            <Heading level={4} clr Cur onClick={onClick}>
              {item.name}
            </Heading>
          )}
          content={({onClose}) => (
            <UserDetail
              onClose={onClose}
              name={item.name}
              email={item.email}
              role={item.role}
            />
          )}
        />
      </td>
      <td> {item.email} </td>
      <td> {item.role}</td>
      <td>
        <ModalContainer
          lg
          title="Create New User"
          btnComponent={({onClick}) => (
            <Heading level={4} onClick={onClick}>
              <EditIcon />
            </Heading>
          )}
          content={({onClose}) => <AddUser onClose={onClose} />}
        />
      </td>
      <td onClick={() => handleDelete(item._id)}>
        <DeleteIcon />
      </td>
      <td>
        <Button onClick={onClick}>
          {ButtonLabelTwo ? item.status : "De Active"}
        </Button>
      </td>
    </tr>
  ));
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