import React from 'react'
import styled from 'styled-components'
import { SectionLink } from 'react-scroll-section'

const Container = styled.div`
    background-color: yellow;
    position: fixed;
    z-index: 30;
    flex: 0 0 auto;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
`

const Item = styled.li`
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s;
`

const MenuItem = ({section, children }) => (
    <SectionLink section={section}>
        {link => (
            <Item onClick={link.onClick} selected={link.isSelected} className="menu-item">
                {children}
            </Item>
        )}
    </SectionLink>
)

export default function Menu(props) {
    return (
        <Container className="menu-container">
            <ul>
                <MenuItem section="home">Home</MenuItem>
                <MenuItem section="projects">Projects</MenuItem>
                <MenuItem section="experience">Experience</MenuItem>
                
            </ul>
        </Container>
    )
}
