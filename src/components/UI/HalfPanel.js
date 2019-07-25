import React from 'react'
import {PanelComponent} from './Panel'
import styled from 'styled-components';

const HalfPanelComponent = styled(PanelComponent)`
    // width: calc(50% - 20px);
    width: 300px;
    height: 360px;
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
`

export default function HalfPanel(props) {
    return (
        <HalfPanelComponent>
            {props.children}
        </HalfPanelComponent>
    )
}