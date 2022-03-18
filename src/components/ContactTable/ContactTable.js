import React,{useState} from "react";
import styled from "styled-components";
import Table from './Table'
import Geo from '../../assets/images/Geo.png'
import Lin from '../../assets/images/Lin.png'
import Reb from '../../assets/images/Reb.png'
import Edit from '../../assets/images/Edit.png'
import Delete from '../../assets/images/Delete.png'
import PopupShowDetail from "./PopupShowDetail";
import { Button } from "../GlobalStyles";

const ContactTable = () => {
    const [ButtonLabelTwo, setButtonLabelTwo] = useState("DeActive");
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

    const theadData = [ "Name", "Email", "Role","Edit", "Delete", "Status"];

    const tbodyData = [
        {
            id: "1",
            items: [ <NameWithImg onClick={togglePopup}><img src={Lin} alt='Lin' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],
        },
        {
            id: "2",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> George Fields</NameWithImg>, "george.fields@gmail.com", "CEO",<EditIcon><img src={Edit} alt='edit' /></EditIcon>, <DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon>, <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],
        },
        {
            id: "3",
            items: [ <NameWithImg><img src={Reb} alt='Reb' /> Rebecca Moore</NameWithImg>, "rebecca.moore@gmail.com", "Engineer",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        },  
        {
            id: "4",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        }, 
        {
            id: "5",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        }, 
        {
            id: "6",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        }, 
        {
            id: "7",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        }, 
        {
            id: "8",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        },
        {
            id: "9",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        }, 
        {
            id: "10",
            items: [ <NameWithImg><img src={Geo} alt='geo' /> Lindsey Stroud</NameWithImg>, "lindsey.stroud@gmail.com", "Manager",<EditIcon><img src={Edit} alt='edit' /></EditIcon>,<DeleteIcon><img src={Delete} alt='delete' /></DeleteIcon> , <Button  onClick={() => setButtonLabelTwo("Active")} >{ButtonLabelTwo}</Button> ],                                                                                 
        },  
    ];
    return (
        <TableContent>
            <Table theadData={theadData} tbodyData={tbodyData} />
            {isOpen && <PopupShowDetail handleClose={togglePopup} />}
        </TableContent>
    );
};
const NameWithImg = styled.div`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
color: #323C47;
display: flex;
align-items: center;
grid-gap: 10px;
cursor: pointer;
`;
export const Input = styled.input`
cursor: pointer;
 color: #fff;
 width: 16px;
 height: 16px;
 background: #109CF1;
 border-radius: 4px;
 border: none;
 outline: none;
`;

export const TableContent = styled.div`
overflow-x: auto;
`;
export const EditIcon = styled.div`
cursor: pointer;
`;
export const DeleteIcon = styled.div`
cursor: pointer;
`;
export default ContactTable;