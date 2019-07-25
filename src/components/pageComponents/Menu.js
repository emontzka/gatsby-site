import React from 'react'
import styled from 'styled-components'
import { SectionLink } from 'react-scroll-section'
import {darkblue, gray} from '../UI/colors'

const Container = styled.div`
    background-color: ${darkblue};
    // color: #fff;
    position: fixed;
    z-index: 30;
    flex: 0 0 auto;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
`

const Item = styled.li`
    display: block;
    cursor: pointer;
    transition: all 0.3s;
    padding: 10px 0;
    border-bottom: 1px solid ${gray};
    text-indent: 10px;
    color: #fff;
    font-weight: ${props => (props.selected ? 'bold' : 'inherit')};
    border-left: ${props => (props.selected ? '3px solid #fff' : 'none')};
    text-shadow: 2px 2px 3px ${gray};
    &:first-child {
        border-top: 1px solid ${gray};
    }
    &:hover {
        font-weight: bold;
    }
`

const MenuItemList = styled.ul`
    margin-left: 0;
    margin-top: 40px;
`
// if (typeof window !== 'undefined') {
    const MenuItem = ({section, children }) => (
        <SectionLink section={section}>
            {link => (
                <Item onClick={link.onClick} selected={link.isSelected} className="menu-item">
                    {children}
                </Item>
            )}
        </SectionLink>
    )
// }

export default function Menu(props) {
    return (
        <Container className="menu-container">
            {typeof window !== 'undefined' && (
           <MenuItemList>
                <MenuItem section="home">Home</MenuItem>
                <MenuItem section="projects">Projects</MenuItem>
                <MenuItem section="experience">Experience</MenuItem>
                <MenuItem section="work">Client Work</MenuItem>
                <MenuItem section="skills">Skills</MenuItem>
                <MenuItem section="contact">Contact</MenuItem>
            </MenuItemList>
            )}
 
        </Container>
    )
}
