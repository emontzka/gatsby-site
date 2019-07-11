import React from 'react'
import styled from 'styled-components'

const OL = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 20;
    height: 100vh;
    width: 100vw;
`

export default function Overlay() {
    return (
        <OL className="overlay">
            
        </OL>
    )
}
