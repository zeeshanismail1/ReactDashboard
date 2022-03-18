import styled from "styled-components";

export const Task = styled.div`
width: 65%;
background: #FFFFFF;
box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
border-radius: 4px;
padding: 15px;
display: flex;
flex-direction: column;
grid-gap: 20px;
@media screen and (max-width: 920px) {
     width: 100%;
 }
`;

export const TopLine = styled.div`
display: flex;
justify-content: space-between;
`;

export const ShowWeek = styled.div`
display: flex;
align-items: center;
`;

export const TaskLine = styled.div`
Height: 4px;
background: #EBEFF2;
border-radius: 3px;
`;

export const Progress = styled.div`
width: 80%;
height: 4px;
background: #2ED47A;
border-radius: 3px;
`;

export const TaskDate = styled.div`
display: flex;
flex-direction: column;
grid-gap: 30px;
`;
export const DaysList = styled.div`
display: flex;
justify-content: space-between;
`;

export const DaysLi = styled.div`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Divider = styled.div`
width: 100%;
height: 1px;
background: #EBEFF2;
`;

export const Cards = styled.div`
display: flex;
flex-direction: column;
grid-gap: 20px;
`;
