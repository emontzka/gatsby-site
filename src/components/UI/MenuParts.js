import React from "react";
import { SectionLink } from "react-scroll-section";
import styled from "styled-components";

const Menu = styled.ul`
  margin: 0;
`;

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  user-select: none;
  color: ${props => (props.selected ? "#07689f" : "inherit")};
  border-top: 5px solid ${props =>
    props.selected ? "#ff7e67" : "transparent"};
`;

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

export { MenuItem as Item, Menu };

export default styled;
