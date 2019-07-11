import React from 'react'
import styled from 'styled-components';

const PanelComponent = styled.div`
    box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.5);
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
    width: calc(100% - 40px);
    @media(min-width: 808px) {
        max-width: 768px;
    }
`

export default function Panel(props) {
    return (
        <PanelComponent>
            {props.children}
        </PanelComponent>
    )
}
