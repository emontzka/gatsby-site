import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import menubar from '../../images/icons/menu-bar.png'

const HEADER_HEIGHT = '100px'

const Fixed = styled.div`
    position: fixed;
    width: 100%;
    height: ${HEADER_HEIGHT};
    left: 0;
    top: 0;
    z-index: 10;
    background-color: #fff;
    border-bottom: 2px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px) {
        top: -${HEADER_HEIGHT}
    }
`
const FixedTitle = styled.h1`
    text-align: center;
    margin-bottom: 0;
`

const Burger = styled.img`
    position: absolute;
    display: block;
    height: 30px;
    width: auto;
    left: 50px;
`

function openMenu() {
    document.body.classList.add('menu-open')
}

export default function FixedHeader() {
    return (
        <Fixed className="fixed-header">
            {/* <button onClick={openMenu}>button</button> */}
            <Burger src={menubar} alt="alt text" onClick={openMenu} />
            <FixedTitle>Eric Montzka</FixedTitle>
        </Fixed>
    )
}
