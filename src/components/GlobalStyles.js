import styled from "styled-components";

export const Button = styled.div`
 padding: ${({primary}) => (primary ? '10px 20px' : '5px')};
 border-radius: 4px;
 background: ${({primary}) => (primary ? '#00bf80' : '#00bf80')};
 color: #fff;
 font-size: ${({font}) => (font ? '20px' : '12px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: ${({justify}) => (justify ? 'center' : 'flex-start')};
 align-items: center;
 transition: all 0.2s ease-in-out;
 box-shadow: ${({primary}) => (primary ? '0px 4px 10px rgba(16, 156, 241, 0.24)' : 'none')};

 ${({ active }) =>
    active &&
    `
    background: #F7685B;
  `}

 &:hover{
     transition: all 0.2s ease-in-out;
     background: #434955;
 }
`;
export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
`;