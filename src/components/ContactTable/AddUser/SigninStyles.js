import styled from "styled-components";


export const FormWrap = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: 20px 0;
`;

export const FormContent = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 480px) {
     padding: 10px;
 }
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
 background: #109CF1;
 z-index: 1;
 padding: 30px 60px;
 border-radius: 4px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.9);

 @media screen and (max-width: 400px) {
     padding: 32px;
 }
`;

export const FormH1 = styled.h1`
 margin-bottom: 30px;
 color: #fff;
 font-size: 25px;
 font-weight: 400;
 text-align: center;
`;

export const FormElements = styled.div`
 display: flex;
 grid-gap: 10px;
 @media screen and (max-width:760px) {
     flex-direction: column;
 }
`;
export const Element = styled.div`
 display: flex;
 flex-direction: column;
`;

export const FormLabel = styled.label`
 margin-bottom: 5px;
 font-size: 14px;
 color: #fff;
`;

export const FormInput = styled.input`
 padding: 10px 20px;
 margin-bottom: 32px;
 border: none;
 outline: none;
 color: #109CF1;
 border-radius: 4px;
 ::placeholder{
     color: #109CF1;
 }
`;

export const FormButton = styled.button`
 background: #fff;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 color: #109CF1;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 width: 40%;
`;

export const Text = styled.span`
 text-align: center;
 margin-top: 24px;
 color: #fff;
 font-size: 14px;
`;
export const PasswordField = styled.div`
 display: flex;
 grid-gap: 5px;
 padding: 10px;
 margin-bottom: 32px;
 border: none;
 outline: none;
 color: #109CF1;
 background: #fff;
 border-radius: 4px;
 input{
     border: none;
     outline: none;
 }
`;