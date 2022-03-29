import React from 'react'
import styled from 'styled-components'
import Heading from '../../Heading/Heading'
import Lin from '../../../assets/images/Lin.png'

const UserDetail = ({data}) => {
  return data.map((item) => {
    return (<>
    <UserData key={item._id}>
        <Name>
            <img src={Lin} alt="Lin" />
            <Heading level={4} opacity >{item.firstName}</Heading>
        </Name>
        <Email>	
            <Heading level={4}>Email :</Heading>
            <Heading level={4} opacity>	{item.Email}</Heading>
        </Email>
        <Role>
            <Heading level={4}>Role :</Heading>
            <Heading level={4} opacity>{item.Role}</Heading>
        </Role>
    </UserData>
    </>
    );
  });
};

export const UserData = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
border-radius: 4px;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
grid-gap: 10px;
`;
export const Name = styled.div`
display: flex;
grid-gap: 10px;
`;
export const Email = styled.div`
display: flex;
grid-gap: 10px;
`;
export const Role = styled.div`
display: flex;
grid-gap: 10px;
`;

export default UserDetail