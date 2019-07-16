import React from 'react'
import {PanelComponent} from './Panel'
import styled from 'styled-components';

const HalfPanelComponent = styled(PanelComponent)`
    width: calc(50% - 20px);
    @media(min-width: 808px) {
        // max-width: 364px;
    }
`

export default function HalfPanel(props) {
    return (
        <HalfPanelComponent>
            {props.children}
        </HalfPanelComponent>
    )
}