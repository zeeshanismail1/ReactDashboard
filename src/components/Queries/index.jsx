import React from 'react'
import styled from 'styled-components'
import QueryCard from './QueryCard'

const Queries = () => {
  return (
    <QueriesContent>
        <QueryCard />
        <QueryCard />
        <QueryCard />
        <QueryCard />
    </QueriesContent>
  )
}


export const QueriesContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
`;
export default Queries