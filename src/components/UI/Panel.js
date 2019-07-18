import React from 'react'
import styled from 'styled-components';

export const PanelComponent = styled.div`
    box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.5);
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
    width: 100%;
    overflow: hidden;
`

export default function Panel(props) {
    return (
        <PanelComponent>
            {props.children}
        </PanelComponent>
    )
}
