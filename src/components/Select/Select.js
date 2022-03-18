import React, { useState } from "react";
import styled from "styled-components";
import {IoMdArrowDropdown} from 'react-icons/io'

const DropDownContainer = styled("div")`
cursor: pointer;
`;

const DropDownHeader = styled("div")`
  font-weight: 500;
  font-size: 13px;
  color: #3faffa;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 100px;
`;

const DropDownList = styled("ul")`
  background: #ffffff;
  border: 2px solid #e5e5e5;
  color: #3faffa;
  font-size: 13px;
  font-weight: 500;
`;

const ListItem = styled("li")`
  list-style: none;
  &:hover {
    color: #fd9e46;
  }
`;

const options = ["This Week", "Monthly", "All"];

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "This Week"} <IoMdArrowDropdown />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  );
}


export default Select