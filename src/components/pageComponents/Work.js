import React, { Component } from 'react'
import HalfPanel from '../UI/HalfPanel'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {ImageArea, InfoPanel, Ellipsis, CloseBtn, IconContainer} from '../UI/PanelElements'



export default class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            panelOpen: false
        }
    }
    openPanel = () => {
        this.setState({
            panelOpen: true
        })
    }
    closePanel = () => {
        this.setState({
            panelOpen: false
        })
    }
    
    render() {
        const {featured_media, title, acf} = this.props.data
        return (
            <HalfPanel>
                {featured_media && (
                    <ImageArea bkImage={featured_media.source_url} />
                        
                )}

                <h2>{title}</h2>
                {acf.short_description && (
                    <p>{acf.short_description}</p>
                )}
                
                {acf.description && (
                    <>
                    <Ellipsis onClick={this.openPanel}><FontAwesomeIcon style={{fontSize: '25px'}} icon={faInfoCircle} /></Ellipsis>
                    <InfoPanel className={this.state.panelOpen ? "open" : ""}>
                        <div dangerouslySetInnerHTML={{__html: acf.description}} />
                        <CloseBtn onClick={this.closePanel}><FontAwesomeIcon style={{fontSize: '30px'}}  icon={faTimes} /></CloseBtn>
                        <IconContainer >
                            {acf.github && (
                                <a style={{color: '#000'}} href={acf.github} target="_blank"><FontAwesomeIcon style={{fontSize: '30px', marginRight: '15px'}}  icon={faGithub} /></a>
                            )}
                            {acf.portfolio_url && (
                                <a style={{color: '#000'}} href={acf.portfolio_url} target="_blank"><FontAwesomeIcon style={{fontSize: '30px', marginRight: '15px'}}  icon={faExternalLinkAlt } /></a>
                            )}
                            
                            
                        </IconContainer>
                        
                    </InfoPanel>
                    </>
                )}

            </HalfPanel>
        )
    }
}

