import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'

const QueryCard = () => {
  return (
    <CardContent>
        <Query>
            <Heading level={3}>Name :</Heading>
            <Heading level={3}>Email :</Heading>
            <Heading level={3}>Message :</Heading>
        </Query>
        <input type="checkbox" />
    </CardContent>
  )
}

export const CardContent = styled.div`
display: flex;
justify-content: space-between;
background: #fff;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
border-radius: 20px;
padding: 20px;
`;
export const Query = styled.div`
display: flex;
flex-direction: column;
grid-gap: 15px;
`;
export default QueryCard