import React from 'react'
import Panel from './Panel'
import styled from 'styled-components';

const HalfPanelComponent = styled.Panel`
    width: calc(50% - 40px);
    @media(min-width: 808px) {
        max-width: 364px;
    }
`

export default function HalfPanel(props) {
    return (
        <HalfPanelComponent>
            {props.children}
        </HalfPanelComponent>
    )
}