import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: yellow;
    position: fixed;
    flex: 0 0 auto;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    @media(min-width: 768px){
        // position: relative;
        // height: 100%;
    }
`

export default function Menu(props) {
    return (
        <Container className="menu-container">
            <ul>
                <li>Home</li>
                <li>Experience</li>
                <li>Portfolio</li>
            </ul>
        </Container>
    )
}
