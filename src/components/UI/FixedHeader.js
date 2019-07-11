import React from 'react'
import styled from 'styled-components'

const HEADER_HEIGHT = '100px'

const Fixed = styled.div`
    position: fixed;
    width: 100%;
    height: ${HEADER_HEIGHT};
    left: 0;
    top: 0;
    z-index: 10;
    background-color: #fff;
    @media(min-width: 768px) {
        top: -${HEADER_HEIGHT}
    }
`

function openMenu() {
    document.body.classList.add('menu-open')
}

export default function FixedHeader() {
    return (
        <Fixed className="fixed-header">
            <button onClick={openMenu}>button</button>
        </Fixed>
    )
}
