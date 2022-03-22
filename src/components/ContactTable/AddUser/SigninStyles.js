import styled from "styled-components";

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
 z-index: 1;
 padding: 30px 0;

 @media screen and (max-width: 400px) {
     padding: 32px;
 }
`;

export const FormLabel = styled.label`
 margin-bottom: 5px;
 font-size: 14px;
 color:  #434955;
`;

export const FormInput = styled.input`
 padding: 10px 15px;
 margin-bottom: 15px;
 border: 1px solid  #434955;
 outline: none;
 color: #434955;
 border-radius: 4px;
 ::placeholder{
     color: #434955;
 }
`;

export const FormButton = styled.button`
 background:  #00bf80;
 padding: 10px 20px;
 border: none;
 border-radius: 4px;
 color: #FFF;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 width: 40%;
 @media screen and (max-width: 460px) {
     width: 100%;
 }
`;
export const PasswordField = styled.div`
display: flex;
 padding: 10px 20px;
 margin-bottom: 32px;
 border: 1px solid  #434955;
 outline: none;
 color: #434955;
 border-radius: 4px;
 input{
     border: none;
     outline: none;
     width: 100%;
     color: #434955;
 ::placeholder{
     color: #434955;
 }
 }
`;