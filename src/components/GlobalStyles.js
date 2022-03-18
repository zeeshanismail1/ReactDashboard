import styled from "styled-components";

export const Button = styled.div`
padding: 5px 10px;
 border-radius: 4px;
 background: ${({primary}) => (primary ? '#2ED47A' : 'none')};
 color: ${({color}) => (color ? '#FFFFFF' : '#90A0B7')};
 font-size: ${({font}) => (font ? '11px' : '12px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: ${({justify}) => (justify ? 'center' : 'flex-start')};
 align-items: center;
 transition: all 0.2s ease-in-out;

 ${({ active }) =>
    active &&
    `
    background: #F7685B;
  `}

 &:hover{
     transition: all 0.2s ease-in-out;
     background: ${({primary}) => (primary ? '#F7685B' : 'none')};
 }
`;
export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
`;