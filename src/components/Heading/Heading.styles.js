import styled from 'styled-components/macro';


export const H1 = styled.h1`
  color: ${({clr}) => (clr ? '#02073E' : '#109CF1')};
  font-size: 30px;
  line-height: 35px;
  text-align: ${({Cen}) => (Cen ? 'center' : 'left')};
  @media screen and (max-width: 480px) {
     font-size: 20px;
     line-height: 30px;
 }
`;

export const H2 = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
color: #192A3E;
`;

export const H3 = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #192A3E;
`;

export const H4 = styled.h4`
display: ${({ isOpen }) => (isOpen ? `none` : `block`)};
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 19px;
color: ${({clr}) => (clr ? '#707683' : '#334D6E')};;
opacity: ${({opacity}) => (opacity ? '0.5' : 'none')};
text-align: ${({Cen}) => (Cen ? 'center' : 'left')};
`;

export const H5 = styled.h5`
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
color: ${({color}) => (color ? '#90A0B7' : '#6A707E')};
`;

export const H6 = styled.h6`
display: ${({ isOpen }) => (isOpen ? `none` : `block`)};
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
color: ${({color}) => (color ? '#192A3E' : '#90A0B7')};
`;
export const H7 = styled.h6`
  font-size: var(--h6-font-size);
  line-height: calc(var(--h1-font-size) + 0.3125rem);
`;